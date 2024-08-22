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
          className="practices font-bold text-center bg-yellow-400 rounded-lg p-6 hover:bg-green-500 hover:scale-110 transition duration-300"
        >
          Blog Post
        </Link>
        <Link
          href={"/services"}
          className="practices text-center font-bold bg-yellow-400 rounded-lg p-6 hover:bg-green-500 hover:scale-110 transition hover:shadow-lg hover:shadow-slate-700 shadow-slate-800"
        >
          Services Page
        </Link>

        <Link
          href={"/pricing-plans"}
          className="practices text-center font-bold bg-yellow-400 rounded-lg p-6 hover:bg-green-500 hover:scale-110 hover:transition-transform"
        >
          Pricing Plans
        </Link>
        <Link
          href={"/article-preview"}
          className="practices text-center font-bold bg-yellow-400 rounded-lg p-6 hover:bg-green-500 hover:scale-110 hover:transition-transform"
        >
          Article Preview
        </Link>
        <Link
          href={"/fitness-report"}
          className="practices text-center font-bold bg-yellow-400 rounded-lg p-6 hover:bg-green-500 hover:scale-110 hover:transition-transform"
        >
          Fitness Report
        </Link>
        <Link
          href={"/restaurant-menus"}
          className="practices text-center font-bold bg-yellow-400 rounded-lg p-6 hover:bg-green-500 hover:scale-110 hover:transition-transform"
        >
          Restaurant Menus
        </Link>
      </div>
    </>
  );
};

export default Third;
