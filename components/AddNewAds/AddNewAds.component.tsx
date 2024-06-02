"use client";
import DashoardHeader from "@/components/DashboardHeader";
import image from "../../public/assets/new-add.png";
import Image from "next/image";
import { useState } from "react";
import { InputFieldSet } from "../InputFieldSet";
import Button from "../Button";
import NewAddOne from "@/public/assets/NewAddOne.png";
import uploadedImg from "@/public/assets/uploadedImg.png";
import selectedIcon from "@/public/assets/selected.png";
import unSelectedIcon from "@/public/assets/unselected.png";
import VisaIcon from "@/public/assets/Visa.png";
import PayPalIcon from "@/public/assets/paypal.png";
import PayPalTwoIcon from "@/public/assets/paypalTwo.png";

export const AddNewAds: React.FC = () => {
  const [showAddRecordButton, setShowAddRecordButton] = useState(true);
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [showCompaignDetail, setShowCompaignDetail] = useState(false);
  const [showAudience, setShowAudience] = useState(false);
  const [showPlacementFiles, setShowPlacementFiles] = useState(false);
  const [showSelectPayment, setShowSelectPayment] = useState(false);

  const [selectedCard, setSelectedCard] = useState("visa"); // Set initial selected card
  const [PaymentDetailShow, setPaymentDetailShow] = useState(true); // Set initial selected card
  const [PaymentMethodShow, setPaymentMethodShow] = useState(false); // Set initial selected card

  const addnewRecord = () => {
    setShowAddRecordButton(false);
    setShowAddRecord(true);
    setShowCompaignDetail(true);
  };

  // compain states and function
  const [companyNameValue, setCompanyNameValue] = useState("");
  const handleCompanyNameChange = () => {
    console.log("Button is clicked");
  };
  const ShowAudienceFunc = () => {
    setShowCompaignDetail(false);
    setShowAudience(true);
  };
  // compain states and function

  // target audience states and function
  const ShowPlacementFilesFunc = () => {
    setShowAudience(false);
    setShowPlacementFiles(true);
  };
  // target audience and function

  // SelectPayment states and function
  const ShowSelectPayment = () => {
    console.log("working");
    setShowPlacementFiles(false);
    setShowSelectPayment(true);
  };
  const handleCardSelect = (cardType: string) => {
    setSelectedCard(cardType); // Set selected card when clicked
  };

  function OpenPaymentMethod() {
    setPaymentDetailShow(false);
    setPaymentMethodShow(true);
  }

  function ClosePaymentMethod() {
    setPaymentDetailShow(true);
    setPaymentMethodShow(false);
  }
  // SelectPayment and function

  const handleClick = () => {
    console.log("Button is clicked");
  };

  return (
    <>
      <div className="w-full h-[100vh]">
        {showAddRecordButton && (
          <>
            <div>
              <DashoardHeader heading="Add New Ads" />
            </div>
            <div className="flex items-center justify-center  mb-4 rounded ">
              <main className="lg:w-[100%] w-full lg:px-2 md:px-10 px-5 flex flex-col gap-y-12 ">
                <div className="lg:block md:block hidden sm:hidden">
                  <button
                    className="lg:w-full text-[16px] font-[500] h-16 border border-dashed border-[#C4C4C4] rounded-[15px] outline-none text-center bg-[#F4F4F4] hover:none"
                    onClick={addnewRecord}
                  >
                    + Add to Record
                  </button>
                </div>
                <div className="w-[100%] h-[300px]  p-3 flex justify-center flex-col gap-6 items-center lg:hidden md:hidden sm:block">
                  <div className="w-[120px] h-[120px] rounded-[50%] border-[1px]  border-[#000000 10%] flex justify-center items-center ">
                    <Image
                      src={image}
                      style={{ width: "50px", height: "50px" }}
                      alt="image"
                    />
                  </div>
                  <button
                    onClick={addnewRecord}
                    className="w-full h-16 border border-dashed border-[#9747FF] rounded-[15px] outline-none text-center placeholder-opacity-100 cursor-pointer placeholder-[#9747FF]  bg-[#9747FF] bg-opacity-10 text-[#9747FF]"
                  >
                    + Create New Adds
                  </button>
                </div>
              </main>
            </div>
          </>
        )}
        {showAddRecord && (
          <>
            <div>
              <DashoardHeader heading="Campaign Name" />
            </div>
            {/* showCompaignDetail here */}
            {showCompaignDetail && (
              <>
                <div className="w-full h-auto px-2">
                  <div className="w-full md:w-1/2 mr-1">
                    <InputFieldSet
                      id="companyName"
                      label="Company Name"
                      placeholder="Glaxy Weblinks"
                      value={companyNameValue}
                      onChange={handleCompanyNameChange}
                      className="w-full"
                    />
                  </div>

                  <p className="text-[16px] font-[600] text[#222222] mb-3 lg:hidden md:hidden sm:block">
                    Compaign Details-----------------------------
                  </p>
                  <p className="text-16 font-semibold text-222222 mb-3 hidden lg:block md:block sm:hidden">
                    Compaign
                    Details------------------------------------------------------------------------------------------------------------------------------------------------
                  </p>
                  <div className="flex flex-col md:flex-row justify-start align-start items-start">
                    <div className="w-full md:w-1/2 mr-1 mb-5">
                      <label
                        htmlFor="campaignObjectives"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        Campaign Objectives
                      </label>
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="flex justify-between items-center align-middle w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        type="button"
                      >
                        <div>Brand Awareness</div>
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
                              Brand Awareness
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Settings
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 ml-1">
                      <InputFieldSet
                        id="companyName"
                        label="Where should we direct your users to?"
                        placeholder="Glaxy Weblinks"
                        value={companyNameValue}
                        onChange={handleCompanyNameChange}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 mr-1">
                    <InputFieldSet
                      id="companyName"
                      label="Call to Action"
                      placeholder="Glaxy Weblinks"
                      value={companyNameValue}
                      onChange={handleCompanyNameChange}
                      className="w-full"
                    />
                  </div>

                  <p className="text-[16px] font-[600] text[#222222] mb-3 lg:hidden md:hidden sm:block">
                    Compaign Details-----------------------------
                  </p>
                  <p className="text-16 font-semibold text-222222 mb-3 hidden lg:block md:block sm:hidden">
                    Compaign
                    Details------------------------------------------------------------------------------------------------------------------------------------------------
                  </p>

                  <div className="flex flex-col md:flex-row justify-start align-start items-start">
                    <div className="w-full md:w-1/2 mr-1">
                      <label
                        htmlFor="campaignObjectives"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        Start Date
                      </label>
                      <input
                        type="text"
                        id="startdate"
                        className={`block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="10 June, 2023"
                        value="10 June, 2023"
                      />
                    </div>
                    <div className="w-full md:w-1/2 ml-1">
                      <label
                        htmlFor="campaignObjectives"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        End Date
                      </label>
                      <input
                        type="text"
                        id="startdate"
                        className={`block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="10 June, 2023"
                        value="10 June, 2023"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between align-middle items-center">
                    <div className="w-full md:w-1/2 mr-1">
                      <InputFieldSet
                        id="companyName"
                        label="Daily Ads Spend"
                        placeholder="€"
                        value={companyNameValue}
                        onChange={handleCompanyNameChange}
                        className="w-full"
                      />
                    </div>
                    <div className="w-full md:w-1/2 ml-1">
                      <InputFieldSet
                        id="companyName"
                        label="Max Daily Threshold"
                        placeholder="€"
                        value={companyNameValue}
                        onChange={handleCompanyNameChange}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[100%] flex justify-end  px-2">
                  <Button
                    text="Save & Continue"
                    className="text-white w-[440px] rounded-[15px] text-[16px] font-[600] lg:mt-[30px] mb-2"
                    onClick={ShowAudienceFunc}
                  />
                </div>
              </>
            )}
            {showAudience && (
              <>
                <div className="w-full h-auto px-2">
                  <p className="text-[16px] font-[600] text[#222222] mb-3 lg:hidden md:hidden sm:block">
                    Target Audience-----------------------------
                  </p>
                  <p className="text-16 font-semibold text-222222 mb-3 hidden lg:block md:block sm:hidden">
                    Target
                    Audience------------------------------------------------------------------------------------------------------------------------------------------------
                  </p>
                  <div className="flex flex-col md:flex-row justify-start align-start items-start">
                    <div className="w-full md:w-1/2 mr-1 mb-5">
                      <label
                        htmlFor="Age"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        Age
                      </label>
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="flex justify-between items-center align-middle w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        type="button"
                      >
                        <div>Select Your Age</div>
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
                              18 to 54+
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              18 to 44+
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              18 to 24+
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 ml-1">
                      <label
                        htmlFor="Gender"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        Gender
                      </label>
                      <div className="flex flex-row justify-between items-start align-top">
                        <button className=" h-[45px] p-2.5 text-white w-[125px] md:w-[190px] rounded-[15px] text-[16px] font-[500] mb-2 bg-purple-600 text-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                          All
                        </button>
                        <button className=" h-[45px] p-2.5 text-black w-[125px] md:w-[190px] rounded-[15px] text-[16px] font-[500] mb-2 bg-white text-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 border-2 border-gray-300">
                          Male
                        </button>
                        <button className=" h-[45px] p-2.5 text-black w-[125px] md:w-[190px] rounded-[15px] text-[16px] font-[500] mb-2 bg-white text-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 border-2 border-gray-300">
                          Female
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between align-middle items-center">
                    <div className="w-full md:w-1/2 mr-1 mb-5">
                      <label
                        htmlFor="Age"
                        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                      >
                        Age
                      </label>
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="flex justify-between items-center align-middle w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        type="button"
                      >
                        <div>Select Location</div>
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
                    <div className="w-full md:w-1/2 ml-1">
                      <InputFieldSet
                        id="locationshow"
                        label="All locations added will appear heres"
                        placeholder="All locations added will appear here"
                        value="All locations added will appear here"
                        onChange={handleCompanyNameChange}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <p className="text-[16px] font-[600] text[#222222] mb-3 lg:hidden md:hidden sm:block">
                    Expected Result-----------------------------
                  </p>
                  <p className="text-16 font-semibold text-222222 mb-3 hidden lg:block md:block sm:hidden">
                    Expected
                    Result------------------------------------------------------------------------------------------------------------------------------------------------
                  </p>

                  <div className="flex flex-col md:flex-row justify-between align-middle items-center">
                    <div className="w-full md:w-1/2 mr-1">
                      <InputFieldSet
                        id="TargetAudience"
                        label="Target audience size"
                        placeholder="100,000"
                        value="100,000"
                        onChange={handleCompanyNameChange}
                        className="w-full"
                      />
                    </div>
                    <div className="w-full md:w-1/2 ml-1">
                      <InputFieldSet
                        id="DailyClicks"
                        label="Estimated daily clicks"
                        placeholder="1k to 7.7k"
                        value="1k to 7.7k"
                        onChange={handleCompanyNameChange}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[100%] flex justify-end  px-2">
                  <Button
                    text="Save & Continue"
                    className="text-white w-[440px] rounded-[15px] text-[16px] font-[600] lg:mt-[30px] mb-2"
                    onClick={ShowPlacementFilesFunc}
                  />
                </div>
              </>
            )}
            {showPlacementFiles && (
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
                              <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                              />
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
                          onClick={ShowSelectPayment}
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
            )}
            {showSelectPayment && (
              <>
                <div className="w-full h-full flex flex-row justify-center items-start align-middle md:justify-center md:items-center md:align-middle">
                  <div className="border-2 border-gray-300 p-3 rounded-lg">
                    <div className="my-2">
                      {PaymentDetailShow && (
                        <>
                          <div>
                            <label
                              htmlFor="mobile-number"
                              className="block mb-2 text-[28px] font-bold text-gray-900 dark:text-white"
                            >
                              Select Payment method
                            </label>
                            <div className="flex flex-col md:flex-row lg:flex-row justify-start">
                              {/* selected card */}
                              <div
                                className={`my-1 w-full md:w-[49%] lg:w-[49%] mx-1 border-2 py-3 rounded-md ${
                                  selectedCard === "visa"
                                    ? "border-black"
                                    : "border-gray"
                                }`}
                                onClick={() => handleCardSelect("visa")}
                              >
                                <div className="flex flex-row justify-start items-start px-3">
                                  <div className="w-[15%] px-1 py-2">
                                    <Image
                                      src={
                                        selectedCard === "visa"
                                          ? selectedIcon
                                          : unSelectedIcon
                                      }
                                      width={15}
                                      height={15}
                                      alt="selected"
                                    />
                                  </div>
                                  <div className="w-[55%] px-1">
                                    <div>**** 8304</div>
                                    <div className="flex flex-row justify-between">
                                      <div className="text-[#677489]">
                                        Delete
                                      </div>
                                      <div className="m-2 h-2 w-2 items-center bg-[#677489] rounded-xl"></div>
                                      <div className="text-[#677489]">Edit</div>
                                    </div>
                                  </div>
                                  <div className="w-[30%] px-1">
                                    <Image
                                      src={VisaIcon}
                                      width={60}
                                      height={60}
                                      alt="selected"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* un-selected card */}
                              <div
                                className={`my-1 w-full md:w-[49%] lg:w-[49%] mx-1 border-2 py-3 rounded-md border-gray ${
                                  selectedCard === "paypal"
                                    ? "border-black"
                                    : "border-gray"
                                }`}
                                onClick={() => handleCardSelect("paypal")}
                              >
                                <div className="flex flex-row justify-start items-start px-3">
                                  <div className="w-[15%] px-1 py-2">
                                    <Image
                                      src={
                                        selectedCard === "paypal"
                                          ? selectedIcon
                                          : unSelectedIcon
                                      }
                                      width={15}
                                      height={15}
                                      alt="selected"
                                    />
                                  </div>
                                  <div className="w-[55%] px-1">
                                    <div>**** 8304</div>
                                    <div className="flex flex-row justify-between">
                                      <div className="text-[#677489]">
                                        Delete
                                      </div>
                                      <div className="m-2 h-2 w-2 items-center bg-[#677489] rounded-xl"></div>
                                      <div className="text-[#677489]">Edit</div>
                                    </div>
                                  </div>
                                  <div className="w-[30%] px-1">
                                    <Image
                                      src={PayPalIcon}
                                      width={60}
                                      height={60}
                                      alt="selected"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="my-3">
                              <button
                                data-modal-target="static-modal"
                                onClick={OpenPaymentMethod}
                                className="w-full p-5 border-2 border-dotted border-[#677489] rounded-md text-center text-[#677489] cursor-pointer"
                                type="button"
                              >
                                + Add New
                              </button>
                            </div>

                            <Button
                              text="Verify Card & Submit"
                              className="text-white w-full rounded-[15px] text-[16px] font-[600] mb-2"
                              onClick={handleClick}
                            />
                          </div>
                        </>
                      )}
                      {PaymentMethodShow && (
                        <>
                          <div>
                            <div className="flex items-center justify-between rounded-t dark:border-gray-600">
                              <h3 className="text-[26px] font-semibold text-gray-900 dark:text-white">
                                Payment method
                              </h3>
                            </div>

                            <div className="">
                              <div className="py-2 md:py-3 lg:py-3">
                                <button
                                  data-modal-target="static-modal"
                                  onClick={() => {
                                    console.log("workking");
                                  }}
                                  className="flex flex-row justify-center w-full p-3 border-2 border-gray-300 rounded-md text-center text-[#677489] cursor-pointer"
                                  type="button"
                                >
                                  <Image src={PayPalTwoIcon} alt="payment" />
                                </button>
                              </div>
                              <div className="py-1">
                                <div className="inline-flex items-center justify-center w-full">
                                  <hr className="w-80 h-[1px] bg-[#F2F2F2] border-0 rounded dark:bg-gray-700" />
                                  <div className="absolute px-4 -translate-x-1/2 bg-white dark:bg-gray-900">
                                    <span className="text-[#636363]">Or</span>
                                  </div>
                                </div>
                              </div>
                              <div className="py-2 md:py-3 lg:py-3">
                                <label
                                  htmlFor="mobile-number"
                                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                >
                                  Card holder name
                                </label>
                                <div className="">
                                  <input
                                    type="text"
                                    className="block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Alex Halley"
                                    onChange={() => {
                                      console.log("working");
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="py-2 md:py-3 lg:py-3">
                                <label
                                  htmlFor="mobile-number"
                                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                >
                                  Card number
                                </label>
                                <div className="">
                                  <input
                                    type="text"
                                    className="block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="2323  3243  2435  055"
                                    onChange={() => {
                                      console.log("working");
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="py-2 md:py-3 lg:py-3 flex items-center justify-between">
                                <div className="mr-2">
                                  <label
                                    htmlFor="mobile-number"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                  >
                                    Expiration
                                  </label>
                                  <div className="">
                                    <input
                                      type="text"
                                      className="block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="12/32"
                                      onChange={() => {
                                        console.log("working");
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="ml-2">
                                  <label
                                    htmlFor="mobile-number"
                                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                  >
                                    CVC
                                  </label>
                                  <div className="">
                                    <input
                                      type="password"
                                      className="block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="***"
                                      onChange={() => {
                                        console.log("working");
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="py-2 md:py-3 lg:py-3">
                                <label
                                  htmlFor="mobile-number"
                                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                                >
                                  Billing Zip code
                                </label>
                                <div className="">
                                  <input
                                    type="text"
                                    className="block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="2367389743"
                                    onChange={() => {
                                      console.log("working");
                                    }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="py-2 md:py-3 lg:py-3 flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between">
                              <div className="w-full md:w-1/2 lg:w-1/2 md:mr-2 lg:mr-2 mr-0 mb-2">
                                <button
                                  onClick={ClosePaymentMethod}
                                  className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-[15px]"
                                >
                                  Cancel
                                </button>
                              </div>
                              <div className="w-full md:w-1/2 lg:w-1/2 md:ml-2 lg:ml-2 ml-0 mb-2">
                                <button
                                  onClick={handleClick}
                                  className="block bg-[#9747FF] w-full px-3 py-2 text-white border border-white-300 rounded-[15px]"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
