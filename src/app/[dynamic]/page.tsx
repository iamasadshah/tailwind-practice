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
        The Page is Under Construction
      </div>
    </div>
  );
};

export default Page;
