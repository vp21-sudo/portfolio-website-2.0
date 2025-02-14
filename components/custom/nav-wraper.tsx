"use client";
import { usePathname } from "next/navigation";
import { TopNav } from "@/components/custom/nav-bar";

export default function NavWrapper() {
  const pathname = usePathname();

  // Hide navbar only on the privacy page
  if (pathname === "/privacy") return null;

  return <TopNav />;
}
