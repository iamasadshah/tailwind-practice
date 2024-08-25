import React from "react";

const Page = () => {
  return (
    <>
      <div className="md:bg-black md:h-screen xl:bg-white  ">
        <h1 className="font-extrabold text-2xl text-center py-4 md:text-white xl:text-black xl:text-5xl">
          Daily Average Stats
        </h1>
        <div className="flex flex-col px-4 space-y-4 md:space-y-0 md:flex-row md:space-x-8 justify-center items-center md:mt-4 md:">
          <div className="fitness-report">
            <h4>Avg. Steps/Day</h4>
            <h2 className="text-3xl font-bold xl:text-4xl">9,340</h2>
            <p>
              <b>+355</b> <br />
              last month
            </p>
          </div>
          <div className="fitness-report">
            <h4>Minutes/Day</h4>
            <h2 className="text-3xl font-bold xl:text-4xl">94</h2>
            <p>
              <b>+12</b> <br />
              last month
            </p>
          </div>
          <div className="fitness-report">
            <h4>kCal burnt/Day</h4>
            <h2 className="text-3xl font-bold xl:text-4xl">142</h2>
            <p>
              <b>+22</b>
              <br />
              last month
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
