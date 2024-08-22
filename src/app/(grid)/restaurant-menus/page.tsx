import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <h1 className="text-2xl text-center mt-6 font-bold">Our Menus</h1>
      <div className="container  grid grid-cols-[1fr,auto]  px-96">
        <div className="m-6">
          <h4 className="font-bold text-lg">Veg Burger</h4>
          <p className="font-semibold">
            A delicious and wholesome burger made with fresh vegetables, savory
            spices, and a perfectly toasted bun.
          </p>
        </div>
        <Image
          className="rounded m-1 p-3 hover:scale-150 hover:transition-transform duration-300"
          src={"/burger.jpg"}
          alt="Veg-Burger"
          width={100}
          height={100}
        />
        <div className="m-6">
          <h4 className="font-bold text-lg">Tacos</h4>
          <p className="font-semibold">
            Each bite offers a delightful mix of textures and tastes, wrapped in
            a soft, warm tortilla. Perfect for a quick snack or a satisfying
            meal!
          </p>
        </div>
        <Image
          className="rounded m-1 p-3 hover:scale-150 hover:transition-transform duration-300"
          src={"/tacos.jpg"}
          alt="tacos"
          width={100}
          height={100}
        />
        <div className="m-6">
          <h4 className="font-bold text-lg">Classic Waffles</h4>
          <p className="font-semibold">
            Each waffle is a delightful combination of sweetness and warmth,
            making it the perfect choice for breakfast or a delicious snack any
            time of the day!
          </p>
        </div>
        <Image
          className="rounded-full m-1 p-3 hover:scale-150 hover:transition-transform duration-300"
          src={"/waffle.png"}
          alt="Veg-Burger"
          width={100}
          height={100}
        />
      </div>
    </>
  );
};

export default Page;
