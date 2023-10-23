import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { stylists } from "@/data/stylists";
import Stylist from "./Stylist";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: 150 },
};

const Stylists = () => {
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
      {/* <div id="stylists" className="h-[700px] w-full overflow-hidden relative">
        <Image
          alt="creative team"
          src="/images/meditation.jpg"
          fill
          // objectFit="cover"
        />
        <div className="absolute top-40 right-40 left-40 bottom-40 bg-slate-900/60">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-purple-400">
              Meet our
            </h2>
            <h3 className="text-[70px] font-gistesy font-light text-white">
              beauty gamechangers
            </h3>
          </div>
        </div>
      </div> */}
      <div id="stylists">
        {/* <div className="w-full flex flex-col items-center justify-center pt-28 pb-24">
          <h2 className="text-3xl text-slate-800">Meet our team</h2>
          <h3 className="text-[70px] font-gistesy font-light text-slate-800">
            beauty ambassadors
          </h3>
        </div> */}
        <div className="flex flex-col items-center mb-40 px-10 text-center">
          <h2 className="text-3xl text-slate-800">
            Fueled up by our passionate team
          </h2>
          {/* <p className="text-lg text-slate-800">
          Good vibes tonight vibes tonight vibes tonight
        </p> */}
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
          return <Stylist key={item.id} {...item} />;
        })}
      </motion.div>
    </>
  );
};
export default Stylists;
