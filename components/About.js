import Image from "next/image";

const About = () => {
  return (
    <div className="w-full flex justify-center items-center px-20 pb-20 flex-col gap-10">
      {/* <h1 className="text-5xl font-gistesy">About us</h1> */}
      <div className="h-96 w-full grid grid-cols-2 gap-10">
        <div className="bg-pink-300 h-96 relative overflow-hidden flex items-center">
          <h1 class="text-4xl font-bold text-slate-800 -rotate-90">About us</h1>
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
      <div className="h-96 w-full grid grid-cols-3 gap-10">
        <div className="h-96 relative">
          <Image alt="founder" src="/images/girl.jpg" fill objectFit="cover" />
        </div>
        <div className="bg-blue-300 h-96 p-20 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-5">
            The Browery Way
          </h2>

          <p className="text-md font-normal text-slate-800 mb-3">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
        <div className="bg-purple-300 h-96 p-20 flex items-center justify-center">
          {/* <h2 className="text-5xl text-slate-900 font-gistesy text-center">
          Proudly established in 2020
        </h2> */}
        </div>
      </div>
      <div className="h-96 w-full grid grid-cols-2 gap-10">
        <div className="bg-teal-300 h-96 p-20 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-5">
            Why we do what we do
          </h2>
          <p className="text-md font-normal text-slate-800 mb-3">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
          <p className="text-md font-normal text-slate-800 mb-3">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
        <div className="bg-orange-300 h-96 flex justify-center items-center p-20">
          {/* <h2 className="text-4xl font-bold text-slate-800 text-center">
          Fueled by hard work & passion
        </h2> */}
        </div>
      </div>
    </div>
  );
};

export default About;
