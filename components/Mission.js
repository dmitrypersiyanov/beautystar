import Image from "next/image";

const Mission = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center gap-10 py-32 sm:py-40 px-10 sm:px-20 ">
      <Image alt="quote" width="40" height="40" src="/images/quote.png" />
      <p className="text-xl text-slate-800 w-full lg:w-[750px] text-center font-light">
        Our mission is to provide high-end and quality services with consistency
        in appoach and creativity, while keeping up to date with techniques to
        stay current and on trend.
      </p>
      <h3 className="text-xl text-slate-800 text-center w-full lg:w-[650px]">
        - Alexander McQueen & Freddy Mercury, Co-founders
      </h3>
    </div>
  );
};

export default Mission;
