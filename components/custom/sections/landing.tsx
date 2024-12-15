import { Poppins } from "next/font/google";
import { motion, useScroll, useTransform } from "motion/react";

const popins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const LandingSection = () => {
  // Use `useScroll` to track the scroll progress
  const { scrollY, scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollY, (value) => value);
  const opacityTransform = useTransform(scrollYProgress, [0.01, 0.05], [1, 0]); // Fades out near the end

  return (
    <div
      id="home"
      className={`${popins.className} w-full h-screen flex flex-col justify-center items-center text-stone-50`}
      style={{
        backgroundImage: "url('/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Backdrop blur with a parallax effect */}
      <motion.div className=" w-full h-screen backdrop-blur-sm flex flex-col justify-center items-center py-12 relative">
        <motion.div
          className="container flex flex-col justify-center items-center"
          style={{
            y: yTransform, // Apply scroll-based transform
            opacity: opacityTransform,
          }}
          initial={{ opacity: 0, y: 50 }} // Initial animation state (off-screen and transparent)
          animate={{ opacity: 1, y: 0 }} // Target animation state
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <h1 className="capitalize text-3xl md:text-6xl font-semibold w-3/4 text-center">
            Transforming possibilities into digital realities.
          </h1>
          <h1 className="capitalize text-2xl md:text-4xl font-semibold w-2/3 text-center pt-8">
            Vishwa Prasad L
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingSection;
