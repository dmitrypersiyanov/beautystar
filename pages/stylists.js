import { stylists } from "@/data/stylists";

const Stylists = () => {
  return (
    <>
      <div className="h-64 w-full bg-pastel-purple flex justify-end items-center px-40">
        <h3 className="text-5xl font-gistesy">STYLISTS</h3>
      </div>
      <div className="flex flex-row gap-5 p-5">
        {stylists.map((stylist) => {
          return (
            <div
              key={stylist.id}
              className="rounded-ld w-40 bg-pastel-green px-10 py-5"
            >
              {stylist.name}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Stylists;
