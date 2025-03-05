import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Compressor",
};

export default function ImageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children; // Simply return the children without extra wrapping
}
