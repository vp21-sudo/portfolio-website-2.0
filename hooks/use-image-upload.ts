import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import useDebounce from "./use-debounce";

interface UseImageUploadProps {
  onUpload?: (url: string, base64: string) => void;
}

export function useImageUpload({ onUpload }: UseImageUploadProps = {}) {
  const previewRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [base64String, setBase64String] = useState<string | null>(null);
  const [width, setWidth] = useState<number>(300);
  const debouncedWidth = useDebounce(width, 300);
  const [height, setHeight] = useState<number>(300);
  const debouncedHeight = useDebounce(height, 300);
  const [quality, setQuality] = useState<number>(75);
  const debouncedQuality = useDebounce(quality, 300);
  const [format, setFormat] = useState<string>("JPEG");

  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<string | null>(null); // Store original image size (KB)
  const [compressedSize, setCompressedSize] = useState<string | null>(null); // Store compressed image size (KB)

  const handleThumbnailClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setFileName(file.name);
        setOriginalSize((file.size / 1024 / 1024).toFixed(2)); // Convert size to MB and round to 2 decimal places
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        previewRef.current = url;

        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result?.toString().split(",")[1] || "";
          setBase64String(base64);
          onUpload?.(url, base64);
        };
        reader.readAsDataURL(file);
      }
    },
    [onUpload],
  );

  const handleRemove = useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setFileName(null);
    setBase64String(null);
    setCompressedImage(null);
    setOriginalSize(null);
    setCompressedSize(null);
    previewRef.current = null;
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [previewUrl]);

  const compressImage = useCallback(async () => {
    if (!base64String) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://y5oe2nr8d2.execute-api.ap-south-1.amazonaws.com/default/image-compressor",
        {
          imageBase64: base64String,
          width: debouncedWidth,
          height: debouncedHeight,
          quality: debouncedQuality,
          format,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        },
      );

      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const compressedBase64 = response.data;
      setCompressedImage(`data:image/jpeg;base64,${compressedBase64}`);

      // Calculate the compressed size
      const compressedSizeMB = (
        (compressedBase64.length * 3) /
        4 /
        1024 /
        1024
      ).toFixed(2);

      // Base64 size to MB
      setCompressedSize(compressedSizeMB);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, [base64String, debouncedHeight, debouncedWidth, debouncedQuality, format]);

  useEffect(() => {
    compressImage();
    return () => {
      if (previewRef.current) {
        URL.revokeObjectURL(previewRef.current);
      }
    };
  }, [compressImage]);

  return {
    previewUrl,
    fileName,
    base64String,
    height,
    setHeight,
    width,
    setWidth,
    quality,
    setQuality,
    format,
    setFormat,
    compressedImage,
    originalSize,
    compressedSize,
    loading,
    error,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
  };
}
