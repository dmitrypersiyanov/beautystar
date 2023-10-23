import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <div className="flex justify-end bg-gradient-to-r from-blue-200 via-purple-200 to-purple-300 h-64 w-full">
        <h1 className="">DIVA</h1>
      </div> */}
      <div className="w-full flex justify-center items-center px-10 lg:px-14 xl:px-20 pb-20 flex-col gap-10">
        {/* <h1 className="text-5xl font-gistesy">About us</h1> */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-pink-300 h-96 relative overflow-hidden flex items-center">
            <h1 class="text-4xl font-bold text-slate-800 -rotate-90">
              About us
            </h1>
          </div>
          <div className="h-96 overflow-hidden relative">
            <Image
              alt="our team"
              src="/images/creativeteam.jpg"
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="h-96 relative order-2 lg:order-1">
            <Image
              alt="founder"
              src="/images/girl.jpg"
              fill
              objectFit="cover"
            />
          </div>
          <div className="bg-blue-300 order-1 lg:order-2 h-96 p-14 sm:p-14 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-5">
              The Browery Way
            </h2>
            <p className="text-md font-normal text-slate-800 mb-3">
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
          <div className="bg-purple-300 h-96 order-3 hidden xl:flex items-center justify-center">
            {/* <h2 className="text-5xl text-slate-900 font-gistesy text-center">
              Proudly established in 2020
            </h2> */}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-teal-300 h-96 p-14 sm:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-5">
              Our mission
            </h2>
            <p className="text-md font-normal text-slate-800 mb-3">
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
          <div className="bg-orange-300 h-96 hidden lg:flex justify-center items-center p-20">
            {/* <h2 className="text-4xl font-bold text-slate-800 text-center">
              Fueled by hard work & passion
            </h2> */}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default About;
