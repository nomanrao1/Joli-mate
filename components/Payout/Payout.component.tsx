"use client";
import React, { useState } from "react";
import DashoardHeader from "../DashboardHeader";
import { IoCheckmarkOutline } from "react-icons/io5";
export const Payout: React.FC = () => {
  const [isApprChecked, setIsApprChecked] = useState(false);
  const [isAppChecked, setIsAppChecked] = useState(false);
  const [CardViews, setCardViews] = useState(true);
  const handleCheckApprChange = () => {
    setIsApprChecked(!isApprChecked);
  };
  const handleCheckAppChange = () => {
    setIsAppChecked(!isAppChecked);
  };

  
  return (
    <>
      {CardViews && (
        <div className="mr-[20px]">
          <div>
            <DashoardHeader heading="Payout" />
          </div>
          <div className="w-full mt-4 h-auto bg-whitemt-[22px] rounded-[8px] border-[1px] border-solid border-[#000000 10%]">
            <table className="w-full p-0">
              <thead className="">
                <tr className="border-b h-[60px] border-[#000000 10%] w-full">
                  <th className="text-[#677489] text-left pl-[20px] w-1/5 text-[14px] font-[500] uppercase">
                    account
                  </th>
                  <th className="text-[#677489] text-left text-[14px] w-1/5 font-[500] uppercase">
                    balance
                  </th>
                  <th className="text-[#677489]  text-left w-1/5 text-[14px] font-[500] uppercase">
                    payment method
                  </th>
                  <th className="text-[#677489] text-left text-[14px] w-1/5 font-[500] uppercase">
                    payment request
                  </th>
                  <th className="text-[#677489] text-center  w-1/5 text-[14px] font-[500] uppercase">
                    action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="text-center border-b h-[60px] border-[#000000 10%] w-full">
                  <td className="text-[#323755] text-left pl-[20px] text-[16px] font-[500]">
                    +9053331024
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    Male
                  </td>
                  <td className="text-[#323755]  text-left text-[16px] font-[500]">
                    Cyprus
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    15 June 2020
                  </td>
                  <td className="text-[#323755]   text-[16px] font-[500] flex  py-4 items-center justify-end pr-[20px]">
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
                          {isAppChecked && (
                            <IoCheckmarkOutline />
                          )}
                        </label>
                      </div>
                      Approve
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody className="text-center">
                <tr className="text-center border-b h-[60px] border-[#000000 10%] w-full">
                  <td className="text-[#323755] text-left pl-[20px] text-[16px] font-[500]">
                    +9053331024
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    Male
                  </td>
                  <td className="text-[#323755]  text-left text-[16px] font-[500]">
                    Cyprus
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    15 June 2020
                  </td>
                  <td className="text-[#323755] text-[16px] font-[500] flex gap-1 py-4 items-center justify-end pr-[20px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="relative w-6 h-6">
                        <input
                          type="checkbox"
                          name="status"
                          id="status"
                          className="absolute opacity-0 w-full h-full"
                          onChange={handleCheckApprChange}
                        />

                        <label
                          htmlFor="status"
                          className="w-full h-full flex justify-center items-center rounded-full border-2 border-black cursor-pointer bg-white"
                        >
                          {isApprChecked && (
                            <IoCheckmarkOutline />
                          )}
                        </label>
                      </div>
                      Approve
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
