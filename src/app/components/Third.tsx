import Link from "next/link";
import React from "react";

const Third = () => {
  return (
    <>
      <h1 className="text-center practices-heading text-3xl font-bold break-words">
        All Practices
      </h1>
      <div className="container grid grid-cols-2 px-6 my-8 gap-10 text-center md:grid-cols-3 xl:grid-cols-4">
        <Link href={"/blog-post"} className="practice">
          Blog Post
        </Link>
        <Link href={"/our-services"} className="practice">
          Services Page
        </Link>

        <Link href={"/pricing-plans"} className="practice">
          Pricing Plans
        </Link>
        <Link href={"/article-preview"} className="practice">
          Article Preview
        </Link>
        <Link href={"/fitness-report"} className="practice">
          Fitness Report
        </Link>
        <Link href={"/restaurant-menus"} className="practice">
          Restaurant Menus
        </Link>
        <Link href={"/single-price"} className="practice">
          Single Price
        </Link>
        <Link href={"/contact-form"} className="practice">
          Contact Form
        </Link>
        <Link href={"/service-section"} className="practice">
          Service Section
        </Link>
      </div>
    </>
  );
};

export default Third;
