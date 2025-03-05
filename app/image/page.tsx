"use client";

import { useImageUpload } from "@/hooks/use-image-upload";
import { Button } from "@/components/ui/button";
import { Download, FileImage, Loader2, Upload, X } from "lucide-react";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Component() {
  const {
    previewUrl,
    compressedImage,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
    height,
    setHeight,
    width,
    setWidth,
    quality,
    setQuality,
    format,
    setFormat,
    error,
    originalSize,
    compressedSize,
    loading,
    fileName,
  } = useImageUpload();

  const handleDownload = () => {
    if (!compressedImage) return;
    const link = document.createElement("a");
    link.href = compressedImage;
    link.download = `${fileName}-compressed.${format?.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // State for Aspect Ratio, Width, Height, and Quality
  const [aspectRatio, setAspectRatio] = useState<string | null>("1:1");
  const [edit, setEdit] = useState<boolean>(false);

  // Preset aspect ratios (Width : Height)
  const aspectRatios: Record<
    "1:1" | "16:9" | "4:3" | "3:2" | "Free",
    number | null
  > = {
    "1:1": 1,
    "16:9": 16 / 9,
    "4:3": 4 / 3,
    "3:2": 3 / 2,
    Free: null, // Allows independent width/height adjustment
  };

  useEffect(() => {
    console.log(edit);
    if (previewUrl) {
      console.log("setting edit as tru");
      setEdit(true);
    }
  }, [previewUrl, edit]);
  // Handle Aspect Ratio Change
  const handleAspectRatioChange = (value: keyof typeof aspectRatios) => {
    setAspectRatio(value);
    if (value !== "Free") {
      const ratio = aspectRatios[value] || 1;
      setHeight(Math.round(width / ratio));
    }
  };

  // Handle Width Slider
  const handleWidthChange = (value: number[]) => {
    setWidth(value[0]);
    if (aspectRatio !== "Free") {
      const ratio = aspectRatios[aspectRatio as keyof typeof aspectRatios] || 1;
      setHeight(Math.round(value[0] / ratio));
    }
  };

  // Handle Height Slider
  const handleHeightChange = (value: number[]) => {
    setHeight(value[0]);
    if (aspectRatio !== "Free") {
      const ratio = aspectRatios[aspectRatio as keyof typeof aspectRatios] || 1;
      setWidth(Math.round(value[0] * ratio));
    }
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
                <div
                  aria-hidden="true"
                  className=" flex flex-col gap-3 justify-center"
                >
                  <Upload
                    className="dark:text-slate-50"
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
        </div>

        {/* Aspect Ratio and Image Settings */}
        <div className="dark:text-slate-50 h-96 flex flex-col justify-center items-center gap-5">
          {/* Aspect Ratio Dropdown */}
          <div className=" capitalize w-full text-center text-xl font-semibold">
            Image settings
          </div>
          <div className="flex justify-center items-center gap-2">
            <label>Aspect Ratio:</label>
            <Select
              disabled={!edit || loading}
              value={aspectRatio ?? "Free"}
              onValueChange={handleAspectRatioChange}
            >
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Select Aspect Ratio" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(aspectRatios).map((ratio) => (
                  <SelectItem key={ratio} value={ratio}>
                    {ratio}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Width Slider */}
          <div className="w-full flex flex-col justify-center items-center">
            <label className="mb-1">Width: {width}px</label>
            <Slider
              disabled={!edit || loading}
              defaultValue={[width]}
              max={2600}
              min={50}
              step={5}
              value={[width]}
              onValueChange={handleWidthChange}
              className="w-64 border-2 rounded-full"
            />
          </div>

          {/* Height Slider */}
          <div className="w-full flex flex-col justify-center items-center">
            <label className="mb-1">Height: {height}px</label>
            <Slider
              disabled={!edit || loading}
              defaultValue={[height]}
              max={2600}
              min={50}
              step={5}
              value={[height]}
              onValueChange={handleHeightChange}
              className="w-64 border-2 rounded-full"
            />
          </div>

          {/* Quality Slider */}
          <div className="w-full flex flex-col justify-center items-center">
            <label className="mb-1">Quality: {quality}%</label>
            <Slider
              disabled={!edit || loading}
              defaultValue={[quality]}
              max={100}
              min={10}
              step={5}
              value={[quality]}
              onValueChange={(value) => setQuality(value[0])}
              className="w-64 border-2 rounded-full"
            />
          </div>
          <div className=" w-full ">
            <RadioGroup
              disabled={!edit || loading}
              defaultValue={format}
              className=" flex justify-between pt-2"
              onValueChange={setFormat}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="JPEG" id="JPEG" />
                <Label htmlFor="JPEG">JPEG</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="PNG" id="PNG" />
                <Label htmlFor="PNG">PNG</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="WEBP" id="WEBP" />
                <Label htmlFor="WEBP">WEBP</Label>
              </div>
            </RadioGroup>
          </div>

          <Button
            disabled={!compressedImage || loading}
            onClick={handleDownload}
            variant={"default"}
            className="mt-4 w-full flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className=" w-full h-full animate-spin" />
            ) : (
              <>
                <Download size={16} /> Download Image
              </>
            )}
          </Button>
        </div>

        {/* Compressed Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative border-2 border-stone-600 w-72 h-72 md:w-96 md:h-96 overflow-hidden border-dashed flex items-center justify-center">
            {compressedImage ? (
              <Image
                className="h-full w-full p-4 object-cover"
                src={compressedImage}
                alt="Compressed image"
                width={400}
                height={400}
                style={{ objectFit: "scale-down" }}
              />
            ) : (
              <FileImage
                className="dark:text-slate-50"
                style={{ width: "36px", height: "36px" }}
              />
            )}
          </div>
          {compressedSize !== null && compressedImage && (
            <p className="mt-2 text-sm text-gray-600">
              Updated Size: <strong>{compressedSize} KB</strong>
            </p>
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
