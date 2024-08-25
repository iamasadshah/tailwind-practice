import React from "react";

const Page = () => {
  return (
    <>
      <h1 className="text-3xl text-center my-4 font-semibold -tracking-tighter">
        Our Services
      </h1>
      <div className="bg-white text-center">
        <div className="container">
          <div className="services">
            <h3 className="text-cyan-600 text-lg font-bold pb-4">
              List Building
            </h3>
            <p>
              It's very easy to start creating email lists for your marketing
              actions, give it a try
            </p>
          </div>
          <div className="services">
            <h3 className="text-cyan-600 text-lg font-bold pb-4">
              Compaign Tracker
            </h3>
            <p>
              Compain is a feature we've created since the begining and it's at
              the core of Lomar
            </p>
          </div>
          <div className="services">
            <h3 className="text-cyan-600 text-lg font-bold pb-4">
              Analytical Tools
            </h3>
            <p>
              Lomar Collects all the necessary data in order to help you analyze
              different situations
            </p>
          </div>
          <div className="services">
            <h3 className="text-cyan-600 text-lg font-bold pb-4">
              Admin Control
            </h3>
            <p>
              Rights of users and Admins can easily be managed through the app's
              integrated control panel
            </p>
          </div>
          <div className="services">
            <h3 className="text-cyan-600 text-lg font-bold pb-4">
              Integration Setup
            </h3>
            <p>
              We've Provide a step by step integrations sessions to implement
              automation in your current flow
            </p>
          </div>
          <div className="services">
            <h3 className="text-cyan-600 text-lg font-bold pb-4">
              Helpline Support
            </h3>
            <p>
              Quality support is our top priority so please contact us for any
              problem you encounter
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
