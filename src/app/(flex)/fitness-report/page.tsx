import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex flex-col justify-center  h-screen items-center bg-slate-400">
        <h1 className="font-extrabold text-5xl">Daily Average Stats</h1>
        <div className="flex space-x-10 mt-10 bg-white  shadow-2xl rounded-3xl  p-10">
          <div className="bg-teal-500 rounded-2xl p-4 text-center space-y-4 px-10">
            <h4 className="text-lg">Avg. Steps/Day</h4>
            <h2 className="text-3xl font-bold">9,340</h2>
            <p>
              <b>+355</b> <br />
              last month
            </p>
          </div>
          <div className="bg-teal-500 rounded-2xl  p-4 text-center space-y-4 px-10">
            <h4>Minutes/Day</h4>
            <h2 className="text-3xl font-bold">94</h2>
            <p>
              <b>+12</b> <br />
              last month
            </p>
          </div>
          <div className="bg-teal-500 rounded-2xl p-4 text-center space-y-4 px-10">
            <h4>kCal burnt/Day</h4>
            <h2 className="text-3xl font-bold">142</h2>
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
