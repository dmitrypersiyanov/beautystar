const Contact = () => {
  return (
    <>
      <div className="h-32 sm:h-48 xl:h-64 w-full bg-gradient-to-r from-blue-200 via-purple-200 to-purple-300 flex justify-end items-center pr-10 sm:pr-20 lg:pr-40">
        <h2 className="font-gistesy text-4xl sm:text-5xl lg:text-6xl">
          Contact us
        </h2>
      </div>

      <div className="w-full px-10 md:px-20 py-20 xl:py-40 bg-blue-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-5">
          Drop us a line
        </h2>
        <form className="w-full md:w-[600px] mx-auto mt-10 flex flex-col items-center">
          <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:mb-6 w-full">
              <input
                type="text"
                id="name"
                class="py-4 px-5 border-none outline-none text-md rounded-lg block w-full bg-gray-800 text-slate-100"
                placeholder="Your first name"
                required
              />
            </div>
            <div className="mb-6 w-full">
              <input
                type="text"
                id="lastname"
                class="py-4 px-5 border-none outline-none text-md rounded-lg block w-full bg-gray-800 text-slate-100"
                placeholder="Your lastname"
                required
              />
            </div>
          </div>

          <div class="mb-6 w-full">
            <input
              type="email"
              id="email"
              class="py-4 px-5 border-none outline-none text-md rounded-lg block w-full bg-gray-800 text-slate-100"
              placeholder="Your email"
              required
            />
          </div>
          <div class="mb-6 w-full">
            <textarea
              id="message"
              rows="4"
              class="py-4 px-5 border-none outline-none text-md rounded-lg block w-full bg-gray-800 text-slate-100 h-64 resize-none"
              placeholder="Drop a line here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="rounded-full py-3 w-40 gradient bg-gradient-to-br from-blue-300 via-purple-300 to-purple-400 text-slate-800 mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
