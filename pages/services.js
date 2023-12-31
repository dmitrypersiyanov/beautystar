import { services } from "@/data/services";
import ServicePanelLeft from "@/components/ServicePanelLeft";
import ServicePanelRight from "@/components/ServicePanelRight";

const round = (num) => Math.ceil(num);

const Services = () => {
  return (
    <>
      <div className="h-32 sm:h-48 xl:h-64 w-full bg-gradient-to-r from-blue-200 via-purple-200 to-purple-300 flex justify-end items-center pr-10 sm:pr-20 lg:pr-40"></div>
      <div className="w-full h-auto py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-20 mx-5">
          Discover our services
        </h1>
        <div className="grid grid-cols-1 gap-32 px-10 sm:px-20 xl:px-40 mb-20">
          {services.map((item) => {
            return item.id % 2 == 0 ? (
              <ServicePanelLeft
                {...item}
                round={round}
                totalPrice={() => item.totalPrice()}
              />
            ) : (
              <ServicePanelRight
                {...item}
                round={round}
                totalPrice={() => item.totalPrice()}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
