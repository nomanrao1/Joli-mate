"use client";
import DashoardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import type { NextPage } from "next";
import image from "../../public/assets/new-add.png";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { InputFieldSet } from "../InputFieldSet";

export const CompaignTwo: React.FC = () => {
  const [companyNameValue, setCompanyNameValue] = useState("");
  const handleCompanyNameChange = () => {
    console.log("Button is clicked");
  };
  const handleClick = () => {
    console.log("Button is clicked");
  };
  return (
    <>
      <div className="w-full h-auto px-2">
        <p className="text-[16px] font-[600] text[#222222] mb-3 lg:hidden md:hidden sm:block">
          Target Audience-----------------------------
        </p>
        <p className="text-16 font-semibold text-222222 mb-3 hidden lg:block md:block sm:hidden">
          Target
          Audience------------------------------------------------------------------------------------------------------------------------------------------------
        </p>
        <div className="flex flex-col md:flex-row justify-start align-start items-start">
          <div className="w-full md:w-1/2 mr-1 mb-5">
            <label
              htmlFor="Age"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="flex justify-between items-center align-middle w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              type="button"
            >
              <div>Select Your Age</div>
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    18 to 54+
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    18 to 44+
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    18 to 24+
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 ml-1">
            <label
              htmlFor="Gender"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Gender
            </label>
            <div className="flex flex-row justify-between items-start align-top">
              <button className=" h-[45px] p-2.5 text-white w-[125px] md:w-[190px] rounded-[15px] text-[16px] font-[500] mb-2 bg-purple-600 text-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                All
              </button>
              <button className=" h-[45px] p-2.5 text-black w-[125px] md:w-[190px] rounded-[15px] text-[16px] font-[500] mb-2 bg-white text-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 border-2 border-gray-300">
                Male
              </button>
              <button className=" h-[45px] p-2.5 text-black w-[125px] md:w-[190px] rounded-[15px] text-[16px] font-[500] mb-2 bg-white text-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 border-2 border-gray-300">
                Female
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between align-middle items-center">
          <div className="w-full md:w-1/2 mr-1 mb-5">
            <label
              htmlFor="Age"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="flex justify-between items-center align-middle w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              type="button"
            >
              <div>Select Location</div>
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Pakistan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Afghanistan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    South Africa
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 ml-1">
            <InputFieldSet
              id="locationshow"
              label="All locations added will appear heres"
              placeholder="All locations added will appear here"
              value="All locations added will appear here"
              onChange={handleCompanyNameChange}
              className="w-full"
            />
          </div>
        </div>

        <p className="text-[16px] font-[600] text[#222222] mb-3 lg:hidden md:hidden sm:block">
          Expected Result-----------------------------
        </p>
        <p className="text-16 font-semibold text-222222 mb-3 hidden lg:block md:block sm:hidden">
          Expected
          Result------------------------------------------------------------------------------------------------------------------------------------------------
        </p>

        <div className="flex flex-col md:flex-row justify-between align-middle items-center">
          <div className="w-full md:w-1/2 mr-1">
            <InputFieldSet
              id="TargetAudience"
              label="Target audience size"
              placeholder="100,000"
              value="100,000"
              onChange={handleCompanyNameChange}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-1/2 ml-1">
            <InputFieldSet
              id="DailyClicks"
              label="Estimated daily clicks"
              placeholder="1k to 7.7k"
              value="1k to 7.7k"
              onChange={handleCompanyNameChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-end  px-2">
        <Button
          text="Save & Continue"
          className="text-white w-[440px] rounded-[15px] text-[16px] font-[600] lg:mt-[30px] mb-2"
          onClick={handleClick}
        />
      </div>
    </>
  );
};
