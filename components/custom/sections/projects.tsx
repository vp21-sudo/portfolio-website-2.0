import { DownloadIcon, Github, Radio } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Define font
const popins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

// Define the project type
interface ProjectType {
  title: string;
  description: string;
  image?: string;
  github?: string;
  demo?: string;
  apk?: string;
  techs: string[];
}
// Project data
const projects: ProjectType[] = [
  {
    title: "Try This: AI-powered activities tailored to your interests.",
    description:
      "Try This is an AI-powered app that suggests activities based on your interests, from creative hobbies to fitness challenges. It curates personalized recommendations to help you break routines and explore new experiences. With a user-friendly interface. Future updates will include enhanced personalization, location-based suggestions, and social features.",
    image:
      "https://sthreepublicproject.s3.ap-south-1.amazonaws.com/try_this_app.png",
    github: "https://github.com/vp21-sudo/try_this",
    demo: "",
    apk: "https://sthreepublicproject.s3.ap-south-1.amazonaws.com/apk/try-this-release-v1.0.2.apk",
    techs: ["Flutter", "Dart", "Gemini Flash 2.0", "GetX"],
  },
  {
    title: "𝗔𝗪𝗦 𝗟𝗮𝗺𝗯𝗱𝗮 𝗜𝗺𝗮𝗴𝗲 𝗖𝗼𝗺𝗽𝗿𝗲𝘀𝘀𝗼𝗿",
    description:
      "AWS Lambda Image Compressor is a serverless function designed to efficiently reduce image file sizes while maintaining quality. Built using Node.js, it utilizes Sharp for image processing. Event-driven execution and low-cost scalability, this solution enhances performance for applications that rely on image-heavy content.",
    image:
      "https://sthreepublicproject.s3.ap-south-1.amazonaws.com/image-compressor.png",
    github: "",
    demo: "/image",
    techs: ["AWS Lambda", "Node.js", "Sharp", "Serverless", "Next JS"],
  },
  {
    title: "𝗞𝘂𝗯𝗲𝗿𝗻𝗲𝘁𝗲𝘀 𝗠𝗲𝘁𝗿𝗶𝗰𝘀 𝗗𝗮𝘀𝗵𝗯𝗼𝗮𝗿𝗱",
    description:
      "This Kubernetes Metrics Dashboard combines a real-time visualization of CPU and memory usage for nodes and pods with a clean, table-based UI. Built using Next.js, it integrates the Kubernetes Metrics Server and leverages the App Router for seamless backend and frontend communication. In addition to detailed metrics, the dashboard also features ShadCN UI charts for enhanced visual representation, providing an intuitive and user-friendly way to monitor cluster performance at a glance.",
    image:
      "https://sthreepublicproject.s3.ap-south-1.amazonaws.com/k8s-metrics-viewer-updated.png",
    github: "https://github.com/vp21-sudo/k8s-metrics-dashboard",
    demo: "",
    techs: ["Kubernetes", "DevOps", "Data visualization", "NextJS", "ShadcnUI"],
  },
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
    apk: "https://sthreepublicproject.s3.ap-south-1.amazonaws.com/apk/to-do-app-.0.2.1.apk",
    techs: ["Flutter", "Dart", "SQL-Lite"],
  },
  // {
  //   title: "Go-Do",
  //   description:
  //     "Go-Do is a simple yet purposeful to-do app project designed to explore the power of GoLang while building backend APIs. Beyond just creating another to-do app, this project focuses on learning a new language, leveraging frameworks like Fiber, and comparing Go's concurrency and performance capabilities to JavaScript and TypeScript. It's a hands-on journey into backend development, strengthening skills in API design, server-side logic, and architectural best practices.",
  //   image: "",
  //   github: "https://github.com/vp21-sudo/go-do-backend",
  //   demo: "",
  //   techs: ["Golang", "Fiber", "REST"],
  // },
];

const ProjectGrid: React.FC<{
  project: ProjectType;
  onImageClick: (
    title: string,
    description: string,
    techs: string[],
    index: number,
    image?: string,
    github?: string,
    demo?: string,
    apk?: string,
  ) => void;
  index: number;
}> = ({ project, onImageClick, index }) => {
  const { title, description, image, github, demo, apk, techs } = project;

  return (
    <motion.div
      className="flex flex-col bg-slate-100 dark:bg-slate-800 rounded-sm gap-2 shadow-slate-950 dark:shadow-slate-50 shadow-sm  transition-shadow duration-300 cursor-pointer"
      initial={{ translateY: 230, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: (index / 2) * 0.15,
      }}
      viewport={{ once: true }}
      onClick={() =>
        onImageClick(title, description, techs, index, image, github, demo, apk)
      }
    >
      {/* Image */}
      {image && (
        <motion.div
          className={"w-full h-40 mb-4 relative " + image && " cursor-pointer"}
          layoutId={`project-image-${index}`}
        >
          <Image
            src={image}
            alt={`${title} image`}
            width={1200}
            height={800}
            className=" h-62 w-full rounded-sm object-cover "
          />
        </motion.div>
      )}
      <div className=" p-4">
        {/* Title */}
        <motion.h2
          className="text-slate-950 dark:text-slate-50 text-2xl font-bold mb-2"
          layoutId={`title-${index}`}
        >
          {title}
        </motion.h2>
        {/* Description */}
        <motion.p
          className="text-slate-500 dark:text-slate-200 z-10 text-md md:text-lg mb-2 line-clamp-4"
          layoutId={`description-${index}`}
        >
          {description}
        </motion.p>

        {/* Technologies */}
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          layoutId={`techs-${index}`}
        >
          {techs.map((tech, index) => (
            <span
              key={index}
              className=" bg-slate-200 dark:bg-slate-700 text-xs md:text-sm text-slate-700 dark:text-slate-50 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex gap-3 mt-auto z-20"
          layoutId={`btns-${index}`}
        >
          {github && (
            <a
              onClick={(e) => e.stopPropagation()}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-600 transition-all ease-in-out duration-200 text-white text-xs md:text-sm px-3 py-2 rounded font-bold flex justify-center items-center gap-3"
            >
              <Github />
              GitHub
            </a>
          )}
          {demo && (
            <Link
              onClick={(e) => e.stopPropagation()}
              href={demo}
              className="bg-green-600 hover:bg-green-500 transition-all ease-in-out duration-200 text-white text-xs md:text-sm px-3 py-2 rounded font-bold flex justify-center items-center gap-3"
            >
              <Radio />
              Live Demo
            </Link>
          )}
          {apk && (
            <a
              onClick={(e) => e.stopPropagation()}
              href={apk}
              className="bg-teal-600 hover:bg-teal-500 transition-all ease-in-out duration-200 text-white text-xs md:text-sm px-3 py-2 rounded font-bold flex justify-center items-center gap-3"
            >
              <DownloadIcon />
              APK
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | undefined>(undefined);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [modalDescription, setModalDescription] = useState<string | null>(null);
  const [modalTechs, setModalTechs] = useState<string[] | []>([]);
  const [modalGithub, setModalGithub] = useState<string | undefined>(undefined);
  const [modalDemo, setModalDemo] = useState<string | undefined>(undefined);
  const [modalApk, setModalApk] = useState<string | undefined>(undefined);

  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const handleImageClick = (
    title: string,
    description: string,
    techs: string[],
    index: number,
    image?: string,
    github?: string,
    demo?: string,
    apk?: string,
  ) => {
    setModalImage(image);
    setModalTitle(title);
    setModalDescription(description);
    setModalTechs(techs);
    setModalGithub(github);
    setModalDemo(demo);
    setModalApk(apk);
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalDescription(null);
      setModalImage(undefined);
      setModalTitle(null);
      setModalTechs([]);
      setModalIndex(null);
    }, 200);
  };
  return (
    <motion.div
      id="projects"
      className={`${popins.className} min-h-screen bg-blue-100  dark:bg-slate-950 px-4 py-12 md:px-16 lg:px-32`}
    >
      <h1 className="dark:text-slate-50 text-slate-950 text-4xl font-bold mt-12 mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {projects.map((project, index) => (
          <ProjectGrid
            key={index}
            project={project}
            onImageClick={handleImageClick}
            index={index}
          />
        ))}
      </div>
      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-transparent backdrop-blur-lg flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <div
              className="relative w-10/12 md:w-4/5 lg:w-4/5 xl:w-3/4 md:px-24 lg:px-36  rounded-lg p-6"
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-0 lg:top-4 right-4 text-gray-700 z-50 dark:text-gray-300 text-xl font-bold"
              >
                &times;
              </button>
              <motion.h2
                className="text-center text-md lg:text-2xl font-bold text-slate-800 dark:text-slate-50 mb-2 lg:mb-2"
                layoutId={`title-${modalIndex}`}
              >
                {modalTitle}
              </motion.h2>
              {modalImage && (
                <motion.div className="w-full h-[20vh] md:h-[60vh] relative">
                  <motion.img
                    src={modalImage}
                    alt={modalTitle || "Modal Image"}
                    className=" w-full h-full object-contain rounded-lg"
                    layoutId={`project-image-${modalIndex}`}
                  />
                </motion.div>
              )}
              <motion.p
                className=" bg-slate-50 rounded-lg p-2 md:px-3 dark:bg-slate-950 bg-opacity-60 text-left text-sm lg:text-lg  w-full text-slate-800 dark:text-slate-50 mt-2 lg:mt-6"
                layoutId={`description-${modalIndex}`}
              >
                {modalDescription}
              </motion.p>
              {/* Technologies */}
              <motion.div
                className=" mt-2  flex flex-wrap gap-2 mb-4"
                layoutId={`techs-${modalIndex}`}
              >
                {modalTechs.map((tech, index) => (
                  <span
                    key={index}
                    className=" bg-slate-200 dark:bg-slate-700 text-xs md:text-sm text-slate-700 dark:text-slate-50 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-3 mt-auto z-20 "
                layoutId={`btns-${modalIndex}`}
              >
                {modalGithub && (
                  <a
                    href={modalGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-600 transition-all ease-in-out duration-200 text-white text-xs md:text-sm px-3 py-2 rounded font-bold flex justify-center items-center gap-3"
                  >
                    <Github />
                    GitHub
                  </a>
                )}
                {modalDemo && (
                  <Link
                    href={modalDemo}
                    className="bg-green-600 hover:bg-green-500 transition-all ease-in-out duration-200 text-white text-xs md:text-sm px-3 py-2 rounded font-bold flex justify-center items-center gap-3"
                  >
                    <Radio />
                    Live Demo
                  </Link>
                )}
                {modalApk && (
                  <a
                    href={modalApk}
                    className="bg-teal-600 hover:bg-teal-500 transition-all ease-in-out duration-200 text-white text-xs md:text-sm px-3 py-2 rounded font-bold flex justify-center items-center gap-3"
                  >
                    <DownloadIcon />
                    APK
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsSection;
