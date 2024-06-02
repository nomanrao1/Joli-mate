"use client";
import React, { useState } from "react";
import DashoardHeader from "../DashboardHeader";

export const Document: React.FC = () => {
  return (
    <>
      <div className="">
        <div>
          <DashoardHeader heading="Document" />
        </div>

        <div className="hidden md:flex flex-row justify-between align-top items-start">
          <div className="text-[24px] font-medium">Business Document</div>
          <div>
            <button className=" h-[45px] p-2.5 text-black w-full md:w-[190px] rounded-[15px] text-[16px] font-[500] mb-2 bg-white text-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 border-2 border-gray-300">
              Upload File
            </button>
          </div>
        </div>

        <div className="md:hidden h-screen flex mt-10 w-full flex-row justify-center items-start align-middle">
          <div className="bg-white border-2 border-gray-300 flex flex-col justify-center items-center align-middle p-7 rounded-lg">
            <div className="text-[20px] font-medium text-center my-6">
              Upload your Business Document here
            </div>
            <button className=" h-[56px] p-2.5 text-black w-[200px] rounded-[15px] text-[16px] font-[500] mb-2 bg-white text-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 border-2 border-gray-300">
              Upload File
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
