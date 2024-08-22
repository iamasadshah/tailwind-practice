import Link from "next/link";
import React from "react";

const Third = () => {
  return (
    <>
      <h1 className="text-center practices-heading text-3xl font-bold">
        All Practices
      </h1>
      <div className="container grid grid-cols-3 px-6 my-14 gap-10 ">
        <Link
          href={"/blog-post"}
          className="practices font-bold text-center bg-yellow-400 rounded-lg py-6 px-1 hover:bg-green-500 hover:scale-110 transition duration-300"
        >
          Blog Post
        </Link>
        <Link
          href={"/our-services"}
          className="practices text-center font-bold bg-yellow-400 rounded-lg py-6 px-1 hover:bg-green-500 hover:scale-110 transition duration-300 hover:shadow-lg hover:shadow-slate-700 shadow-slate-800"
        >
          Services Page
        </Link>

        <Link
          href={"/pricing-plans"}
          className="practices text-center font-bold bg-yellow-400 rounded-lg py-6 px-1 hover:bg-green-500 hover:scale-110 transition duration-300 hover:shadow-lg hover:shadow-slate-700 shadow-slate-800"
        >
          Pricing Plans
        </Link>
        <Link
          href={"/article-preview"}
          className="practices text-center font-bold bg-yellow-400 rounded-lg py-6 px-1 hover:bg-green-500 hover:scale-110 transition duration-300 hover:shadow-lg hover:shadow-slate-700 shadow-slate-800"
        >
          Article Preview
        </Link>
        <Link
          href={"/fitness-report"}
          className="practices text-center font-bold bg-yellow-400 rounded-lg py-6 px-1 hover:bg-green-500 hover:scale-110 transition duration-300 hover:shadow-lg hover:shadow-slate-700 shadow-slate-800"
        >
          Fitness Report
        </Link>
        <Link
          href={"/restaurant-menus"}
          className="practices text-center font-bold bg-yellow-400 rounded-lg py-6 px-1 hover:bg-green-500 hover:scale-110 transition duration-300 hover:shadow-lg hover:shadow-slate-700 shadow-slate-800"
        >
          Restaurant Menus
        </Link>
      </div>
    </>
  );
};

export default Third;
