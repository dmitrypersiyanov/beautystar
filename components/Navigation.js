import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="w-full h-36 lg:h-48 bg-white flex flex-row justify-between items-center px-10 lg:px-14 xl:px-20">
      <div className="text-5xl lg:text-6xl font-bold tracking-tighter text-slate-800 -mt-4">
        <Link href="/">Browery</Link>
      </div>
      <div className="hidden lg:flex flex-row gap-5 items-center font-light">
        <div>
          <a
            className="text-slate-600 hover:text-slate-900 text-lg"
            href="/services"
          >
            Services
          </a>
        </div>
        <div>
          <Link
            className="text-slate-600 hover:text-slate-900 text-lg"
            href="/gallery"
          >
            Gallery
          </Link>
        </div>
        <div>
          <Link
            className="text-slate-600 hover:text-slate-900 text-lg"
            href="/prices"
          >
            Prices
          </Link>
        </div>
        <div>
          <a
            className="text-slate-600 hover:text-slate-900 text-lg"
            href="/about"
          >
            About
          </a>
        </div>
        {/* <div>
          <Link
            className="text-slate-600 hover:text-slate-900 text-lg"
            href="/#stylists"
          >
            Stylists
          </Link>
        </div> */}
        <div className="rounded-full px-6 py-3 bg-slate-800 text-white ml-5">
          <a href="">Book now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
