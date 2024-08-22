import Image from "next/image";
import React from "react";

const Second = () => {
  return (
    <div className="text-center  m-5 p-4 font-semibold border-2 rounded-2xl ring-4 ring-green-600 ">
      <b className="text-2xl font-serif">From The Books</b> <br />
      Modern-css-with-tailwind-second-edition <br /> & <br /> CSS Flex &
      Grid_Tailwind CSS by Shruti Balasa
      <div className="my-4 flex justify-center items-center">
        <Image
          width={100}
          height={100}
          className="rounded hover:saturate-150 shadow-2xl hover:scale-110 cursor-grab hover:transition-transform"
          src="/book.png"
          alt="Book image"
        />
      </div>
    </div>
  );
};

export default Second;
