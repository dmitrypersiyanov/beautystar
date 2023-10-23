import { useRouter } from "next/router";
import { stylists } from "@/data/stylists";
import Image from "next/image";

const StylistProfile = () => {
  const router = useRouter();
  const stylistId = router.query.stylistId;
  return (
    <div>
      {stylists
        .filter((stylist) => stylist.name == stylistId)
        .map((stylist) => {
          return (
            <div
              className="h-auto w-full bg-white flex flex-col sm:flex-row"
              key={stylist.id}
            >
              <div className="w-full sm:w-1/2 h-96 relative sm:h-[calc(100vh-192px)] overflow-hidden sm:sticky sm:top-[96px]">
                <Image
                  alt={stylist.name}
                  src={stylist.img}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="w-full sm:w-1/2 h-full p-10 sm:p-10 lg:p-20 flex flex-col">
                <h2 className="text-slate-800 text-3xl font-semibold mb-4 text-center">
                  {stylist.name}
                </h2>
                <hr className="h-0.5 my-8 border-0 bg-slate-100" />
                {/* <span className="bg-slate-700 px-4 py-2 rounded-md text-md font-light text-white mb-4 inline-block">
                  {stylist.specialization}
                </span> */}
                <h2 className="text-xl font-normal mb-3">
                  About {stylist.name}
                </h2>
                <p className="text-lg font-light text-slate-600">
                  {stylist.about}
                </p>
                <h2 className="text-xl font-normal mt-7 mb-3">
                  {stylist.name}'s interests
                </h2>
                <p className="text-lg font-light text-slate-600">
                  {stylist.interests}
                </p>
                <h2 className="text-xl font-normal mt-7 mb-3">
                  {stylist.name}'s experience
                </h2>
                <p className="text-lg font-light text-slate-600">
                  {stylist.experience}
                </p>
                <a
                  className="mx-auto rounded-full w-auto text-center px-7 py-3 mt-10 mb-4 bg-gradient-to-br from-blue-300 via-purple-300 to-purple-400  text-slate-800"
                  href=""
                >
                  Book an appointment
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default StylistProfile;
