"use client";

import { useImageUpload } from "@/hooks/use-image-upload";
import { Button } from "@/components/ui/button";
import { Download, FileImage, Upload, X } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const {
    previewUrl,
    compressedImage,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
    compressImage,
    loading,
    error,
    originalSize,
    compressedSize,
  } = useImageUpload();

  const handleDownload = () => {
    if (!compressedImage) return;
    const link = document.createElement("a");
    link.href = compressedImage;
    link.download = "compressed-image.jpg"; // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full p-10 min-h-screen flex flex-col justify-center items-center space-y-6">
      <div className="flex flex-col md:flex-row gap-20 ">
        {/* Original Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative inline-flex">
            <Button
              variant="ghost"
              className="relative border-2 border-stone-600 w-72 h-72 md:w-96 md:h-96 border-dashed overflow-hidden flex items-center justify-center"
              onClick={handleThumbnailClick}
              aria-label={previewUrl ? "Change image" : "Upload image"}
            >
              {previewUrl ? (
                <Image
                  className="h-full w-full object-cover"
                  src={previewUrl}
                  alt="Preview of uploaded image"
                  width={300}
                  height={300}
                  style={{ objectFit: "scale-down" }}
                />
              ) : (
                <div aria-hidden="true">
                  <FileImage
                    className=" dark:text-slate-50 "
                    style={{ width: "36px", height: "36px" }}
                  />
                </div>
              )}
            </Button>
            {previewUrl && (
              <Button
                onClick={handleRemove}
                size="icon"
                variant="destructive"
                className="absolute -right-2 -top-2 size-6 rounded-full border-2 border-background"
                aria-label="Remove image"
              >
                <X />
              </Button>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
              aria-label="Upload image file"
            />
          </div>
          {originalSize !== null && (
            <p className="mt-2 text-sm text-gray-600">
              Original Size: <strong>{originalSize} KB</strong>
            </p>
          )}
          {previewUrl && (
            <Button
              onClick={compressImage}
              variant={"default"}
              className="mt-4"
              disabled={loading}
            >
              {loading ? (
                "Compressing..."
              ) : (
                <span className=" flex gap-2">
                  <Upload /> Compress Image
                </span>
              )}
            </Button>
          )}
        </div>

        {/* Compressed Image Section */}

        <div className="flex flex-col items-center">
          <div className="relative border-2 border-stone-600 w-72 h-72 md:w-96 md:h-96 overflow-hidden border-dashed flex items-center justify-center">
            {compressedImage && (
              <Image
                className="h-full w-full p-4 object-cover"
                src={compressedImage}
                alt="Compressed image"
                width={400}
                height={400}
                style={{ objectFit: "scale-down" }}
              />
            )}
          </div>
          {compressedSize !== null && compressedImage && (
            <p className="mt-2 text-sm text-gray-600">
              Compressed Size: <strong>{compressedSize} KB</strong>
            </p>
          )}
          {compressedImage && (
            <Button
              onClick={handleDownload}
              variant={"default"}
              className="mt-4 flex items-center gap-2"
            >
              <Download size={16} />
              Download Image
            </Button>
          )}
        </div>
      </div>

      {/* Status Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl
          ? "Image uploaded and preview available"
          : "No image uploaded"}
      </div>
    </div>
  );
}
