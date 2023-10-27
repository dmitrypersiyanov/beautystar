import Image from "next/legacy/image";

const About = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center px-10 lg:px-14 xl:px-20 pb-20 flex-col gap-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-pink-300 h-96 relative overflow-hidden flex items-center">
            <h1 class="text-4xl font-bold text-slate-800 -rotate-90">
              About us
            </h1>
          </div>
          <div className="h-96 overflow-hidden relative">
            <Image
              alt="our team"
              src="/images/us.webp"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="h-96 relative order-2 md:order-1">
            <Image
              alt="founder"
              src="/images/ombre2.webp"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
          <div className="bg-blue-300 order-1 md:order-2 flex h-96 p-14 sm:p-14 flex-col justify-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-5">
              The Browery Way
            </h2>
            <p className="text-md font-normal text-slate-800 mb-3">
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
          <div className="bg-purple-300 relative h-96 order-3 md:col-span-2 xl:col-span-1 flex items-center justify-center">
            <Image
              src="/images/scissors.webp"
              layout="fill"
              objectFit="cover"
              alt="scrissors"
              priority={true}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-teal-300 h-96 p-14 sm:p-14 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-5">
              Our mission
            </h2>
            <p className="text-md font-normal text-slate-800 mb-3">
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
          <div className="bg-orange-300 h-96 flex justify-center items-center p-10 sm:p-10 relative">
            <h2 className="text-5xl text-slate-800 mb-5 font-gistesy">
              To be continued...
            </h2>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default About;
