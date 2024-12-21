"use client";
import { Home, Kanban, Phone, Menu, X, SquareTerminal } from "lucide-react";
import { useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const TopNav = () => {
  const [fullNav, setFullNav] = useState(false);
  const [hash, setHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

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
        className={`z-50 fixed md:w-full right-1 md:flex justify-center items-center transition-all duration-300 ${
          fullNav ? "mt-0 h-16 pt-4" : "mt-4 h-20"
        }`}
      >
        <motion.div
          className={`md:backdrop-blur-xl md:rounded-full px-6 py-4 flex items-center text-slate-100 transition-all ease-in-out duration-300 ${
            fullNav
              ? "w-full rounded-lg py-4 px-10 justify-between"
              : `w-1/3 rounded-full py-4 md:translate-y-40  justify-between`
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
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
          <div className="md:hidden w-full flex items-center">
            <button
              className="text-slate-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop as */}
          <div className="hidden md:flex w-2/3 justify-end items-center gap-10">
            <a
              href={"#home"}
              className="group flex justify-center items-center gap-2 text-xl transition-transform duration-100"
            >
              <Home
                size={18}
                className={`group-hover:scale-125 group-hover:text-fuchsia-400 transition-transform duration-200 ${
                  (hash === "#home" || hash === "") &&
                  "scale-125 text-fuchsia-400"
                }`}
              />
              <span
                className={`relative group-hover:text-fuchsia-400 font-bold flex ${
                  (hash === "#home" || hash === "") && "text-fuchsia-500"
                }`}
              >
                Home
                <span
                  className={`absolute bottom-0 w-0 h-[0.1rem] bg-fuchsia-500 group-hover:w-full transition-all ease-in-out duration-200 ${
                    (hash === "#home" || hash === "") && "w-full"
                  }`}
                ></span>
              </span>
            </a>
            <a
              href={"#projects"}
              className="group flex justify-center items-center gap-2 text-xl transition-transform duration-100"
            >
              <Kanban
                size={18}
                className={`group-hover:-rotate-90 group-hover:text-fuchsia-400 transition-transform duration-200 ${
                  hash === "#projects" && "-rotate-90 text-fuchsia-400"
                }`}
              />
              <span
                className={`relative group-hover:text-fuchsia-400 font-bold flex ${
                  hash === "#projects" && "text-fuchsia-500"
                }`}
              >
                Projects
                <span
                  className={`absolute bottom-0 w-0 h-[0.1rem] bg-fuchsia-500 group-hover:w-full transition-all ease-in-out duration-200 ${
                    hash === "#projects" && "w-full"
                  }`}
                ></span>
              </span>
            </a>
            <a
              href={"#about"}
              className="group flex justify-center items-center gap-2 text-xl transition-transform duration-300"
            >
              <SquareTerminal
                size={18}
                className={`group-hover:scale-125 group-hover:text-fuchsia-400 transition-transform duration-200 ${
                  hash === "#about" && "scale-125 text-fuchsia-400"
                }`}
              />
              <span
                className={`relative group-hover:text-fuchsia-400 font-bold flex ${
                  hash === "#about" && "text-fuchsia-500"
                }`}
              >
                About
                <span
                  className={`absolute bottom-0 w-0 h-[0.1rem] bg-fuchsia-500 group-hover:w-full transition-all ease-in-out duration-200 ${
                    hash === "#about" && "w-full"
                  }`}
                ></span>
              </span>
            </a>
            <a
              href={"#contact"}
              className="group flex justify-center items-center gap-2 text-xl transition-transform duration-300"
            >
              <Phone
                size={18}
                className={`group-hover:rotate-0 group-hover:text-fuchsia-400 transition-transform duration-200 ${
                  hash === "#contact" && "rotate-0 text-fuchsia-400"
                }`}
              />
              <span
                className={`relative group-hover:text-fuchsia-400 font-bold flex ${
                  hash === "#contact" && "text-fuchsia-500"
                }`}
              >
                Contact
                <span
                  className={`absolute bottom-0 w-0 h-[0.1rem] bg-fuchsia-500 group-hover:w-full transition-all ease-in-out duration-200 ${
                    hash === "#contact" && "w-full"
                  }`}
                ></span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Side Navigation for Mobile */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 z-40 w-4/5 h-screen bg-slate-800 text-slate-100 shadow-lg"
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
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
};

export { TopNav };
