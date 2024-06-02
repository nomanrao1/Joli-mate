"use client";
import React, { useState } from "react";
import DashoardHeader from "../DashboardHeader";
import { IoCheckmarkOutline } from "react-icons/io5";
import Button from "../Button";
export const CompanyDocs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
            <DashoardHeader heading="Company Docs" />
          </div>
          <div className="w-full mt-4 h-auto bg-whitemt-[22px] rounded-[8px] border-[1px] border-solid border-[#000000 10%]">
            <table className="w-full p-0">
              <thead className="">
                <tr className="border-b h-[60px] border-[#000000 10%] w-full">
                  <th className="text-[#677489] text-left w-1/4 pl-[20px] text-[14px] font-[500]">
                    COMPANY
                  </th>
                  <th className="text-[#677489] text-[14px] text-left w-1/4 pl-[20px] font-[500]">
                    REQUEST
                  </th>
                  <th className="text-[#677489] text-[14px] text-left w-1/4 pl-[20px] font-[500]">
                    SUBMISSION
                  </th>
                  <th className="text-[#677489] text-left text-[14px]  w-1/6 pl-[20px] font-[500] ">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="text-center border-b h-[60px] border-[#000000 10%] w-full">
                  <td className="text-[#323755] text-left pl-[20px] text-[16px] font-[500]">
                    Emitate Airlines
                  </td>
                  <td className=" text-[14px] text-left text-[#FA628E] font-[500]">
                    <button
                      onClick={openModal}
                      className="rounded-[8px] px-[20px] py-[10px] border-[1px] border-[#000000 10%]"
                    >
                      Send Request
                    </button>
                  </td>
                  <td className="text-[#323755] text-[16px] w-1/4 font-[500]"></td>
                  <div className="flex gap-4 items-center justify-end pr-10">
                    <td className="text-[#323755] text-[16px] font-[500]">
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
              <tbody className="text-center">
                <tr className="text-center border-b h-[60px] border-[#000000 10%] w-full">
                  <td className="text-[#323755] text-left pl-[20px] text-[16px] font-[500]">
                    Emitate
                  </td>
                  <td className=" text-[14px] text-left text-[#FA628E] font-[500]">
                    <button  onClick={openModal} className="rounded-[8px] px-[20px] py-[10px] border-[1px] border-[#000000 10%]">
                      Send Request
                    </button>
                  </td>
                  <td className="text-[#323755] text-[16px] font-[500] w-[500px]"></td>
                  <div className=" flex gap-4 items-center justify-end pr-10">
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
      {isModalOpen && (
        <div onClick={closeModal} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[571px] h-[336px]">
            <h2 className="text-[#232323] text-[26px] leading-[26px] font-[600]">
              Send Request
            </h2>
            <div className="mt-[24px] ">
              <textarea
                className="w-full h-40 border border-gray-300 rounded-md p-2"
                placeholder=""
              ></textarea>
            </div>
            <div className="flex w-full justify-end gap-6 items-center">
              <Button
                text="Cancel"
                className="w-[173px] rounded-[15px] h-[56px] text-[#636363] text-[16px] font-[500] mt-4 bg-white border-[1px] border-[#000000 10%] text-black font-bold py-2 px-4 rounded hover:bg-white"
                onClick={closeModal}
              />
              <Button
                text="Send"
                className="w-[173px] rounded-[15px] text-white h-[56px] mt-4  font-bold py-2 px-4"
                onClick={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
