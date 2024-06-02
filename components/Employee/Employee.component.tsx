"use client";
import React, { useState } from "react";
import DashoardHeader from "../DashboardHeader";
import Button from "../Button";
import { InputFieldSet } from "../InputFieldSet";
export const Employee: React.FC = () => {
  const [CardViews, setCardViews] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const EmployeeData = () => {
    console.log("");
  };
  const handleedit = () => {
    console.log("clicked");
  };
  const handleedelete = () => {
    console.log("clicked");
  };
  const DropDownEmployee = () => {
    console.log("");
  };
  const AddEmployee = () => {
    console.log("");
  };
  return (
    <>
      {CardViews && (
        <div className="mr-[20px]">
          <div>
            <DashoardHeader heading="Employee" />
          </div>
          <div className="w-full mt-4 h-auto bg-whitemt-[22px] rounded-[8px] border-[1px] border-solid border-[#000000 10%]">
            <table className="w-full p-0">
              <thead className="">
                <tr className="border-b  h-[60px] border-[#000000 10%] w-full">
                  <th className="text-[#677489] w-1/4 text-left pl-[20px] text-[14px] font-[500]">
                    EMPLOYEE NAME
                  </th>
                  <th className="text-[#677489] text-left w-1/5 text-[14px] font-[500]">
                    UNIT
                  </th>
                  <th className="text-[#677489] text-left w-1/5 text-[14px] font-[500]">
                    ACCESS CODE
                  </th>
                  <th className="text-[#677489] text-left w-1/5 text-[14px] font-[500]">
                    ACCESS KEY
                  </th>
                  <th className="text-[#677489] text-left w-1/5  text-[14px] font-[500]">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="text-center border-b h-[60px] border-[#000000 10%] w-full">
                  <td className="text-[#323755] w-1/5 text-left pl-[20px] text-[16px] font-[500]">
                    John Doe
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    Verify
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    AC - 1100B1
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    EFI - V2 - 361
                  </td>
                  <td className="text-[#323755] text-[16px] font-[500]">
                    <div className="flex justify-center mr-[20px]">
                      <div className="mr-[20px]">
                        <Button
                          text="Delete"
                          className="hover:bg-white text-center leading-[10px] w-[95px] h-[32px] bg-white border-[1px] border-[#000000 10%] rounded-[8px]"
                          onClick={handleedelete}
                        />
                      </div>
                      <div className="flex gap-6">
                        <Button
                          text="Edit"
                          className="hover:bg-white text-center leading-[10px] w-[80px] h-[32px] bg-white border-[1px] border-[#000000 10%] rounded-[8px]"
                          onClick={openModal}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody className="text-center">
                <tr className="text-center border-b h-[60px] border-[#000000 10%] w-full">
                  <td className="text-[#323755] w-1/5 text-left pl-[20px] text-[16px] font-[500]">
                    Mick Laurry
                  </td>
                  <td className="text-[#323755]  text-left  text-[16px] font-[500]">
                    Payment
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    AC - 120051
                  </td>
                  <td className="text-[#323755] text-left text-[16px] font-[500]">
                    B2 - 36 - 91
                  </td>
                  <td className="text-[#323755]">
                    <div className="flex justify-center mr-[10px] items-center">
                      <div className="mr-[20px]">
                        <Button
                          text="Delete"
                          className="hover:bg-white text-center leading-[10px] w-[95px] h-[32px] bg-white border-[1px] border-[#000000 10%] rounded-[8px]"
                          onClick={handleedit}
                        />
                      </div>
                      <div className="">
                        <Button
                          text="Edit"
                          className="hover:bg-white text-center leading-[10px] w-[80px] h-[32px] bg-white border-[1px] border-[#000000 10%] rounded-[8px]"
                          onClick={openModal}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="w-full mt-[32px]">
        <h1 className="text-[#232323] font-[500] text-[20px] leading-[20px]">
          Add Employee
        </h1>
        <div className="mt-[32px] w-full flex gap-6 items-center ">
          <div className="w-1/4  h-[100px] flex flex-col gap-2">
            <label>Unit</label>
            <select
              value={""}
              onChange={DropDownEmployee}
              className="block h-[47px] w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Unit</option>
              <option value="unit1">Unit 1</option>
              <option value="unit2">Unit 2</option>
              <option value="unit3">Unit 3</option>
            </select>
          </div>
          <div className="w-1/4 ">
            <InputFieldSet
              label="Email"
              placeholder=""
              inputType=""
              value=""
              onChange={EmployeeData}
              className="outline-none"
              id="unitInput"
            />
          </div>
          <div className="w-1/4 ">
            <InputFieldSet
              label="Key"
              placeholder=""
              inputType=""
              value=""
              onChange={EmployeeData}
              className="outline-none"
              id="unitInput"
            />
          </div>
          <div className="w-1/4 ">
            <InputFieldSet
              label="Name"
              placeholder=""
              inputType=""
              value=""
              onChange={EmployeeData}
              className="outline-none"
              id="unitInput"
            />
          </div>
          <div className="w-1/4  flex justify-center items-center pt-3">
            <Button
              text="Add"
              className="w-[120px] h-[45px] rounded-[12px] text-[16px] font-[600] text-white"
              onClick={AddEmployee}
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
        //   onClick={closeModal}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-8 m-4 rounded-lg lg:w-[571px] lg:h-[562px] w-full h-auto">
            <h2 className="text-[#232323] text-[26px] leading-[26px] font-[600]">
              Edit Employee
            </h2>
            <div className="w-full h-auto ">
            <div className="w-full mt-[32px] ">
            <InputFieldSet
              label="Employee Name"
              placeholder="John Doe "
              inputType=""
              value=""
              onChange={EmployeeData}
              className=""
              id="unitInput"
            />
          </div>
          <div className="w-full  h-[100px] flex flex-col gap-2">
            <label>Unit</label>
            <select
              value={""}
              onChange={DropDownEmployee}
              className="block h-[47px] w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Unit</option>
              <option value="unit1">Unit 1</option>
              <option value="unit2">Unit 2</option>
              <option value="unit3">Unit 3</option>
            </select>
          </div>
          <div className="w-full ">
            <InputFieldSet
              label="Access Code"
              placeholder="EFI - V2 - 361"
              inputType=""
              value=""
              onChange={EmployeeData}
              className=""
              id="unitInput"
            />
          </div>
          <div className="w-full ">
            <InputFieldSet
              label="Access Key"
              placeholder="AC - 1100B1"
              inputType=""
              value=""
              onChange={EmployeeData}
              className=""
              id="unitInput"
            />
          </div>
            </div>
            <div className="flex w-full justify-center gap-6 items-center">
              <Button
                text="Cancel"
                className="w-[243px] rounded-[15px] h-[56px] text-[#636363] text-[16px] font-[500] mt-2 bg-white border-[1px] border-[#000000 10%] text-black font-bold py-2 px-4 rounded hover:bg-white"
                onClick={closeModal}
              />
              <Button
                text="Send"
                className="w-[243px] rounded-[15px] text-white h-[56px] mt-2  font-bold py-2 px-4"
                onClick={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
