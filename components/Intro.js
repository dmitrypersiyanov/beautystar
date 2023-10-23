import Link from "next/link";
import Tab from "./Tab";

const Intro = () => {
  return (
    <>
      <div className="flex justify-end bg-gradient-to-r from-blue-200 via-purple-200 to-purple-300 h-32 sm:h-48 xl:h-64 w-full">
        {/* <h1 className="">DIVA</h1> */}
      </div>
      <div className="flex flex-col lg:flex-row h-auto lg:h-[650px] w-full">
        <div className="w-full lg:w-[55%] xl:w-[50%] h-full bg-white relative py-0 sm:py-20 lg:p-0 flex justify-center">
          <Tab />
        </div>
        <div className="w-full lg:w-[45%] xl:w-[50%] h-full bg-white p-10 sm:p-20 lg:p-10 xl:p-20">
          <h2 className="text-slate-700 text-3xl">
            Welcome to the <span className="font-bold">Browery Studio</span>
          </h2>
          <hr className="my-10" />
          <p className="text-slate-700 text-lg font-light mb-5">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum.
          </p>
          <p className="text-slate-700 text-lg font-light mb-5">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem.
          </p>
          <p className="text-slate-700 text-lg font-light mb-10">
            Lorem ipsum lorem ipsum lorem!
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
