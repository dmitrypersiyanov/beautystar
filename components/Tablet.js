import { services } from "@/data/services";
import { motion } from "framer-motion";
import Link from "next/link";

const round = (num) => Math.ceil(num);

const tab = {
  visible: { opacity: 1, transition: { duration: 0.7 }, x: 0 },
  hidden: { opacity: 0.5, x: -1000 },
};

const prices = {
  visible: { opacity: 1, transition: { duration: 0.8 }, x: 0, delay: 0.3 },
  hidden: { opacity: 0, x: -1000 },
};

const Tablet = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={tab}
      className="pt-10 sm:pt-20 pb-10 sm:py-10 px-10 sm:px-14 h-full sm:h-[650px] w-full sm:w-[500px] sm:border-[8px] sm:shadow-2xl bg-white sm:border-slate-900 sm:rounded-3xl lg:absolute lg:-top-24 lg:right-5 xl:right-10 overflow-hidden flex flex-col justify-center"
    >
      <h2 className="text-center text-4xl text-slate-700 font-gistesy mb-10">
        Today's Offers
      </h2>
      <div className="flex flex-col gap-2 mb-5 w-full">
        {services
          .filter((item) => item.id < 6)
          .map((service) => {
            return (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={prices}
                key={service.id}
                className="flex flex-row w-full h-14 gap-2 group"
              >
                <div className="w-1/2 bg-slate-800 flex justify-center items-center text-slate-100 text-md font-light rounded-md">
                  {service.title}
                </div>
                <div className="w-1/2 bg-slate-800 flex justify-center items-center text-md font-light gap-2 rounded-md">
                  <span className="line-through text-slate-500">
                    ${service.price}
                  </span>
                  <span className="text-slate-100">
                    ${round(service.totalPrice())}
                  </span>
                </div>
              </motion.div>
            );
          })}
      </div>
      <Link
        href="/prices"
        className="mt-5 w-full mx-auto border-2 border-slate-100 px-7 py-3 bg-slate-100 text-slate-700 text-center rounded-md"
      >
        Show all prices
      </Link>
    </motion.div>
  );
};

export default Tablet;
