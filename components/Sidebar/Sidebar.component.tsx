import Link from "next/link";
import React from "react";
import SideMenu from "./SideMenu";

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-12 px-8 py-8  w-[240px] h-screen bg-[#F4FAFC] sm:h-[130vh]">
      <h1 className="text-center text-[24px] font-bold text-textcolor-primary">
        Ad Space
      </h1>
      <SideMenu />
    </div>
  );
};
