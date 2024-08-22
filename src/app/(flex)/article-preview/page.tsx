import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex h-screen bg-slate-400  justify-center items-center">
        <Image
          className="flex  rounded-l-2xl rounded-bl-2xl "
          src={"/article.jpg"}
          alt="book"
          height={180}
          width={180}
        />

        <div
          className="flex flex-col rounded-r-2xl pl-5 py-0.5
      rounded-br-2xl bg-white w-[60%]"
        >
          <h3 className="text-3xl flex flex-col rounded pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            facilis
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quisquam, ipsa aspernatur rem perferendis consequatur perspiciatis
            accusantium possimus inventore, corporis officia sunt voluptatibus
            omnis? Vel mollitia adipisci nesciunt iure. Similique veritatis
            quidem laudantium obcaecati vitae quae aliquam odio placeat.
          </p>

          <div className="flex flex-row pt-3 px-6 justify-end">
            <Image
              width={50}
              height={50}
              src={"/profile.jpeg"}
              alt="profile"
              className="rounded-full
        "
            />
            <span className=" font-semibold ml-5">
              Asad Shah <br /> 20/03/2024
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
