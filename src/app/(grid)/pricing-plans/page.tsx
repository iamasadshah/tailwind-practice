import React from "react";

const Page = () => {
  return (
    <>
      <div
        className="container grid grid-cols-1 gap-x-8 p-24 place-items-center gap-y-4 md:grid-cols-3 text-start
      "
      >
        <div className="cursor-pointer hover:scale-110 hover:transition-transform hover:bg-yellow-400 border shadow-xl rounded-md p-8 pr-32 hover:text-white md:p-2 md:px-10 lg:py-8 lg:pr-32">
          <h3 className="font-bold text-2xl">Standard</h3>
          <p>Monthly Plan</p>
          <h2 className="font-bold text-4xl mt-4">$25</h2>
        </div>
        <div className="bg-pink-600 cursor-pointer hover:scale-110 hover:transition-transform hover:shadow-2xl hover:bg-green-600  hover:text-white shadow-xl rounded-md p-8 pr-32 md:p-2 md:px-10 lg:py-8 lg:pr-32">
          <h3 className="font-bold text-2xl">Popular</h3>
          <p>Monthly Plan</p>
          <h2 className="font-bold text-4xl mt-4">$40</h2>
        </div>
        <div className="border shadow-xl rounded-md p-8 pr-32 cursor-pointer hover:scale-110 hover:transition-transform hover:bg-yellow-400 hover:text-white md:p-2 md:px-10 lg:py-8 lg:pr-32">
          <h3 className="font-bold text-2xl">Premium</h3>
          <p>Monthly Plan</p>
          <h2 className="font-bold text-4xl mt-4">$55</h2>
        </div>
      </div>
    </>
  );
};

export default Page;
