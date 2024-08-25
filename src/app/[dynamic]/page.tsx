import React from "react";
import { LuConstruction } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";

export function generateStaticParams() {
  return [{ dynamic: "shoes" }, { dynamic: "cloths" }, { dynamic: "makeup" }];
}

const Page = (props: { params: { dynamic: string } }) => {
  const { dynamic } = props.params;
  return (
    <div className="flex justify-center items-center ">
      <div className=" font-bold py-20 px-10">
        <h1 className="grid grid-cols-3 place-items-center text-center text-5xl my-4 gap-x-24">
          <LuConstruction className="text-red-600" />
          Oops <LuConstruction className="text-red-600" />
        </h1>
        <h3 className="text-center text-cyan-600 text-xl my-2">
          Something is going on in the Universe...
        </h3>
        <p className="my-4 text-center text-lg">
          It seems like we’re having some difficulties; please don’t abandon
          ship, we’re sending for help.
        </p>
        <p className="flex justify-center items-center text-9xl ">
          <FaLaptopCode />
        </p>
        <p className="mt-8 text-center text-red-600  text-md">
          <b>Note:</b>Please check the URL and try again. We’re constantly
          working to enhance your web experience.
        </p>
      </div>
    </div>
  );
};

export default Page;
