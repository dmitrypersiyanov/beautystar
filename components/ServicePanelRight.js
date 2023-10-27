import Link from "next/link";
import Image from "next/image";

const ServicePanelRight = ({ img, title, what, round, totalPrice }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 xl:gap-32">
      <div className="relative overflow-hidden rounded-lg w-full lg:min-w-[405px] h-72 sm:h-96">
        <Image src={img} alt={title} fill objectFit="cover" />
      </div>
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-xl font-bold text-slate-800">{title}</h1>
        <h3 className="text-md font-normal text-slate-400">
          Starting at ${round(totalPrice())}
        </h3>
        <p className="text-md font-normal text-slate-700">{what}</p>
        <Link href={`/services/${title}`}>
          <div className="rounded-full px-7 py-3 gradient bg-gradient-to-br from-blue-300 via-purple-300 to-purple-400 shadow-xl text-slate-800 mt-5">
            Learn more
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicePanelRight;
