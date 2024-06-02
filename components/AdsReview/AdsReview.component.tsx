"use client";
import React, { useState } from "react";
import Image from "next/image";
import picture from "../../public/assets/girl.jpeg";
import cross from '../../public/assets/cross.png'
import DashoardHeader from "../DashboardHeader";
import { InputFieldSet } from "../InputFieldSet";
export const AdsReview: React.FC = () => {
  const [CardViews, setCardViews] = useState(true);
  const [AddReviews, setAddViews] = useState(false);

  function PreviewAdFunc() {
    setCardViews(false);
    setAddViews(true);
  }
  function crossHandler() {
    setCardViews(true);
    setAddViews(false)
  }
  const [isAppChecked, setIsAppChecked] = useState(false);
  const AddsReviewData = () => {
    console.log("");
  };
  const handleCheckAppChange = () => {
    setIsAppChecked(!isAppChecked);
  };
  return (
    <>
      {CardViews && (
        <div className="mr-[20px]">
          <div>
            <DashoardHeader heading="Ads Review" />
          </div>
          <div className="w-full mt-4 h-auto bg-whitemt-[22px] rounded-[8px] border-[1px] border-solid border-[#000000 10%]">
            <table className="w-full p-0">
              <thead className="">
                <tr className="border-b h-[60px] border-[#000000 10%] w-full">
                  <th className="text-[#677489] pl-[20px]  text-left text-[14px] w-1/4 font-[500]">
                    ADS-ID
                  </th>
                  <th className="text-[#677489] text-left text-[14px] w-1/4 font-[500]">
                    STATUS
                  </th>
                  <th className="text-[#677489] text-left text-[14px] w-1/4 font-[500]">
                    STATUS
                  </th>
                  <th className="text-[#677489] text-left text-[14px] w-1/4 font-[500]">
                    STATUS
                  </th>
                  <th className="text-[#677489] text-right pr-[30px]  text-[14px] w-1/4 font-[500]">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="text-center border-b h-[60px] border-[#000000 10%] w-full">
                  <td className="text-[#323755] pl-[20px] text-left text-[16px] w-1/5 font-[500]">
                    +9053331024
                  </td>
                  <td className="text-left text-[14px] w-1/5 text-[#FA628E]  font-[500]">
                    <span
                      onClick={PreviewAdFunc}
                      className=" bg-[#FA628E]  bg-opacity-10 rounded-[8px] px-[20px] py-[10px] rounded-2"
                    >
                      Review
                    </span>
                  </td>
                  <td className="text-[#323755] text-left text-[16px] w-1/5 font-[500]">
                    Approve
                  </td>
                  <td className="text-[#323755] text-left text-[16px] w-1/5 font-[500]">
                    Cancel
                  </td>
                  <td className="text-[#323755] text-right pr-[20px] text-[16px] w-1/5 font-[500]">
                    Suspend
                  </td>
                </tr>
              </tbody>
              <tbody className="text-center">
                <tr className="text-center border-b h-[60px] border-[#000000 10%] w-full">
                  <td className="text-[#323755] pl-[20px] text-left text-[16px] w-1/5 font-[500]">
                    +9053331024
                  </td>
                  <td className="text-left text-[14px] w-1/5 text-[#FA628E]  font-[500]">
                    <span onClick={PreviewAdFunc} className=" bg-[#FA628E]  bg-opacity-10 rounded-[8px] px-[20px] py-[10px] rounded-2">
                      Review
                    </span>
                  </td>
                  <td className="text-[#323755] text-left text-[16px] w-1/5 font-[500]">
                    Approve
                  </td>
                  <td className="text-[#323755] text-left text-[16px] w-1/5 font-[500]">
                    Cancel
                  </td>
                  <td className="text-[#323755] text-right  pr-[20px] text-[16px] w-1/5 font-[500]">
                    Suspend
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {AddReviews && (
        <div className="mr-[20px]">
          <div>
            <DashoardHeader heading="Admin Dashboard" />
          </div>
          <div className="w-full mt-4 p-[30px] rounded-[8px] h-auto border-[1px] border-[#000000 10%]">
            <div className="flex  justify-between">
              <h1>ADS - 1 - 001</h1>
              <span>
              <Image
                src={cross}
                className="w-[17.56px] h-[17.56px] rounded-[4px]"
                alt="Tick"
                onClick={crossHandler}
              />
              </span>
            </div>
            <p className="pt-[32px] text-[14px] font-[500] text-[#677489]">
              DETAILS
            </p>
            <p className="pt-[32px]">Ads Image</p>
            <div className="w-full  gap-[16px]  h-auto flex items-center mt-[24px]">
              <Image
                src={picture}
                className="w-[100px] h-[100px] rounded-[4px]"
                alt="Tick"
              />
              <Image
                src={picture}
                className="w-[100px] h-[100px] rounded-[4px]"
                alt="Tick"
              />
              <Image
                src={picture}
                className="w-[100px] h-[100px] rounded-[4px]"
                alt="Tick"
              />
            </div>
            <div className="w-1/4 ">
              <div className="mt-[32px]">
                <label htmlFor="">Ads Content</label>
                <textarea
                  className="mt-[12px] w-[507px] h-[100px] border border-gray-300 rounded-md p-2"
                  placeholder="Fly with Eliminate Airlines"
                ></textarea>
              </div>
            </div>
            <p className="pt-[16px] text-[#323755] text-[16px] font-[500]">
              Ads Duration
            </p>
            <p className="pt-[16px] text-[#232323] text-[16px] font-[600]">
              11 June 2023 - 30 June 2023
            </p>
          </div>
        </div>
      )}
    </>
  );
};
