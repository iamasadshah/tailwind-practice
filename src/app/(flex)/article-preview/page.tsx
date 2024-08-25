import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-4 ">
        <Image
          className=" rounded-md md:h-60 md:w-96 md:shadow-xl md:shadow-gray-700 xl:h-80 xl:w-[500px] 2xl:h-[500px] 2xl:w-[800px] 2xl:rounded-lg "
          src={"/article.jpg"}
          alt="book"
          height={180}
          width={180}
        />

        <div className="text-center px-6 md:mt-6 xl:mt-12 2xl:mt-20">
          <h3 className="font-semibold text-xl md:text-2xl xl:text-4xl 2xl:text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            facilis
          </h3>
          <p className="text-start md:text-center xl:text-xl 2xl:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quisquam, ipsa aspernatur rem perferendis consequatur perspiciatis
            accusantium possimus inventore, corporis officia sunt voluptatibus
            omnis? Vel mollitia adipisci nesciunt iure. Similique veritatis
            quidem laudantium obcaecati vitae quae aliquam odio placeat.
          </p>

          <div className="flex items-center justify-center space-x-5 2xl:space-x-10 mt-4 xl:text-xl 2xl:text-4xl">
            <Image
              width={50}
              height={50}
              src={"/profile.jpeg"}
              alt="profile"
              className="rounded-full xl:w-24 2xl:w-40 2xl:mt-6
        "
            />
            <span className=" font-semibold">
              Asad Shah <br /> 20/08/2024
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
