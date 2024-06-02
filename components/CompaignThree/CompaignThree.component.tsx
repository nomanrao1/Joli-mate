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
import uploadedImg from "@/public/assets/uploadedImg.png";
import CrossVectorImg from "@/public/assets/CrossVector.png";
import NewAddOne from "@/public/assets/NewAddOne.png";

export const CompaignThree: React.FC = () => {
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
          Ads Placement files-----------------------------
        </p>
        <p className="text-16 font-semibold text-222222 mb-3 hidden lg:block md:block sm:hidden">
          Ads Placement
          files-------------------------------------------------------------------------------------------------------------------------------------
        </p>
        <div className="flex flex-col md:flex-row justify-between align-start items-start">
          <div className="w-full md:w-1/2 mr-1">
            <div>
              <InputFieldSet
                id="CampaignByline"
                label="Campaign byline"
                placeholder="e.g fly with emirates"
                value="e.g fly with emirates"
                onChange={handleCompanyNameChange}
                className="w-full"
              />
            </div>
            <div>
              <InputFieldSet
                id="CampaignByline"
                inputType="textarea"
                label="Campaign byline"
                placeholder="10% discount when you fly with emirate airline"
                value="10% discount when you fly with emirate airline"
                onChange={handleCompanyNameChange}
                className="w-full"
              />
            </div>
            <div>
              <InputFieldSet
                id="WebsiteURL"
                label="Website URL"
                placeholder="Enter your website URL"
                value="Enter your website URL"
                onChange={handleCompanyNameChange}
                className="w-full"
              />
            </div>
            <div className="w-full mr-1 mb-5">
              <label
                htmlFor="CallToAction"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Call to action
              </label>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="flex justify-between items-center align-middle w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                type="button"
              >
                <div>Visit Website</div>
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
            <div className="w-full mr-1 mb-5">
              <label
                htmlFor="UploadAssests"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Upload Assests
              </label>
              <div>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-[100px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">upload</span>
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none"
                >
                  <Image
                    src={uploadedImg}
                    alt="wroking"
                    width={100}
                    height={100}
                  />
                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-md mb-2 font-bold text-black bg-white border-2 border-black rounded-full -top-2 -end-2 dark:border-gray-900">
                    {/* <Image
                      src={CrossVectorImg}
                      alt="wroking"
                      width={10}
                      height={10}
                    /> */}
                    x
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <Button
                text="Save & Continue"
                className="text-white w-[440px] rounded-[15px] text-[16px] font-[600] lg:mt-[30px] mb-2"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 ml-1">
            <div className="w-full mr-1 mb-5">
              <label
                htmlFor="AdsPlacementPreview"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Ads Placement preview
              </label>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="flex justify-between items-center align-middle w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                type="button"
              >
                <div>Explore Preview</div>
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
                      Explore Preview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Explore Preview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Explore Preview
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-row justify-center items-center align-middle my-3">
                <Image
                  src={NewAddOne}
                  alt="NewAddOne"
                  width={375}
                  height={812}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
