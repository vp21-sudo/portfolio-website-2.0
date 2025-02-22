import { Poppins } from "next/font/google";
import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

const popins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const LandingSection = () => {
  // Use `useScroll` to track the scroll progress
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const isVisible = progress > 0.05; // Calculate the visibility state
      setVisible(isVisible); // Update state
    });

    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <div
      id="home"
      className={`${popins.className} w-full h-screen flex flex-col justify-center items-center text-stone-50`}
      // style={{
      //   backgroundImage: "url('/bg1.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Backdrop blur with a parallax effect */}
      {!visible && (
        <motion.div className=" w-full fixed h-screen flex flex-col justify-center items-center py-12">
          <motion.div
            className="container flex flex-col justify-center items-center "
            initial={{ opacity: 0, y: 50 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation state
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h1 className="capitalize text-3xl md:text-6xl text-slate-950 dark:text-slate-50 font-semibold w-3/4 text-center">
              Transforming possibilities into digital realities.
            </h1>
            <h1 className="capitalize text-2xl md:text-4xl text-slate-950 dark:text-slate-50 font-semibold w-2/3 text-center pt-8">
              Vishwa Prasad L
            </h1>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LandingSection;
