import { useRouter } from "next/router";
import { services } from "@/data/services";
import Image from "next/legacy/image";

const BeautyService = () => {
  const round = (num) => Math.ceil(num);
  const router = useRouter();
  const serviceId = router.query.serviceId;
  return (
    <div>
      {services
        .filter((service) => service.title == serviceId)
        .map((service) => {
          return (
            <div
              className="h-auto w-full bg-white flex flex-col sm:flex-row"
              key={service.id}
            >
              <div className="w-full sm:w-1/2 h-96 relative sm:h-[calc(100vh-192px)] overflow-hidden sm:sticky sm:top-[96px]">
                <Image
                  alt={service.name}
                  src={service.img}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
              <div className="w-full sm:w-1/2 h-full p-10 sm:p-10 lg:p-20 flex flex-col">
                <div className="flex flex-row justify-between">
                  <div className="w-full xl:w-1/2">
                    <h2 className="text-slate-800 text-start text-3xl font-semibold mb-4">
                      {service.title}
                    </h2>
                  </div>
                </div>
                <span className="bg-slate-800 px-4 py-2 rounded-md text-md font-light text-white w-full">
                  ${round(service.totalPrice())}
                </span>
                <hr className="h-0.5 my-8 border-0 bg-slate-100" />

                <h2 className="text-xl font-normal mb-3">
                  What is {service.title.toLowerCase()}?
                </h2>
                <p className="text-lg font-light text-slate-600">
                  {service.what}
                </p>
                <h2 className="text-xl font-normal mt-7 mb-3">
                  What&apos;s included in the services?
                </h2>
                <p className="text-lg font-light text-slate-600">
                  {service.how}
                </p>
                <h2 className="text-xl font-normal mt-7 mb-3">
                  Who is {service.title.toLowerCase()} for?
                </h2>
                <p className="text-lg font-light text-slate-600">
                  {service.for}
                </p>
                {service.title !== "Extensions" && (
                  <>
                    <h2 className="text-xl font-normal mt-7 mb-3">
                      How often do I need to make {service.title.toLowerCase()}?
                    </h2>
                    <p className="text-lg font-light text-slate-600">
                      {service.preferableSessions}
                    </p>
                  </>
                )}
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

export default BeautyService;
