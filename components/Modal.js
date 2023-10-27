import { Close } from "@/public/icons/icons";
import Link from "next/link";
import { motion } from "framer-motion";

const options = {
  visible: { opacity: 1, transition: { duration: 0.2 } },
  hidden: { opacity: 0 },
};

const Modal = ({ handleModal, showModal }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={options}
      className={`${
        showModal ? "fixed lg:hidden" : "hidden"
      } lg:hidden top-0 left-0 bottom-0 right-0 bg-slate-100 z-30 flex justify-center items-center`}
    >
      <div
        onClick={handleModal}
        className="absolute w-14 h-14 p-3 top-5 right-5 sm:top-10 sm:right-10 flex items-center justify-center rounded-full bg-gradient-to-r hover:bg-gradient-to-l from-blue-300 via-purple-300  to-purple-400 rotate-45 hover:rotate-[225deg] transition-rotate duration-300"
      >
        <Close />
      </div>
      <div className="flex flex-col justify-center text-center gap-3 text-slate-100 text-md font-light bg-slate-800  w-full h-full">
        <Link className="hover:scale-110" onClick={handleModal} href="/">
          Home
        </Link>
        <Link className="hover:scale-110" onClick={handleModal} href="/about">
          About us
        </Link>
        <Link className="hover:scale-110" onClick={handleModal} href="/contact">
          Contact us
        </Link>
        <Link
          className="hover:scale-110"
          onClick={handleModal}
          href="/services"
        >
          Our services
        </Link>
        <Link className="hover:scale-110" onClick={handleModal} href="/gallery">
          Our gallery
        </Link>
        <Link className="hover:scale-110" onClick={handleModal} href="/prices">
          Prices
        </Link>
      </div>
    </motion.div>
  );
};

export default Modal;
