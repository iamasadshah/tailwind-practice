import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <h1 className=" text-center text-4xl font-semibold ">Our Menu</h1>
      <div className=" grid grid-cols-1 divide-y-4 divide-black md:divide-lime-600">
        <div className="restaurant-menu">
          <h4 className="font-bold text-lg md:text-2xl">Veg Burger</h4>
          <p className="font-semibold">
            A delicious and wholesome burger made with fresh vegetables, savory
            spices, and a perfectly toasted bun.
          </p>
          <Image
            className="md:size-32"
            src={"/burger.jpg"}
            alt="Veg-Burger"
            width={100}
            height={100}
          />
          <button className="menu-button">Buy Now</button>
        </div>

        <div className="restaurant-menu">
          <h4 className="font-bold text-lg md:text-2xl">Tacos</h4>
          <p className="font-semibold">
            Each bite offers a delightful mix of textures and tastes, wrapped in
            a soft, warm tortilla. Perfect for a quick snack or a satisfying
            meal!
          </p>
          <Image
            className="md:size-32"
            src={"/tacos.jpg"}
            alt="tacos"
            width={100}
            height={100}
          />
          <button className="menu-button">Buy Now</button>
        </div>

        <div className="restaurant-menu">
          <h4 className="font-bold text-lg md:text-2xl">Classic Waffles</h4>
          <p className="font-semibold">
            Each waffle is a delightful combination of sweetness and warmth,
            making it the perfect choice for breakfast or a delicious snack any
            time of the day!
          </p>
          <Image
            className="md:size-32"
            src={"/waffle.png"}
            alt="Veg-Burger"
            width={100}
            height={100}
          />
          <button className="menu-button">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Page;
