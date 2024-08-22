import React from "react";
export function generateStaticParams() {
  return [{ dynamic: "shoes" }, { dynamic: "cloths" }, { dynamic: "makeup" }];
}

const Page = (props: { params: { dynamic: string } }) => {
  const { dynamic } = props.params;
  return (
    <div className="flex justify-center items-center">
      <div className="text-5xl font-bold p-20">
        <p className="bg-red-600 rounded-lg text-white text-center py-6">
          {dynamic}{" "}
        </p>{" "}
        <h1>Oops</h1>
        <h3>Something is going on in the Universe...</h3>
        <p>
          It seems like we’re having some difficulties; please don’t abandon
          ship, we’re sending for help.
        </p>
      </div>
    </div>
  );
};

export default Page;
