"use client";
import React, { useState } from "react";
import DashoardHeader from "../DashboardHeader";
export const Transaction: React.FC = () => {
  const [CardViews, setCardViews] = useState(true);
  const [AddViews, setAddViews] = useState(false);
  return (
    <>
      {CardViews && (
        <div className="mr-[20px]">
          <div>
            <DashoardHeader heading="Transactions" />
          </div>
          <div className="w-full mt-4 h-auto bg-whitemt-[22px] rounded-[8px] border-[1px] border-solid border-[#000000 10%]">
            <table className="w-full p-0">
              <thead className="">
                <tr className="border-b h-[60px] border-[#000000 10%] w-full">
                  <th className="text-[#677489] text-left pl-[20px] w-1/4 text-[14px] font-[500]">
                    ACCOUNT
                  </th>
                  <th className="text-[#677489] text-left  w-1/4 text-[14px] font-[500]">
                    PAYMENT
                  </th>
                  <th className="text-[#677489] text-left  w-1/4 text-[14px] font-[500]">
                    TRANSACTION ID
                  </th>
                  <th className="text-[#677489]    w-1/8 text-[14px] font-[500]">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="text-center border-b h-[60px] border-[#000000 10%] w-full">
                  <td className="text-[#323755] pl-[20px] text-left text-[16px] font-[500]">
                    +9053331024
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    Male
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    Cyprus
                  </td>
                  <td className="text-[#323755]  text-center text-[16px] font-[500]">
                   Failed
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
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    Cyprus
                  </td>
                  <td className="text-[#323755] text-center pl-[30px] text-[16px] font-[500]">
                  Successful
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
