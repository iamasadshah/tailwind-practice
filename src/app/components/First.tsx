import Image from "next/image";
import React from "react";

const First = () => {
  return (
    <>
      <div className="flex justify-between items-center text-slate-950 font-semibold first-letter:text-2xl rounded-md p-4 px-8  text-center gap-7 bg-gradient-to-r from-green-500 via-green-800 to-green-500">
        <Image src={"/next.svg"} alt="nextjs logo" width={100} height={100} />
        <h3 className="text-2xl text-white">
          Learning Next.js and Tailwind CSS
        </h3>
        <Image
          src={"/tailwind-css.png"}
          alt="nextjs logo"
          width={100}
          height={50}
        />
      </div>
    </>
  );
};

export default First;
