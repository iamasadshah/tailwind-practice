import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-200 px-10 py-4 min-h-screen">
      <div>
        <form action="submit">
          <h3 className="text-center font-semibold text-2xl mb-4 md:text-3xl">
            Contact Form
          </h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
            <div className="grid grid-cols-1 ">
              <label
                htmlFor="fullname"
                className="md:text-lg lg:text-xl xl:text-2xl"
              >
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                placeholder="Full Name"
                className="contact-input"
                required
              />
              <label
                htmlFor="email"
                className="md:text-lg lg:mt-24 lg:text-xl xl:text-2xl"
              >
                Email Address
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email Address"
                className="contact-input"
                required
              />
            </div>
            <div className="grid grid-cols-1">
              <label
                htmlFor="message"
                className="md:text-lg lg:text-xl xl:text-2xl"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={10}
                className="rounded-md px-2 py-2"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div className="grid-cols-1 grid">
            <button className="col-span-full bg-rose-500 mt-4 px-10 py-1 rounded-2xl font-medium text-white md:text-lg lg:text-xl xl:text-2xl">
              Send a Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
