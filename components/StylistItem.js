import Link from "next/link";
import Image from "next/legacy/image";

const StylistItem = ({ name, img, mainSpecialization }) => {
  return (
    <>
      <div className="w-full md:w-[50%] h-[700px] relative overflow-hidden">
        <Image alt={name} src={img} layout="fill" objectFit="cover" />
        <div className="absolute top-0 right-0 left-0 bottom-0 transition-background duration-300 hover:bg-slate-900/70">
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-50 group">
            <span className="text-5xl font-gistesy mb-2 -translate-y-96 transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              {mainSpecialization}
            </span>
            <h2 className="text-5xl text-center px-5 font-bold uppercase mb-12 -translate-y-96 transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              {name}
            </h2>

            <Link href={`/stylists/${name}`}>
              <div className="bg-blue-200 py-3 px-6 text-md rounded-full text-slate-800 translate-y-96 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-700 transition-all">
                Show profile
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StylistItem;
