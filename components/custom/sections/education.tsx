const Edu = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 md:px-32 py-5 md:py-10">
      <h2 className="text-slate-50 text-2xl w-full font-bold mb-4">
        Education
      </h2>
      {/* Master of Computer Applications */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-start py-6 text-slate-950 dark:text-slate-50 rounded-lg">
        <div className="text-md md:text-lg">
          <h3 className="text-lg md:text-2xl font-semibold">
            Master of Computer Applications
          </h3>
          <p className=" text-gray-800 dark:text-gray-400 text-sm md:text-lg">
            PES University, Bengaluru
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            2021 - 2023
          </p>
        </div>
      </div>

      {/* Bachelor of Computer Applications */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-start py-6 text-slate-950 dark:text-slate-50 rounded-lg">
        <div className="text-md md:text-lg">
          <h3 className="text-lg md:text-2xl font-semibold">
            Bachelor of Computer Applications
          </h3>
          <p className=" text-gray-800 dark:text-gray-400 text-sm md:text-lg">
            Amrita School of Arts and Sciences, Mysuru
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            2018 - 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default Edu;
