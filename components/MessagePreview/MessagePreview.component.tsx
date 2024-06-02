import React from "react";
import ImageCard from "../ImageCard";

export const MessgePreview = () => {
  return (
    <>
      <div className=" flex flex-col gap-y-3 items-center justify-center border rounded-md border-gray-200 p-2  h-[279px] flex-1">
        <ImageCard
          title="image"
          imageUrl="/assets/image1.png"
          className="w-full h-[210px]"
        />

        <h2>Message Preview</h2>
        <div className="flex justify-center gap-x-3">
          <div className="w-[50px] h-[5px] bg-red-medium rounded-md"></div>
          <div className="w-[50px] h-[5px] bg-gray-300 rounded-md"></div>
          <div className="w-[50px] h-[5px] bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </>
  );
};
