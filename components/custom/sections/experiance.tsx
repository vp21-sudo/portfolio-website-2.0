const Exp = () => {
  return (
    <div
      id="about"
      className=" flex flex-col justify-center items-center px-8 md:px-32 pt-10 md:pt-20"
    >
      <h2 className=" text-slate-950  dark:text-slate-50 text-2xl w-full font-bold mb-4">
        Work Experience
      </h2>

      {/* Software Engineer - TicketsQue */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-start py-6 text-slate-950  dark:text-slate-50 rounded-lg">
        <div className="text-md md:text-lg">
          <h3 className="text-lg md:text-2xl font-semibold">
            Software Engineer - TicketsQue Solutions Pvt Ltd
          </h3>
          <p className=" text-gray-800 dark:text-gray-400 text-sm md:text-lg">
            Oct 2023 - Present
          </p>
          <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            <li>
              Worked on <strong>EKS Kubernetes</strong> to maintain and deploy a{" "}
              <strong>microservices architecture</strong>, ensuring high
              availability and reliability.
            </li>
            <li>
              Improved system efficiency by implementing{" "}
              <strong>auto-scaling</strong> for pods and nodes in{" "}
              <strong>EKS clusters</strong>, reducing costs and optimizing
              performance.
            </li>
            <li>
              Designed and maintained scalable backend services using{" "}
              <strong>Node.js</strong> and <strong>Express</strong>.
            </li>
            <li>
              Collaborated with a team to build front-end features, simplifying
              data export for users.
            </li>
            <li>
              Delivered new features, bug fixes, and performance improvements on
              a regular basis.
            </li>
            <li>
              Worked with product managers and designers to deliver user-centric
              solutions.
            </li>
          </ul>
        </div>
      </div>

      {/* Application Development Intern - Ezy Click */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-start py-6 text-slate-950  dark:text-slate-50 rounded-lg">
        <div className="text-md md:text-lg">
          <h3 className="text-lg md:text-2xl font-semibold">
            Application Development Intern - Ezy Click Pvt Ltd
          </h3>
          <p className="text-gray-800 dark:text-gray-400 text-sm md:text-lg">
            Feb 2023 - Oct 2023
          </p>
          <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            <li>
              Built a pre-release promotional website using{" "}
              <strong>Next.js</strong> for an upcoming product launch.
            </li>
            <li>
              Designed and implemented <strong>MySQL</strong> database schemas
              for efficient data management.
            </li>
            <li>
              Deployed a <strong>Node.js</strong> backend on AWS Elastic
              Beanstalk and hosted the front-end with AWS Amplify.
            </li>
            <li>
              Configured custom domains and DNS settings using{" "}
              <strong>AWS Route 53</strong> for smooth deployment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exp;
