const ContactUs = () => {
  return (
    <div className="max-w-8xl lg:px-24 bg-black text-white  py-20 pb-20 ">
      <div class="p-4 mx-auto  max-w-xl shadow-2xl rounded-lg bg-black border border-borderColor font-[sans-serif] pb-12">
        <h1 class="text-3xl text-white pt-6 font-extrabold text-center">
          Subscribe to Excitement!
        </h1>
        <p className="text-center py-4 text-[20px]">
          Get the latest updates and education directly to your Contact.
        </p>
        <form class="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="6"
            class="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
          ></textarea>
          <button
            type="button"
            class="text-black font-bold  bg-baseColor hover:bg-blue-600 tracking-wide rounded-md text-xl px-4 py-3  w-full"
          >
            Submit -- {">"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
