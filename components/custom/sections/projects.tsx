import { Poppins } from "next/font/google";
import Image from "next/image";

const popins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const ProjectGrid = () => {
  const technologies = ["Next.js", "React", "Node.js", "SSE"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-4 text-slate-50 bg-slate-800 rounded-lg p-6 m-4 shadow-lg">
      {/* Title */}
      <h1 className="col-span-1 md:col-span-2 row-span-1 text-left text-xl font-bold mb-4">
        Real Time Dashboard
      </h1>

      {/* Content */}
      <p className="col-span-1 md:col-span-2 row-span-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Image */}
      <Image
        src={"/bg1.jpg"}
        alt="Project Image"
        width={500}
        height={500}
        className="col-span-1 row-span-2 md:row-span-4 rounded-lg object-cover"
      />

      {/* Technologies Used */}
      <div className="col-span-1 md:col-span-2 flex flex-wrap gap-2 items-center">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-slate-200 h-6 text-slate-900 text-xs md:text-sm px-2 rounded font-bold"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div
      className={
        popins.className +
        " min-h-screen bg-slate-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-32"
      }
    >
      <h1 className=" col-span-1 md:col-span-2 lg:col-span-3 text-slate-50 text-4xl font-bold px-4">
        {" "}
        Projects{" "}
      </h1>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <ProjectGrid key={index} />
        ))}
    </div>
  );
};

export default ProjectsSection;
