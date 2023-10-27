import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 200 },
};

const ServiceItem = ({ title }) => {
  return (
    <Link href={`/services/${title}`}>
      <motion.div
        variants={item}
        className="flex bg-slate-800 w-full h-20 sm:h-40 lg:h-52 sm:w-40 lg:w-64  p-10 text-slate-100 items-center justify-center font-light text-lg rounded-lg"
      >
        {title}
      </motion.div>
    </Link>
  );
};

export default ServiceItem;
