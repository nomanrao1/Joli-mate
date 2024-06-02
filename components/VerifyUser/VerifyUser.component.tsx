"use client";
import React, { useState } from "react";
import DashoardHeader from "../DashboardHeader";
import Image from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";
import tableImg from "../../public/assets/girl.jpeg";
export const VerifyUsers: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isApprovedChecked, setIsApprovedChecked] = useState(false);
  const [isApproveChecked, setIsApproveChecked] = useState(false);
  const [isRejChecked, setIsRejChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckAppChange = () => {
    setIsApprovedChecked(!isApprovedChecked);
  };
  const handleCheckApprovedChange = () => {
    setIsApproveChecked(!isApproveChecked);
  };
  const handleCheckRejChange = () => {
    setIsRejChecked(!isRejChecked);
  };
  const [CardViews, setCardViews] = useState(true);
  return (
    <>
      {CardViews && (
        <div className="mr-[20px]">
          <div>
            <DashoardHeader heading="Verify Users" />
          </div>
          <div className=" h-auto  mt-[22px] rounded-[8px] border-[1px] border-solid border-[#000000 10%]">
            <table className="w-full ">
              <thead className="">
                <tr className="border-b h-[60px] border-[#000000 10%] text-left">
                  <th className="text-[#677489] w-1/5 pl-[20px] text-[14px] font-[500]">
                    ACCOUNT
                  </th>
                  <th className="text-[#677489]  w-1/8 text-[14px] font-[500]">
                    GENDER
                  </th>
                  <th className="text-[#677489] pl-[60px] text-left  text-[14px] font-[500]">
                    VERIFICATION IMAGE
                  </th>
                  <th className="text-[#677489] text-[14px] w-1/6 text-left font-[500]">
                    PROFILE IMAGES
                  </th>
                  <th className="text-[#677489]  text-left w-1/6  text-[14px] font-[500]  ">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="p-0">
                <tr className="border-b h-[60px] border-[#000000 10%] w-full text-left">
                  <td className="text-[#323755] pl-[20px] text-[16px] font-[500]">
                    +9053331024
                  </td>
                  <td className="text-[#323755] text-[16px] font-[500]">
                    Male
                  </td>
                  <td className="text-[#323755] text-[16px] font-[500]">
                    <div className=" flex justify-left  pl-[60px]">
                      <Image
                        src={tableImg}
                        className="w-[30px] h-[30px] rounded-[4px]"
                        alt="Block"
                      />
                    </div>
                  </td>
                  <td className="text-[#323755] text-[16px] font-[500]">
                    <div className=" flex justify-left gap-5">
                      <Image
                        src={tableImg}
                        className="w-[30px] h-[30px] rounded-[4px]"
                        alt="Block"
                      />
                      <Image
                        src={tableImg}
                        className="w-[30px] h-[30px] rounded-[4px]"
                        alt="Block"
                      />
                      <Image
                        src={tableImg}
                        className="w-[30px] h-[30px] rounded-[4px]"
                        alt="Block"
                      />
                    </div>
                  </td>
                  <div className=" flex justify-end items-center gap-[12px] pr-[20px]">
                    <td className="text-[#323755]  text-[16px] font-[500]">
                      <div className="flex items-center gap-[8px]">
                        <div className="relative w-6 h-6">
                          <input
                            type="checkbox"
                            name="status"
                            id="status"
                            className="absolute opacity-0 w-full h-full"
                            onChange={handleCheckboxChange}
                          />

                          <label
                            htmlFor="status"
                            className="w-full h-full flex justify-center items-center rounded-full border-2 border-black cursor-pointer bg-white"
                          >
                            {isChecked && (
                            <IoCheckmarkOutline />
                            )}
                          </label>
                        </div>
                        Reject
                      </div>
                    </td>

                    <td className="text-[#323755] text-[16px] font-[500] flex gap-1 py-4 items-center justify-center">
                      <div className=" flex items-center gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                          <div className="relative w-6 h-6">
                            <input
                              type="checkbox"
                              name="status"
                              id="status"
                              className="absolute opacity-0 w-full h-full"
                              onChange={handleCheckAppChange}
                            />

                            <label
                              htmlFor="status"
                              className="w-full h-full flex justify-center items-center rounded-full border-2 border-black cursor-pointer bg-white"
                            >
                              {isApprovedChecked && (
                              <IoCheckmarkOutline />
                              )}
                            </label>
                          </div>
                          Approve
                        </div>
                      </div>
                    </td>
                  </div>
                </tr>
              </tbody>
              <tbody className="">
                <tr className="border-b h-[60px] border-[#000000 10%] w-full">
                  <td className="text-[#323755] pl-[20px] text-[16px] font-[500]">
                    +9053331024
                  </td>
                  <td className="text-[#323755] text-[16px] font-[500]">
                    Male
                  </td>
                  <td className="text-[#323755] text-[16px] font-[500]">
                    <div className=" flex justify-left pl-[60px] pr-[120px]">
                      <Image
                        src={tableImg}
                        className="w-[30px] h-[30px] rounded-[4px]"
                        alt="Block"
                      />
                    </div>
                  </td>
                  <td className="text-[#323755] text-[16px] font-[500]">
                    <div className=" flex justify-left gap-5">
                      <Image
                        src={tableImg}
                        className="w-[30px] h-[30px] rounded-[4px]"
                        alt="Block"
                      />
                      <Image
                        src={tableImg}
                        className="w-[30px] h-[30px] rounded-[4px]"
                        alt="Block"
                      />
                      <Image
                        src={tableImg}
                        className="w-[30px] h-[30px] rounded-[4px]"
                        alt="Block"
                      />
                    </div>
                  </td>
                  <div className="flex justify-end items-center gap-[12px] pr-[20px]">
                    <td className="text-[#323755] text-[16px] font-[500]">
                      <div className="flex items-center gap-[8px]">
                        <div className="relative w-6 h-6">
                          <input
                            type="checkbox"
                            name="status"
                            id="status"
                            className="absolute opacity-0 w-full h-full"
                            onChange={handleCheckRejChange}
                          />

                          <label
                            htmlFor="status"
                            className="w-full h-full flex justify-center items-center rounded-full border-2 border-black cursor-pointer bg-white"
                          >
                            {isRejChecked && (
                             <IoCheckmarkOutline />
                            )}
                          </label>
                        </div>
                        Reject
                      </div>
                    </td> 
                    <td className="text-[#323755] text-[16px] font-[500] flex  gap-1 py-4 items-center justify-center">
                      <div className="flex items-center gap-[8px]">
                        <div className="relative w-6 h-6">
                          <input
                            type="checkbox"
                            name="status"
                            id="status"
                            className="absolute opacity-0 w-full h-full"
                            onChange={handleCheckApprovedChange}
                          />

                          <label
                            htmlFor="status"
                            className="w-full h-full flex justify-center items-center rounded-full border-2 border-black cursor-pointer bg-white"
                          >
                            {isApproveChecked && (
                              <IoCheckmarkOutline />
                            )}
                          </label>
                        </div>
                        Approve
                      </div>
                    </td>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
