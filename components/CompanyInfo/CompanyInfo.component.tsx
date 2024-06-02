"use client";
import DashoardHeader from "@/components/DashboardHeader";
import { InputFieldSet } from "@/components/InputFieldSet";
import { useState } from "react";
import Button from "@/components/Button";
export const CompanyInfo: React.FC = () => {
  const [companyNameValue, setCompanyNameValue] = useState("");
  const handleCompanyNameChange = () => {
    console.log("Button is clicked");
  };
  const handleClick = () => {
    console.log("Button is clicked");
  };
  return (
    <>
      <div className="w-full h-[100vh]">
        <div>
          <DashoardHeader heading="Company Info" />
        </div>

        <div className="flex flex-col align-middle items-center my-5">
          <div className="w-full md:w-1/2 border-2 border-gray-300 p-5 rounded-lg">
            <div className="w-full">
              <InputFieldSet
                id="companyName"
                label="Company Name"
                placeholder="Glaxy Weblinks"
                value={companyNameValue}
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className="w-full">
              <InputFieldSet
                id="ContactName"
                label="Contact name"
                placeholder="Glaxy Weblinks"
                value={companyNameValue}
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className="w-full">
              <InputFieldSet
                id="CompanyWebsite"
                label="Company website"
                placeholder="Glaxy Weblinks"
                value={companyNameValue}
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className="w-full">
              <InputFieldSet
                id="CompanyAddress"
                label="Company address"
                placeholder="Glaxy Weblinks"
                value={companyNameValue}
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className="w-full">
              <InputFieldSet
                id="ContactEsmail"
                label="Contact email"
                placeholder="Alex Halley2132@gmail.com"
                value={companyNameValue}
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className="w-full">
              <InputFieldSet
                id="PhoneNumber"
                label="Phone number"
                placeholder="Alex Halley2132@gmail.com"
                value={companyNameValue}
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className="w-full">
              <InputFieldSet
                id="Country"
                label="Country"
                placeholder="Alex Halley2132@gmail.com"
                value={companyNameValue}
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className="w-full">
              <InputFieldSet
                id="Currency"
                label="Currency"
                placeholder="Alex Halley2132@gmail.com"
                value={companyNameValue}
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className="w-full flex flex-row justify-end items-end">
              <Button
                text="Edit"
                onClick={handleClick}
                className="text-white w-full md:w-[152px] rounded-[15px] text-[16px] font-[600] mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
