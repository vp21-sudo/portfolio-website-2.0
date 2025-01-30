"use client";
import {
  Home,
  Kanban,
  Phone,
  Menu,
  X,
  SquareTerminal,
  Sun,
  Moon,
} from "lucide-react";
import { useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "@/context/theme"; // Adjust the import path based on your project

const TopNav = () => {
  const [fullNav, setFullNav] = useState(false);
  const [hash, setHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      setFullNav(progress > 0.18);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    // Listen for history changes, including hash changes
    window.addEventListener("popstate", handleHashChange);

    // Set the initial hash
    setHash(window.location.hash);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <div
        className={`z-50 fixed md:w-full right-1 md:right-0  md:flex justify-center items-center transition-all ease-in-out duration-300 ${
          fullNav ? "mt-0 h-16 pt-4" : "mt-4 h-20"
        } ${theme === "dark" ? "text-white" : " text-gray-900"}`}
      >
        <motion.div
          className={`px-6 py-4 flex items-center bg-transparent md:bg-slate-200 md:dark:bg-slate-800 transition-all ease-in-out duration-500 ${
            fullNav
              ? "w-full py-4 px-10 justify-between"
              : `w-2/5 rounded-full py-4 md:translate-y-40 justify-between`
          } ${theme === "dark" ? "bg-gray-800" : "bg-slate-200"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <a href={"/"}>
            <Image
              src="/logo.jpeg"
              alt="logo"
              width={60}
              height={50}
              className={
                (!fullNav ? "w-0" : "w-18") + " hidden md:flex rounded-full"
              }
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
            <a
              href={"#home"}
              className={`group flex justify-center items-center gap-2 text-xl transition-transform duration-100 ${theme === "dark" ? "hover:text-yellow-300" : "hover:text-blue-600"}`}
            >
              <Home
                size={18}
                className={`group-hover:scale-125 transition-transform duration-200 ${
                  (hash === "#home" || hash === "") &&
                  (theme === "dark" ? "text-yellow-300" : "text-blue-600")
                }`}
              />
              <span
                className={`relative font-bold flex ${
                  (hash === "#home" || hash === "") &&
                  (theme === "dark" ? "text-yellow-300" : "text-blue-600")
                }`}
              >
                Home
                <span
                  className={`absolute bottom-0 w-0 h-[0.1rem] ${
                    theme === "dark" ? "bg-yellow-300" : "bg-blue-600"
                  } group-hover:w-full transition-all ease-in-out duration-200 ${
                    (hash === "#home" || hash === "") && "w-full"
                  }`}
                ></span>
              </span>
            </a>
            {/* Other Links */}
            <a
              href={"#projects"}
              className={`group flex justify-center items-center gap-2 text-xl transition-transform duration-100 ${theme === "dark" ? "hover:text-yellow-300" : "hover:text-blue-600"}`}
            >
              <Kanban
                size={18}
                className={`group-hover:-rotate-90 transition-transform duration-200 ${
                  hash === "#projects" &&
                  (theme === "dark" ? "text-yellow-300" : "text-blue-600")
                }`}
              />
              <span
                className={`relative font-bold flex ${
                  hash === "#projects" &&
                  (theme === "dark" ? "text-yellow-300" : "text-blue-600")
                }`}
              >
                Projects
                <span
                  className={`absolute bottom-0 w-0 h-[0.1rem] ${
                    theme === "dark" ? "bg-yellow-300" : "bg-blue-600"
                  } group-hover:w-full transition-all ease-in-out duration-200 ${
                    hash === "#projects" && "w-full"
                  }`}
                ></span>
              </span>
            </a>
            <a
              href={"#about"}
              className={`group flex justify-center items-center gap-2 text-xl transition-transform duration-300 ${theme === "dark" ? "hover:text-yellow-300" : "hover:text-blue-600"}`}
            >
              <SquareTerminal
                size={18}
                className={`group-hover:scale-125 transition-transform duration-200 ${
                  hash === "#about" &&
                  (theme === "dark" ? "text-yellow-300" : "text-blue-600")
                }`}
              />
              <span
                className={`relative font-bold flex ${
                  hash === "#about" &&
                  (theme === "dark" ? "text-yellow-300" : "text-blue-600")
                }`}
              >
                About
                <span
                  className={`absolute bottom-0 w-0 h-[0.1rem] ${
                    theme === "dark" ? "bg-yellow-300" : "bg-blue-600"
                  } group-hover:w-full transition-all ease-in-out duration-200 ${
                    hash === "#about" && "w-full"
                  }`}
                ></span>
              </span>
            </a>
            <a
              href={"#contact"}
              className={`group flex justify-center items-center gap-2 text-xl transition-transform duration-300 ${theme === "dark" ? "hover:text-yellow-300" : "hover:text-blue-600"}`}
            >
              <Phone
                size={18}
                className={` rotate-90 group-hover:rotate-0 transition-transform duration-200 ${
                  hash === "#contact" &&
                  (theme === "dark" ? "text-yellow-300 " : "text-blue-600")
                }`}
              />
              <span
                className={`relative font-bold flex ${
                  hash === "#contact" &&
                  (theme === "dark" ? "text-yellow-300" : "text-blue-600")
                }`}
              >
                Contact
                <span
                  className={`absolute bottom-0 w-0 h-[0.1rem] ${
                    theme === "dark" ? "bg-yellow-300" : "bg-blue-600"
                  } group-hover:w-full transition-all ease-in-out duration-200 ${
                    hash === "#contact" && "w-full"
                  }`}
                ></span>
              </span>
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
              className="rounded-full mb-6"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <nav className="relative flex items-center flex-col gap-6">
              <a
                href={"#home"}
                className="flex items-center gap-2 text-xl mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home size={20} />
                Home
              </a>
              <a
                href={"#projects"}
                className="flex items-center gap-2 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Kanban size={20} />
                Projects
              </a>
              <a
                href={"#about"}
                className="flex items-center gap-2 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <SquareTerminal size={20} />
                About
              </a>
              <a
                href={"#contact"}
                className="flex items-center gap-2 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={20} />
                Contact
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
