"use client";
import { usePathname } from "next/navigation";
import { TopNav } from "@/components/custom/nav-bar";

export default function NavWrapper() {
  const pathname = usePathname();

  // Hide navbar only on the privacy page
  const noNavPaths = ["/privacy", "/image"];
  if (noNavPaths.includes(pathname)) return null;

  return <TopNav />;
}
