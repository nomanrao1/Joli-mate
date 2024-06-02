"use client";
import React, { useState } from "react";
import DashoardHeader from "../DashboardHeader";
import Button from "../Button";

export const Invoice: React.FC = () => {
  function handleClick() {
    console.log("woking");
  }
  return (
    <>
      <div className="">
        <div>
          <DashoardHeader heading="Document" />
        </div>

        <div className="h-screen">
          <div className="flex flex-row justify-between align-top items-start">
            {/* left side */}
            <div>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="flex justify-between items-center align-middle w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                type="button"
              >
                <div>January</div>
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
                      January
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      January
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      January
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* right side */}
            <div className="hidden md:flex">
              <Button
                text="Download PDF"
                className="text-white w-[200px] h-[56px] rounded-[15px] text-[16px] font-[600] mb-2"
                onClick={handleClick}
              />
            </div>
          </div>

          <div className="mt-5">
            <div className="border-2 border-gray-300 rounded-lg">
              <div className="border-2 border-gray-300 p-5 flex flex-row justify-between align-top items-start rounded-t-lg">
                {/* left side */}
                <div>
                  <div className="text-[16px] font-semibold text-black">
                    Delicious Burger
                  </div>
                  <div className="text-[16px] font-normal text-black">
                    1234 State St
                  </div>
                  <div className="text-[16px] font-normal text-black">
                    San Francisco, CA, 12345
                  </div>
                </div>
                {/* left side */}
                <div>
                  <div>Invoice</div>
                  <div>#101020</div>
                </div>
              </div>

              <div className="border-2 border-gray-300 p-5 flex flex-row justify-between align-top items-start">
                {/* left side */}
                <div>
                  <div className="text-[16px] font-semibold text-black">
                    Billed By
                  </div>
                  <div className="text-[16px] font-normal text-black">
                    Jolimate
                  </div>
                  <div className="text-[16px] font-normal text-black">
                    support@jolimate.app
                  </div>
                </div>
                {/* right side */}
                <div>
                  <div className="flex flex-row justify-between align-top items-start">
                    <div className="text-[16px] text-[#626262] font-normal w-[120px]">
                      Start Date
                    </div>
                    <div className="text-[16px] font-semibold text-black">
                      09.10.20
                    </div>
                  </div>
                  <div className="flex flex-row justify-between align-top items-start">
                    <div className="text-[16px] text-[#626262] font-normal w-[120px]">
                      End Date
                    </div>
                    <div className="text-[16px] font-semibold text-black">
                      09.10.20
                    </div>
                  </div>
                  <div className="flex flex-row justify-between align-top items-start">
                    <div className="text-[16px] text-[#626262] font-normal w-[120px]">
                      Incured Amount
                    </div>
                    <div className="text-[16px] font-semibold text-black">
                      $12,000
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-300 p-5 flex flex-row justify-between align-top items-start">
                {/* left side */}
                <div className="text-[16px] font-bold text-[#626262]">
                  January Usage
                </div>
              </div>

              <div className="border-2 border-gray-300 p-5 flex flex-row justify-between align-top items-start">
                {/* left side */}
                <div>
                  <div className="text-[16px] font-normal text-[#626262]">
                    Ads Title 1
                  </div>
                  <div className="text-[16px] font-normal text-[#626262]">
                    Ads Title 2
                  </div>
                  <div className="text-[16px] font-normal text-[#626262]">
                    Ads Title 3
                  </div>
                </div>
                {/* left side */}
                <div>
                  <div className="text-[16px] font-normal text-black">
                    $4,000.00
                  </div>
                  <div className="text-[16px] font-normal text-black">
                    $4,000.00
                  </div>
                  <div className="text-[16px] font-normal text-black">
                    $4,000.00
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-300 p-5 flex flex-row justify-between align-top items-start  rounded-b-lg">
                {/* left side */}
                <div>
                  <div className="text-[16px] font-semibold text-black">
                    Total
                  </div>
                </div>
                {/* left side */}
                <div>
                  <div className="text-[16px] font-semibold text-black">
                    $12,000.00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden my-4">
            <Button
              text="Download PDF"
              className="text-white w-full h-[56px] rounded-[15px] text-[16px] font-[600] mb-2"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
