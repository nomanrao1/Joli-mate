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

export const Compaign: React.FC = () => {
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
        <div className="w-full md:w-1/2 mr-1">
          <InputFieldSet
            id="companyName"
            label="Company Name"
            placeholder="Glaxy Weblinks"
            value={companyNameValue}
            onChange={handleCompanyNameChange}
            className="w-full"
          />
        </div>

        <p className="text-[16px] font-[600] text[#222222] mb-3 lg:hidden md:hidden sm:block">
          Compaign Details-----------------------------
        </p>
        <p className="text-16 font-semibold text-222222 mb-3 hidden lg:block md:block sm:hidden">
          Compaign
          Details------------------------------------------------------------------------------------------------------------------------------------------------
        </p>
        <div className="flex flex-col md:flex-row justify-start align-start items-start">
          <div className="w-full md:w-1/2 mr-1 mb-5">
            <label
              htmlFor="campaignObjectives"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Campaign Objectives
            </label>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="flex justify-between items-center align-middle w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              type="button"
            >
              <div>Brand Awareness</div>
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
                    Brand Awareness
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 ml-1">
            <InputFieldSet
              id="companyName"
              label="Where should we direct your users to?"
              placeholder="Glaxy Weblinks"
              value={companyNameValue}
              onChange={handleCompanyNameChange}
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 mr-1">
          <InputFieldSet
            id="companyName"
            label="Call to Action"
            placeholder="Glaxy Weblinks"
            value={companyNameValue}
            onChange={handleCompanyNameChange}
            className="w-full"
          />
        </div>

        <p className="text-[16px] font-[600] text[#222222] mb-3 lg:hidden md:hidden sm:block">
          Compaign Details-----------------------------
        </p>
        <p className="text-16 font-semibold text-222222 mb-3 hidden lg:block md:block sm:hidden">
          Compaign
          Details------------------------------------------------------------------------------------------------------------------------------------------------
        </p>

        <div className="flex flex-col md:flex-row justify-start align-start items-start">
          <div className="w-full md:w-1/2 mr-1">
            <label
              htmlFor="campaignObjectives"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Start Date
            </label>
            <input
              type="text"
              id="startdate"
              className={`block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="10 June, 2023"
              value="10 June, 2023"
            />
          </div>
          <div className="w-full md:w-1/2 ml-1">
            <label
              htmlFor="campaignObjectives"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              End Date
            </label>
            <input
              type="text"
              id="startdate"
              className={`block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="10 June, 2023"
              value="10 June, 2023"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between align-middle items-center">
          <div className="w-full md:w-1/2 mr-1">
            <InputFieldSet
              id="companyName"
              label="Daily Ads Spend"
              placeholder="€"
              value={companyNameValue}
              onChange={handleCompanyNameChange}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-1/2 ml-1">
            <InputFieldSet
              id="companyName"
              label="Max Daily Threshold"
              placeholder="€"
              value={companyNameValue}
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
