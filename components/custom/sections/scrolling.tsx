"use client";
import { Poppins } from "next/font/google";

const popins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const techs = [
  "Frontend Development",
  "React",
  "Backend Development",
  "Node.js",
  "Full Stack",
  "Next.js",
  "Responsive Design",
  "Bun",
  "Web Performance",
  "TypeScript",
  "CSS Frameworks",
  "Tailwind CSS",
  "Web Animations",
  "Motions",
  "REST",
  "Docker",
  "Kubernetes",
  "React Native",
  "Expo",
  "Flutter",
];

const ScrollingSection = () => {
  return (
    <div
      className={
        popins.className +
        " h-20 md:h-32 bg-slate-800 flex flex-col gap-2 text-4xl md:text-6xl justify-center items-center w-full overflow-hidden"
      }
    >
      <div className="w-full flex text-slate-50 font-bold gap-10 animate-scroll">
        {techs.map((value, index) => (
          <p key={index} className="whitespace-nowrap">
            {value}
          </p>
        ))}
      </div>
      <div className="w-full flex text-slate-50 font-bold gap-10 animate-scroll-rev">
        {techs
          .slice()
          .reverse()
          .map((value, index) => (
            <p key={index} className="whitespace-nowrap">
              {value}
            </p>
          ))}
      </div>
    </div>
  );
};

export default ScrollingSection;
