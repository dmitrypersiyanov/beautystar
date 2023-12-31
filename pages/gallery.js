import Photocard from "@/components/Photocard";
import { gallery } from "@/data/gallery";

const Gallery = () => {
  return (
    <>
      <div className="h-32 sm:h-48 xl:h-64 w-full bg-gradient-to-r from-blue-200 via-purple-200 to-purple-300 flex justify-end items-center pr-10 sm:pr-20 lg:pr-40"></div>
      <div className="w-full h-auto py-20 px-6 sm:px-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-20">
          Get inspired by our most recent work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 w-full xl:w-[1100px]">
          {gallery.map((photo) => {
            return <Photocard {...photo} key={photo.id} />;
          })}
        </div>
        <a
          className="mx-auto rounded-full px-7 py-3 mt-5 bg-gradient-to-br from-blue-300 via-purple-300 to-purple-400  text-slate-800"
          href=""
        >
          Book an appointment
        </a>
      </div>
    </>
  );
};

export default Gallery;
