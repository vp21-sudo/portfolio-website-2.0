import { Contact, Home, Kanban, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className="z-50 absolute w-full flex justify-center items-center">
      <div className="container backdrop-blur-xl rounded-full mt-4 px-6 py-4 w-full h-18 flex justify-between items-center text-slate-200">
        <Link href={"/"}>
          <Image
            src="/logo.jpeg"
            alt="logo"
            width={60}
            height={50}
            className="rounded-full"
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
            <span className=" relative group-hover:text-fuchsia-400 font-bold flex ">
              Home
              <span className=" absolute bottom-0 w-0 h-[0.1rem] bg-fuchsia-500 group-hover:w-full transition-all ease-in-out duration-200"></span>
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
            <span className=" relative group-hover:text-fuchsia-400 font-bold flex ">
              Projects
              <span className=" absolute bottom-0 w-0 h-[0.1rem] bg-fuchsia-500 group-hover:w-full transition-all ease-in-out duration-200"></span>
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
            <span className=" relative group-hover:text-fuchsia-400 font-bold flex ">
              Contact
              <span className=" absolute bottom-0 w-0 h-[0.1rem] bg-fuchsia-500 group-hover:w-full transition-all ease-in-out duration-200"></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { TopNav };
