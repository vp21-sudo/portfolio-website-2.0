import { Poppins } from "next/font/google";
import Image from "next/image";

// Define font
const popins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

// Define the project type
interface ProjectType {
  title: string;
  description: string;
  image?: string;
  github?: string;
  demo?: string;
  techs: string[];
}

// Project data
const projects: ProjectType[] = [
  {
    title: "LogViewer",
    description:
      "LogViewer is a modern, intuitive logging system built for seamless log management, empowering developers to debug and monitor with ease. The backend, powered by Bun Hono, provides robust APIs for fetching logs in chunks and streaming live logs in real-time using WebSockets. On the frontend, Next.js combined with shadcn UI delivers a sleek, responsive interface featuring an interactive log table and live log streaming in action. Whether you're handling persistent logs or monitoring live updates, LogViewer offers an efficient, user-friendly solution to keep your applications running smoothly.",
    image:
      "https://sthreepublicproject.s3.ap-south-1.amazonaws.com/logsviewer.png",
    github: "https://github.com/vp21-sudo/logs_viewer_frontend",
    demo: "",
    techs: ["Bun", "Hono", "NextJS", "WebSockets", "ShadcnUI"],
  },
  {
    title: "Realtime Dashboard",
    description:
      "Realtime Dashboard is an innovative project leveraging Next.js to deliver live data updates seamlessly. Powered by Server-Sent Events (SSE), it ensures real-time communication between the server and the client, making data monitoring instantaneous and efficient. The dashboard is designed for intuitive interaction, offering users an elegant interface to visualize live metrics and stay informed as events unfold. Built with performance and responsiveness in mind, this project showcases the power of modern web technologies to create dynamic, real-time experiences.",
    image:
      "https://sthreepublicproject.s3.ap-south-1.amazonaws.com/dashboard.png",
    github: "https://github.com/vp21-sudo/realtime-dashboard",
    demo: "https://dashboard.sudovp.com",
    techs: ["NextJS", "SSE", "ShadcnUI"],
  },
  {
    title: "Task Trek",
    description:
      "Task Trek is an offline Flutter to-do app designed for seamless task management without the need for an internet connection. It offers a clean, intuitive interface for users to organize and track their tasks efficiently. Users can create, edit, and delete tasks, categorize them, and set reminders, all within the app. Task Trek's offline functionality ensures that users can access and manage their tasks anytime, anywhere, without worrying about connectivity issues.",
    image:
      "https://sthreepublicproject.s3.ap-south-1.amazonaws.com/1717089801021_task-trek.png",
    github: "https://github.com/vp21-sudo/Task-Trek",
    demo: "",
    techs: ["Flutter", "Dart", "SQL-Lite"],
  },
  {
    title: "Go-Do",
    description:
      "Go-Do is a simple yet purposeful to-do app project designed to explore the power of GoLang while building backend APIs. Beyond just creating another to-do app, this project focuses on learning a new language, leveraging frameworks like Fiber, and comparing Go's concurrency and performance capabilities to JavaScript and TypeScript. It's a hands-on journey into backend development, strengthening skills in API design, server-side logic, and architectural best practices.",
    image: "",
    github: "https://github.com/vp21-sudo/go-do-backend",
    demo: "",
    techs: ["Golang", "Fiber", "REST"],
  },
];

const ProjectGrid: React.FC<{ project: ProjectType }> = ({ project }) => {
  const { title, description, image, github, demo, techs } = project;

  return (
    <div className="flex flex-col bg-slate-800 rounded-lg border-2 gap-2   border-slate-500 p-8 shadow-slate-200 shadow-sm hover:shadow-slate-100 hover:shadow-lg transition-shadow duration-300">
      {/* Title */}
      <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>

      {/* Image */}
      {image && (
        <div className="w-full h-40 mb-4 relative">
          <Image
            src={image}
            alt={`${title} image`}
            width={800}
            height={800}
            className="rounded-lg object-contain "
          />
        </div>
      )}

      {/* Description */}
      <p className="text-slate-200 z-10 text-md md:text-lg md:py-8 mb-4 line-clamp-6">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="bg-slate-700 text-xs md:text-sm text-white px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded font-bold"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded font-bold"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <div
      id="projects"
      className={`${popins.className} min-h-screen bg-slate-950 px-4 py-12 md:px-16 lg:px-32`}
    >
      <h1 className="text-white text-4xl font-bold mt-12 mb-12">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {projects.map((project, index) => (
          <ProjectGrid key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
