"use client";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "@/context/theme"; // Adjust the import path based on your project

const TopNav = () => {
  const fullNav = true;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Top Navigation */}
      <div
        className={`z-50 fixed md:w-full right-1 md:right-0  md:flex justify-center items-center transition-all ease-in-out duration-300 ${
          fullNav ? "mt-0 h-16 pt-4" : "mt-0 h-10"
        } ${theme === "dark" ? "text-white" : " text-gray-900"}`}
      >
        <motion.div
          className={` px-4 flex items-center bg-transparent backdrop-blur-lg transition-all ease-in-out duration-500 ${
            fullNav
              ? " container mt-5 rounded-full w-2/3 py-4 px-10 justify-between"
              : `w-2/6 rounded-full py-4 md:translate-y-40 justify-between`
          } ${theme === "dark" ? "bg-gray-800" : "bg-slate-200"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <a href={"/"}>
            <Image
              src="/logo.jpeg"
              alt="logo"
              width={50}
              height={50}
              className={" w-18 hidden md:flex rounded-full"}
            />
          </a>

          {/* Menu Toggle for Mobile */}
          <div className="md:hidden fixed top-6 border-2 border-slate-300 rounded-lg right-6 pt-1 pl-1 pr-1">
            <button
              className=" bg-transparent "
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={28} className=" text-slate-950 dark:text-slate-50" />
              ) : (
                <Menu
                  size={28}
                  className=" text-slate-950 dark:text-slate-50"
                />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-2/3 justify-end items-center gap-10">
            {/* Social Media Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/vp21-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 dark:hover:text-yellow-300 transition-transform hover:scale-110"
              >
                <Image
                  src={"/github.png"}
                  alt="Github"
                  width={30}
                  height={30}
                  className=" bg-slate-950 p-1 rounded-full"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sudovp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 pt-1 dark:hover:text-yellow-300 transition-transform hover:scale-110"
              >
                <Image
                  src={"/linkedin.png"}
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.instagram.com/vishwa_prasad_1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 dark:hover:text-yellow-300 transition-transform hover:scale-110"
              >
                <Image
                  src={"/instagram.png"}
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="mailto:vishwaprasad11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 dark:hover:text-yellow-300 transition-transform hover:scale-110"
              >
                <Image src={"/gmail.png"} alt="Gmail" width={30} height={30} />
              </a>
            </div>
            {/* Theme Toggle Button */}
            <div className="flex justify-between items-center">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 dark:bg-slate-900 border-blue-600 dark:border-yellow-300 border-2 rounded-full"
              >
                {theme === "dark" ? (
                  <Sun size={20} className="text-yellow-300" />
                ) : (
                  <Moon size={20} className="text-blue-600" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Side Navigation for Mobile */}
      {isMobileMenuOpen && (
        <motion.div
          className={`fixed  top-0 left-0 z-40 w-4/5 h-screen shadow-lg ${
            theme === "dark"
              ? "bg-slate-800 text-white"
              : "bg-white text-gray-900"
          }`}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="p-4">
            <Image
              src="/logo.jpeg"
              alt="logo"
              width={40}
              height={40}
              className=" rounded-full mb-6"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <nav className="relative flex items-center flex-col gap-6">
              <a
                href="https://github.com/vp21-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 dark:hover:text-yellow-300 transition-transform hover:scale-110"
              >
                <Image
                  src={"/github.png"}
                  alt="Github"
                  width={30}
                  height={30}
                  className=" bg-slate-950 rounded-full p-[0.1vh]"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sudovp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 pt-1 dark:hover:text-yellow-300 transition-transform hover:scale-110"
              >
                <Image
                  src={"/linkedin.png"}
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.instagram.com/vishwa_prasad_1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 dark:hover:text-yellow-300 transition-transform hover:scale-110"
              >
                <Image
                  src={"/instagram.png"}
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="mailto:vishwaprasad11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 dark:hover:text-yellow-300 transition-transform hover:scale-110"
              >
                <Image src={"/gmail.png"} alt="Gmail" width={30} height={30} />
              </a>
              {/* Theme Toggle Button */}
              <div className="flex justify-between items-center">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 dark:bg-slate-900 border-blue-600 dark:border-yellow-300 border-2 rounded-full"
                >
                  {theme === "dark" ? (
                    <Sun size={20} className="text-yellow-300" />
                  ) : (
                    <Moon size={20} className="text-blue-600" />
                  )}
                </button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
};

export { TopNav };
