import { Poppins } from "next/font/google";

const popins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const LandingSection = () => {
  return (
    <div
      className={`${popins.className} w-full h-screen flex flex-col justify-center items-center text-stone-50 `}
      style={{
        backgroundImage: "url('/bg1.jpg')",
      }}
    >
      <div className="w-full h-screen backdrop-blur-sm  flex flex-col justify-center items-center py-12 shadow-white shadow-lg relative bg-cover bg-center">
        <div className=" container flex flex-col justify-center items-center">
          <h1 className=" capitalize text-6xl font-semibold w-3/4 text-center ">
            Transforming possibilities into digital realities.
          </h1>
          <h1 className=" capitalize text-4xl font-semibold w-2/3 text-center pt-8">
            - Vishwa Prasad L
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
