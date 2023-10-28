import Image from "next/legacy/image";

const Photocard = ({ img, title }) => {
  return (
    <div className="w-full rounded-lg px-6 sm:px-10 lg:px-14 pt-6 sm:pt-10 lg:pt-14 pb-14 sm:pb-20 lg:pb-24 border-2 border-slate-100">
      <figure className="relative overflow-hidden w-full h-72 sm:h-96 rounded-md">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          // priority={true}
          placeholder="blur"
          blurDataURL
        />
      </figure>
    </div>
  );
};

export default Photocard;
