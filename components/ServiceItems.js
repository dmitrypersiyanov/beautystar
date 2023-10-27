import ServiceItem from "./ServiceItem";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceItems = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // else {
    //   control.start("hidden");
    // }
  }, [control, inView]);
  return (
    <div
      id="services"
      className="w-full py-32 flex flex-col justify-center items-center bg-blue-50"
    >
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-32 text-slate-800 px-10">
        Discover our most trending services
      </h2>
      <div className="w-full flex flex-col gap-4 justify-center items-center mb-16 overflow-hidden">
        <motion.div
          ref={ref}
          variants={list}
          initial="hidden"
          animate={control}
          className="w-full sm:w-auto px-10 sm:px-0 lg:px-20 text-center grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          <div className="flex flex-col gap-5">
            <ServiceItem title="Coloring" />
            <ServiceItem title="Braiding" />
          </div>
          <div className="flex flex-col gap-5">
            <ServiceItem title="Extensions" />
            <ServiceItem title="Ombré" />
            <ServiceItem title="Blondes" />
          </div>
          <div className="flex flex-col gap-5">
            <ServiceItem title="Balayage" />
            <ServiceItem title="Children Haircuts" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceItems;
