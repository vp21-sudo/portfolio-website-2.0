const Exp = () => {
  return (
    <div className="dark:bg-stone-900 w-full flex justify-center items-center">
      <div
        id="about"
        className="flex flex-col justify-center items-center px-8 md:px-32 py-10 md:pt-20"
      >
        <h2 className="text-slate-950 dark:text-slate-50 text-2xl md:text-4xl w-full font-bold mb-4">
          Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative w-full dark:text-slate-50">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-[2px] dark:bg-blue-900 bg-blue-400"></div>

          {/* Software Engineer - TicketsQue */}
          <div className="relative flex items-start mb-10">
            {/* Bullet Point */}
            <div className="absolute left-[9px] w-4 h-4 dark:bg-blue-900 bg-blue-400 rounded-full"></div>

            <div className="w-full pl-10">
              <h3 className=" text-lg md:text-2xl font-semibold">
                Software Engineer - TicketsQue Solutions Pvt Ltd
              </h3>
              <p className="text-gray-800 dark:text-gray-400 text-sm md:text-lg">
                Oct 2023 - Present
              </p>
              <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                <li>
                  Managed <strong>EKS Kubernetes</strong> for microservices
                  deployment.
                </li>
                <li>
                  Optimized costs & performance with{" "}
                  <strong>auto-scaling</strong> in <strong>EKS clusters</strong>
                  .
                </li>
                <li>
                  Built scalable backend services with <strong>Node.js</strong>{" "}
                  & <strong>Express</strong>.
                </li>
                <li>
                  Developed front-end features for simplified data export.
                </li>
                <li>
                  Delivered regular features, bug fixes & performance upgrades.
                </li>
                <li>
                  Worked with product managers & designers on user-centric
                  solutions.
                </li>
              </ul>
            </div>
          </div>

          {/* Application Development Intern - Ezy Click */}
          <div className="relative flex items-start">
            {/* Bullet Point */}
            <div className="absolute left-[9px] w-4 h-4 dark:bg-blue-900 bg-blue-400 rounded-full"></div>

            <div className="w-full pl-10">
              <h3 className="text-lg md:text-2xl font-semibold">
                Application Development Intern - Ezy Click Pvt Ltd
              </h3>
              <p className="text-gray-800 dark:text-gray-400 text-sm md:text-lg">
                Feb 2023 - Oct 2023
              </p>
              <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                <li>
                  Built a <strong>Next.js</strong> promotional site for a
                  product launch.
                </li>
                <li>
                  Designed <strong>MySQL</strong> schemas for efficient data
                  management.
                </li>
                <li>
                  Deployed <strong>Node.js</strong> backend on AWS Elastic
                  Beanstalk & front-end on AWS Amplify.
                </li>
                <li>
                  Configured domains & DNS with <strong>AWS Route 53</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
