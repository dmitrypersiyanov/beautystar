import { services } from "@/data/services";

const round = (num) => Math.ceil(num);

const Prices = () => {
  return (
    <>
      <div className="h-32 sm:h-48 xl:h-64 w-full bg-gradient-to-r from-blue-200 via-purple-200 to-purple-300 flex justify-end items-center pr-10 sm:pr-20 lg:pr-40">
        <h2 className="font-gistesy text-5xl sm:text-5xl lg:text-6xl text-slate-800">
          Our prices
        </h2>
      </div>
      <div className="w-full p-10 sm:p-20 md:p-32">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mx-5">
          Checkout our services price list
        </h1>

        <div class="no-scrollbar relative overflow-x-auto mt-10 md:mt-20 mx-auto rounded-md">
          <table class="w-full text-left text-slate-400">
            <tbody>
              {services.map((service) => {
                return (
                  <>
                    <tr key={service.id} class="bg-slate-800 hover:scale-95">
                      <th
                        scope="row"
                        class={`px-12 py-6 font-normal text-white`}
                      >
                        {service.title}
                      </th>
                      <td
                        class={`px-12 py-6 text-right border-l-2 border-transparent`}
                      >
                        ${round(service.totalPrice())}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Prices;
