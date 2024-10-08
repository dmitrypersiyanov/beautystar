import Link from "next/link";
import Tablet from "./Tablet";

const Intro = () => {
  return (
    <>
      <div className="flex justify-end bg-gradient-to-r from-blue-200 via-purple-200 to-purple-300 h-32 sm:h-48 xl:h-64 w-full"></div>
      <div className="flex flex-col lg:flex-row h-auto lg:h-[650px] w-full">
        <div className="w-full lg:w-[55%] xl:w-[50%] h-full bg-white relative py-0 sm:py-20 lg:p-0 flex justify-center">
          <Tablet />
        </div>
        <div className="w-full lg:w-[45%] xl:w-[50%] h-full bg-white p-10 sm:p-20 lg:p-10 xl:p-20">
          <h2 className="text-slate-700 text-3xl">
            Welcome to <span className="font-bold">Browery Studio</span>
          </h2>
          <hr className="my-10" />
          <p className="text-slate-700 text-lg font-light mb-5">
          A place where your style transformation begins. Elevate your look with our 
          expert services designed to enhance your natural beauty and boost your 
          confidence. Embrace the journey of self-expression and discover a new 
          level of sophistication.
          </p>
          <p className="text-slate-700 text-lg font-light mb-10">
          From personalized consultations to 
          exceptional care, we&apos;re here to ensure you leave feeling radiant 
          and revitalized. Experience the ultimate in style and elegance 
          with us.
          </p>
          <Link
            href="/services"
            className="rounded-full px-6 py-4 bg-slate-800 text-white font-light block w-40 text-center"
          >
            View services
          </Link>
        </div>
      </div>
    </>
  );
};

export default Intro;
