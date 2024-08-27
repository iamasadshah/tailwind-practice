import React from "react";

const Page = () => {
  return (
    <div className="grid container sm:grid-cols-2 text-left px-6 md:gap-x-4">
      <div className=" text-black px-5 component-header sm:col-start-1 sm:col-end-3 py-5 bg-white shadow-lg shadow-gray-600 rounded-lg my-4">
        <h3 className="text-emerald-600 font-bold text-2xl lg:text-4xl">
          Join Our Community
        </h3>
        <h4 className="text-lime-500 font-semibold lg:text-xl">
          30-day, hassle-free money back guarantee
        </h4>
        <p className="lg:text-lg">
          Gain access to our full library of tutorials along with expert code
          reveiws. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>

      <div className=" text-black py-5 px-5 bg-emerald-600 rounded-lg shadow-gray-600 my-4">
        <h4 className="text-xl font-semibold pb-2 lg:text-2xl">
          Monthly Subscription
        </h4>
        <p className="font-semibold pb-2 lg:text-lg">
          <b className="text-2xl font-semibold mr-2 lg:text-4xl">$29</b>/ month
        </p>
        <p className="font-[530] lg:text-xl">
          full access for less than $1 a day
        </p>
        <button className="bg-lime-500 rounded-md text-white px-10 py-1 mt-4 lg:mt-12 lg:py-3 lg:px-16 lg:text-2xl hover:border-2 hover:border-black hover:text-black hover:scale-105">
          Sign Up
        </button>
      </div>
      <div className=" text-black py-5 px-5 bg-emerald-400 rounded-lg shadow-gray-600 my-4">
        <h4 className="text-xl font-bold pb-2 lg:text-2xl">Why Us</h4>
        <ul className="list-decimal px-4 lg:text-lg">
          <li>Tutorials by industry expert</li>
          <li>Peer and expert code reveiw</li>
          <li>Coding Exercise</li>
          <li>Access to Our Github Repo</li>
          <li>Community Forum</li>
          <li>Flashcard decks</li>
          <li>New videos Every week</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
