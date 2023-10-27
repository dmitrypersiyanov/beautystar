import Link from "next/link";
import { Menu } from "@/public/icons/icons";
import { useState } from "react";
import Modal from "./Modal";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <Modal showModal={showModal} handleModal={handleModal} />}
      <nav className="w-full h-28 sm:h-32 lg:h-48 bg-white flex flex-row justify-between items-center px-10 lg:px-14 xl:px-20">
        <div className="text-5xl lg:text-6xl font-bold tracking-tighter text-slate-800 -mt-4">
          <Link href="/">Browery</Link>
        </div>
        <div
          onClick={handleModal}
          className="lg:hidden flex justify-center items-center w-8 h-8"
        >
          <Menu />
        </div>
        <div className="hidden lg:flex flex-row gap-5 items-center font-light">
          <div>
            <Link
              className="text-slate-600 hover:text-slate-900 text-lg"
              href="/services"
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              className="text-slate-600 hover:text-slate-900 text-lg"
              href="/gallery"
            >
              Gallery
            </Link>
          </div>
          <div>
            <Link
              className="text-slate-600 hover:text-slate-900 text-lg"
              href="/prices"
            >
              Prices
            </Link>
          </div>
          <div>
            <Link
              className="text-slate-600 hover:text-slate-900 text-lg"
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="rounded-full px-6 py-3 bg-slate-800 text-white ml-5">
            <a href="">Book now</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
