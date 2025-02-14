import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/theme";
import NavWrapper from "@/components/custom/nav-wraper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VP | sudo",
  description:
    "Transforming possibilities into digital realities. Explore my portfolio showcasing innovative projects, skills, and experiences in web development, software engineering, and modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 max-w-screen-sm md:max-w-[100vw] overflow-x-hidden`}
      >
        <ThemeProvider>
          <NavWrapper />
          <div className=" transition-colors ease-in-out duration-200  w-full min-h-screen bg-slate-100 dark:bg-slate-900">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
