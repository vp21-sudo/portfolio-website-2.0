"use client";
import { Home, Kanban, Phone } from "lucide-react";
import { useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
const TopNav = () => {
  const [fullNav, setFullNav] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Subscribe to scrollYProgress changes using the updated `.on` method
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      setFullNav(progress > 0.35); // Adjust threshold as needed
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, [scrollYProgress]);

  return (
    <div
      className={`z-50 fixed w-full flex justify-center items-center transition-all duration-300 ${
        fullNav ? "mt-0 h-16 pt-4" : "mt-4 h-20"
      }`}
    >
      <motion.div
        className={` w-0 backdrop-blur-xl rounded-full px-6 py-4  flex items-center text-slate-100 transition-all ease-in-out duration-300 ${
          fullNav
            ? " w-full rounded-lg py-4 px-10 justify-between "
            : " w-1/3 rounded-full py-4 translate-y-40 justify-between"
        }`}
        initial={{ opacity: 0 }} // Initial animation state (off-screen and transparent)
        animate={{ opacity: 1 }} // Target animation state
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Link href={"/"}>
          <Image
            src="/logo.jpeg"
            alt="logo"
            width={60}
            height={50}
            className={(!fullNav ? "w-8" : "w-18") + " rounded-full"}
          />
        </Link>

        <div className="w-2/3 flex justify-end items-center gap-10">
          <Link
            href={"/home"}
            className="group flex justify-center items-center gap-2 text-xl transition-transform duration-100 "
          >
            <Home
              size={18}
              className="group-hover:scale-125 group-hover:text-fuchsia-400 transition-transform duration-200"
            />
            <span className="relative group-hover:text-fuchsia-400 font-bold flex">
              Home
              <span className="absolute bottom-0 w-0 h-[0.1rem] bg-fuchsia-500 group-hover:w-full transition-all ease-in-out duration-200"></span>
            </span>
          </Link>
          <Link
            href={"/projects"}
            className="group flex justify-center items-center gap-2 text-xl transition-transform duration-100"
          >
            <Kanban
              size={18}
              className="group-hover:-rotate-90 rotate-90 group-hover:text-fuchsia-400 transition-transform duration-200"
            />
            <span className="relative group-hover:text-fuchsia-400 font-bold flex">
              Projects
              <span className="absolute bottom-0 w-0 h-[0.1rem] bg-fuchsia-500 group-hover:w-full transition-all ease-in-out duration-200"></span>
            </span>
          </Link>
          <Link
            href={"/contact"}
            className="group flex justify-center items-center gap-2 text-xl transition-transform duration-300 "
          >
            <Phone
              size={18}
              className="group-hover:rotate-0 rotate-90 group-hover:text-fuchsia-400 transition-transform duration-200"
            />
            <span className="relative group-hover:text-fuchsia-400 font-bold flex">
              Contact
              <span className="absolute bottom-0 w-0 h-[0.1rem] bg-fuchsia-500 group-hover:w-full transition-all ease-in-out duration-200"></span>
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export { TopNav };
