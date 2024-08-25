import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold pt-7">
        Our Blog Posts
      </h1>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center h-full mt-10 ">
        <div className="blog-posts">
          <Image
            className="featured-image"
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3 className="text-2xl">Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
        <div className="blog-posts">
          <Image
            className="featured-image"
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3 className="text-2xl">Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
        <div className="blog-posts">
          <Image
            className="featured-image"
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3 className="text-2xl">Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
        <div className="blog-posts">
          <Image
            className="featured-image"
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3 className="text-2xl">Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
        <div className="blog-posts">
          <Image
            className="featured-image"
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3 className="text-2xl">Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
        <div className="blog-posts">
          <Image
            className="featured-image"
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3 className="text-2xl">Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600 ">
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
