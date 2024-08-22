import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center h-full my-20 border-2 rounded-xl">
        <div className="grid grid-cols-1 p-6 place-items-center">
          <Image
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
        <div className="grid grid-cols-1 p-6 place-items-center">
          <Image
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
        <div className="grid grid-cols-1 p-6 place-items-center">
          <Image
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
        <div className="grid grid-cols-1 p-6 place-items-center">
          <Image
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
        <div className="grid grid-cols-1 p-6 place-items-center">
          <Image
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
        <div className="grid grid-cols-1 p-6 place-items-center">
          <Image
            src={"/blog-featured.jpg"}
            alt="featured image"
            width={100}
            height={100}
          />
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate laborum distinctio eveniet dolor expedita quaerat
            laboriosam illo quasi eos?
          </p>
          <Link href={"/"} className="text-cyan-600">
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
