import React from "react";
import Button from "../Button";

export type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <div className="w-full h-[60px] bg-[#F4FAFC] flex justify-between items-center px-[20px] md:px-[150px] py-[20px] md:py-[50px]">

        <span className="text-[#9747FF] font-[700] text-[24px] leading-[24px]">
          Ad Space
        </span>

        <Button
        onClick={()=>{console.log("Added to cart")}}
          text="Login"
          className=" bg-purple-600 text-white font-bold text-md rounded-lg  w-[195px] h-[56px]"
        />
      </div>
    </>
  );
};
