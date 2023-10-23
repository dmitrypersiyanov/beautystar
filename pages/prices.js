import { services } from "@/data/services";

const round = (num) => Math.ceil(num);

const tableRow = (arr, index) => {
  const len = arr.length;
  if (index == 0) {
    return "pt-12";
  }
  if (index == len - 1) {
    return "pb-12";
  } else return;
};

const Prices = () => {
  return (
    <>
      <div className="h-32 sm:h-48 xl:h-64 w-full bg-gradient-to-r from-blue-200 via-purple-200 to-purple-300 flex justify-end items-center pr-10 sm:pr-20 lg:pr-40">
        <h2 className="font-gistesy text-5xl sm:text-5xl lg:text-6xl text-slate-800">
          Our prices
        </h2>
      </div>
      <div className="w-full p-10 sm:p-20 md:p-32">
        <h1 className="text-4xl font-bold text-center text-slate-800 mx-5">
          Checkout our services price list
        </h1>

        <div class="no-scrollbar relative overflow-x-auto mt-10 md:mt-20 mx-auto rounded-md">
          <table class="w-full text-left text-slate-400">
            <tbody>
              {services.map((item, index) => {
                return (
                  <>
                    <tr key={item.id} class="bg-slate-800">
                      <th
                        scope="row"
                        class={`${tableRow(
                          services,
                          index
                        )} px-12 py-6 font-normal text-white`}
                      >
                        {item.title}
                      </th>
                      <td
                        class={`${tableRow(
                          services,
                          index
                        )} px-12 py-6 text-right`}
                      >
                        ${round(item.totalPrice())}
                      </td>
                    </tr>
                    {/* <div className="w-full h-24 bg-red-500"></div> */}
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
