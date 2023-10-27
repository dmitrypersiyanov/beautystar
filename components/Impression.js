import Image from "next/legacy/image";

const Impression = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-24 sm:mt-20">
        <h2 className="text-3xl text-slate-800">Delivering you</h2>
      </div>

      <div className="w-full mt-40 lg:mt-0 lg:p-40 pb-40 lg:pb-60 flex flex-col sm:flex-row items-center justify-center">
        <div className="flex w-full sm:w-1/2">
          <div className="relative w-full h-[400px]">
            <div className="relative w-full h-full overflow-hidden z-10">
              <Image
                src="/images/creative.jpg"
                layout="fill"
                objectFit="cover"
                alt="girl"
                priority={true}
              />
            </div>
            <div className="hidden lg:flex absolute -bottom-20 -right-20 w-72 h-60 xl:w-96 xl:h-64 bg-blue-100 z-20 items-center justify-center font-gistesy text-[75px]">
              <p className="mt-8">01.</p>
            </div>
          </div>
        </div>
        <div className="flex w-full h-64 sm:w-1/2">
          <div className="w-full h-full bg-slate-800 px-10 lg:px-14 flex justify-end items-center">
            <h1 className="text-4xl text-slate-100 font-semibold text-right">
              Utmost creativity
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-slate-800">Plus</h2>
      </div>

      <div className="w-full mt-40 lg:mt-0 lg:p-40 pb-40 lg:pb-60 flex flex-col sm:flex-row items-center justify-center">
        <div className="flex w-full sm:w-1/2 h-64">
          <div className="w-full h-full bg-slate-800 px-10 lg:px-14 flex justify-start items-center">
            <h1 className="text-4xl text-slate-100 font-semibold text-left">
              On-demand solutions
            </h1>
          </div>
        </div>
        <div className="flex w-full sm:w-1/2">
          <div className="relative w-full h-[400px]">
            <div className="relative w-full h-full overflow-hidden z-10">
              <Image
                src="/images/skin.jpg"
                layout="fill"
                objectFit="cover"
                alt="girl"
                priority={true}
              />
            </div>
            <div className="hidden lg:flex absolute -bottom-20 -left-20 w-72 h-60 xl:w-96 xl:h-64 bg-blue-100 z-20 items-center justify-center font-gistesy text-[75px]">
              <p className="mt-8">02.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-slate-800">Times</h2>
      </div>

      <div className="w-full mt-40 lg:mt-0 lg:p-40 pb-40 lg:pb-60 flex flex-col sm:flex-row items-center justify-center">
        <div className="flex w-full sm:w-1/2">
          <div className="relative w-full h-[400px]">
            <div className="relative w-full h-full overflow-hidden z-10">
              <Image
                src="/images/vibes.jpg"
                layout="fill"
                objectFit="cover"
                alt="girl"
                priority={true}
              />
            </div>
            <div className="hidden lg:flex absolute -bottom-20 -right-20 w-72 h-60 xl:w-96 xl:h-64 bg-blue-100 z-20 items-center justify-center font-gistesy text-[75px]">
              <p className="mt-8">03.</p>
            </div>
          </div>
        </div>
        <div className="flex w-full sm:w-1/2 h-64">
          <div className="w-full h-full bg-slate-800 px-10 lg:px-14 flex justify-end items-center">
            <h1 className="text-4xl text-slate-100 font-semibold text-right">
              Outstanding vibes
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impression;
