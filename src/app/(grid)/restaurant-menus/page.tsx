import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="container  grid grid-cols-[1fr,auto] p-24 px-96">
        <div className="m-6">
          <h4 className="font-bold text-lg">Veg Burger</h4>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            sequi?
          </p>
        </div>
        <Image
          className="rounded-full m-1 p-3"
          src={"/profile.jpeg"}
          alt="Veg-Burger"
          width={100}
          height={100}
        />
        <div className="m-6">
          <h4 className="font-bold text-lg">Tacos</h4>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            sequi?
          </p>
        </div>
        <Image
          className="rounded-full m-1 p-3"
          src={"/profile.jpeg"}
          alt="Veg-Burger"
          width={100}
          height={100}
        />
        <div className="m-6">
          <h4 className="font-bold text-lg">Classic Waffles</h4>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            sequi?
          </p>
        </div>
        <Image
          className="rounded-full m-1 p-3"
          src={"/profile.jpeg"}
          alt="Veg-Burger"
          width={100}
          height={100}
        />
      </div>
    </>
  );
};

export default Page;
