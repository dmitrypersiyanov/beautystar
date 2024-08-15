import Image from "next/legacy/image";

const Mission = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center gap-10 py-32 sm:py-40 px-10 sm:px-20 ">
      <Image
        alt="quote"
        width="40"
        height="40"
        src="/images/quote.png"
        priority={true}
      />
      <p className="text-xl text-slate-800 w-full lg:w-[750px] text-center font-light">
      Our mission is to enhance your beauty with personalized, expert care, 
            creating a welcoming environment where your unique style is 
            celebrated and every visit is a memorable experience.
      </p>
      <h3 className="text-xl text-slate-800 text-center w-full lg:w-[650px]">
        - Alexander Shefield & Freddy Costanolli, Co-founders
      </h3>
    </div>
  );
};

export default Mission;
