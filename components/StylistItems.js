import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { stylists } from "@/data/stylists";
import StylistItem from "./StylistItem";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: 150 },
};

const StylistItems = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // else {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);
  return (
    <>
      <div id="stylists">
        <div className="flex flex-col items-center mb-40 px-10 text-center">
          <h2 className="text-3xl text-slate-800">
            Fueled up by our passionate team
          </h2>
        </div>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
        className="w-full h-full flex flex-col md:flex-row justify-evenly flex-wrap"
      >
        {stylists.map((item) => {
          return <StylistItem key={item.id} {...item} />;
        })}
      </motion.div>
    </>
  );
};
export default StylistItems;
