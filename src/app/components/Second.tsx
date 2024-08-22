import Image from "next/image";
import React from "react";

const Second = () => {
  return (
    <div className="text-center  m-5 p-4 font-semibold border-2 rounded-2xl ring-4 ring-green-600 ">
      <b className="text-2xl font-serif">From The Books</b> <br />
      Modern-css-with-tailwind-second-edition <br /> & <br /> CSS Flex &
      Grid_Tailwind CSS by Shruti Balasa
      <div className=" grid grid-cols-2 place-items-center w-full  h-fit">
        <Image
          width={450}
          height={450}
          className="rounded hover:saturate-150  hover:scale-110 cursor-grab hover:transition-transform"
          src="/Modern-css-with-tailwind.png"
          alt="Book image"
        />
        <Image
          width={450}
          height={450}
          className=" rounded hover:saturate-150  hover:scale-110 cursor-grab hover:transition-transform"
          src="/css-flex-and-grid.png"
          alt="Book image"
        />
      </div>
    </div>
  );
};

export default Second;
