import { services } from "@/data/services";
import Service from "./Service";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
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
      <h2 className="text-center text-3xl mb-32 text-slate-800 px-10">
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
            <Service title="Brow Tinting" />
            <Service title="Brow Lamination" />
          </div>
          <div className="flex flex-col gap-5">
            <Service title="Microblading" />
            <Service title="Waxing" />
            <Service title="Wow Brow" />
          </div>
          <div className="flex flex-col gap-5">
            <Service title="Henna Brows" />
            <Service title="Lashes" />
          </div>
          {/* {services
            .filter((item) => item.id < 7)
            .map((service) => {
              return <Service key={service.id} {...service} />;
            })} */}
        </motion.div>
      </div>
      {/* <Link href="/services">
        <div className="w-64 text-center py-4 bg-slate-200 text-slate-800 rounded-lg">
          View all services
        </div>
      </Link> */}
    </div>
  );
};

export default Services;
