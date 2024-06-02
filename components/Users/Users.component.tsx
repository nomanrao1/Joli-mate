"use client";
import React, { useState } from "react";
import DashoardHeader from "../DashboardHeader";
import NotificationAlert from "@/components/NotificationAlert";
import Image from "next/image";
import block from "../../public/assets/block.png";
export const Users: React.FC = () => {
  const [CardViews, setCardViews] = useState(true);
  const [AddViews, setAddViews] = useState(false);

  function PreviewAdFunc() {
    setCardViews(false);
    setAddViews(true);
  }
  return (
    <>
      {CardViews && (
        <div className="mr-[20px]">
          <div>
            <DashoardHeader heading="Users" />
          </div>
          <div className="w-full h-auto bg-white mt-[22px] rounded-[8px] border-[1px] border-solid border-[#000000 10%]">
            <table className="w-full">
              <thead className="">
                <tr className="border-b h-[60px] border-[#000000 10%] w-full">
                  <th className="text-[#677489] text-left pl-[20px] text-[14px] font-[500]">
                    ACCOUNT
                  </th>
                  <th className="text-[#677489] text-left text-[14px] font-[500]">
                    GENDER
                  </th>
                  <th className="text-[#677489] text-left text-[14px] font-[500]">
                    COUNTRY
                  </th>
                  <th className="text-[#677489] text-left text-[14px] font-[500]">
                    JOINED
                  </th>
                  <th className="text-[#677489] text-left text-[14px] font-[500]">
                    REPORT
                  </th>
                  <th className="text-[#677489] text-right pr-[20px] text-[14px] font-[500]">
                    ACTION
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
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    Cyprus
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    15 June 2020
                  </td>
                  <td className="text-[#323755] text-[16px] text-left font-[500]">10</td>
                  <td className="text-[#323755]  text-[16px] font-[500] flex gap-1 py-4 items-center pr-[20px] justify-end">
                  <Image
                      src={block}
                      width={16.67}
                      height={16.67}
                      className=""
                      alt="Block"
                    />
                    Block
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
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    15 June 2020
                  </td>
                  <td className="text-[#323755] text-[16px] text-left font-[500]">10</td>
                  <td className="text-[#323755] text-[16px] font-[500] flex  gap-1 py-4 items-center pr-[20px] justify-end">
                    <Image
                      src={block}
                      width={16.67}
                      height={16.67}
                      alt="Block"
                    />
                    Block
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
