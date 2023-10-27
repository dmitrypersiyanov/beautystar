import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-slate-800 px-10 sm:px-32 py-20 sm:py-32">
        <div className="grid grid-row-3 h-full w-full gap-10 ">
          <div className="text-5xl lg:text-6xl text-blue-300 font-bold flex justify-start lg:justify-start mb-10">
            <Link href="/">BROWERY</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 lg:gap-0">
            <div className="w-full sm:w-[300px] flex flex-col items-start gap-2">
              <h3 className="text-slate-300 text-lg font-semibold mb-5 uppercase">
                Navigation
              </h3>
              <Link
                className="text-slate-500 hover:text-slate-300 font-normal"
                href="/about"
              >
                About us
              </Link>
              <Link
                className="text-slate-500 hover:text-slate-300 font-normal "
                href="/contact"
              >
                Contact us
              </Link>
              <Link
                className="text-slate-500 hover:text-slate-300 font-normal "
                href="/gallery"
              >
                Gallery
              </Link>
              <Link
                className="text-slate-500 hover:text-slate-300 font-normal "
                href="/#stylists"
              >
                Stylists
              </Link>
              <Link
                className="text-slate-500 hover:text-slate-300 font-normal "
                href="/services"
              >
                Services
              </Link>
              <Link
                className="text-slate-500 hover:text-slate-300 font-normal "
                href="/prices"
              >
                Prices
              </Link>
            </div>
            <div className="w-full sm:w-[300px] flex flex-col items-start gap-2">
              <h3 className="text-slate-300 text-lg font-semibold mb-5 uppercase">
                Social
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  className="text-slate-500 hover:text-slate-300 font-normal"
                  href="https://www.facebook.com/"
                >
                  Facebook
                </a>
                <a
                  className="text-slate-500 hover:text-slate-300 font-normal"
                  href="https://www.instagram.com/"
                >
                  Instagram
                </a>
                <a
                  className="text-slate-500 hover:text-slate-300 font-normal"
                  href="https://www.snapchat.com/"
                >
                  Snapchat
                </a>
                <a
                  className="text-slate-500 hover:text-slate-300 font-normal"
                  href="https://www.youtube.com/"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 lg:gap-0">
            <div className="w-full sm:w-[300px] flex flex-col gap-4">
              <h3 className="text-slate-300 text-lg font-semibold mb-5 uppercase">
                Hours
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row w-full">
                  <div className="w-1/2 text-slate-500 font-normal">Monday</div>
                  <div className="w-1/2 text-slate-500 font-normal text-right">
                    10AM - 10PM
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-1/2 text-slate-500 font-normal">
                    Tuesday
                  </div>
                  <div className="w-1/2 text-slate-500 font-normal text-right">
                    10AM - 10PM
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-1/2 text-slate-500 font-normal">
                    Wednesday
                  </div>
                  <div className="w-1/2 text-slate-500 font-normal text-right">
                    10AM - 10PM
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-1/2 text-slate-500 font-normal">
                    Thursday
                  </div>
                  <div className="w-1/2 text-slate-500 font-normal text-right">
                    10AM - 10PM
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-1/2 text-slate-500 font-normal">Friday</div>
                  <div className="w-1/2 text-slate-500 font-normal text-right">
                    10AM - 12PM
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-1/2 text-slate-500 font-normal">
                    Saturday
                  </div>
                  <div className="w-1/2 text-slate-500 font-normal text-right">
                    10AM - 12PM
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-1/2 text-slate-500 font-normal">Sunday</div>
                  <div className="w-1/2 text-slate-500 font-normal text-right">
                    CLOSED
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[300px] flex flex-col items-start gap-4">
              <h3 className="text-slate-300 text-lg font-semibold mb-5 uppercase">
                Contact
              </h3>
              <div>
                <p className="text-slate-500 font-normal">
                  1 Waymont Ave, Toronto, ON, Canada
                </p>
                <p className="text-slate-500 font-normal">T: +14899100983</p>
                <p className="text-slate-500 font-normal">
                  E: browery@email.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
