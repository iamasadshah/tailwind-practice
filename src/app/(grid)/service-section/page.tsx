import React from "react";

const Page = () => {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 px-4 py-4">
      <img className="sm:row-start-1 sm:row-end-3 md:row-end-2 md:col-start-2" />
      <div className="md:col-start-1 md:text-right">
        <h3 className="service-section-heading">List Building</h3>
        <p className="service-section-para">
          It's very easy to start creating email lists for your marketing
          actions, give it a try
        </p>
        <h3 className="service-section-heading">Compaign Tracker</h3>
        <p className="service-section-para">
          Compain is a feature we've created since the begining and it's at the
          core of Lomar
        </p>
        <h3 className="service-section-heading">Analytical Tools</h3>
        <p className="service-section-para">
          Lomar Collects all the necessary data in order to help you analyze
          different situations
        </p>
      </div>
      <div className="sm:col-start-2 md:col-start-3">
        <h3 className="service-section-heading">Admin Control</h3>
        <p className="service-section-para">
          Rights of users and Admins can easily be managed through the app's
          integrated control panel
        </p>
        <h3 className="service-section-heading">Integration Setup</h3>
        <p className="service-section-para">
          We've Provide a step by step integrations sessions to implement
          automation in your current flow
        </p>
        <h3 className="service-section-heading">Helpline Support</h3>
        <p className="service-section-para">
          Quality support is our top priority so please contact us for any
          problem you encounter
        </p>
      </div>
    </section>
  );
};

export default Page;
