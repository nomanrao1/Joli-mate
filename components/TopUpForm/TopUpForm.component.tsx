import React, { useState } from "react";
import selectedIcon from "@/public/assets/selected.png";
import unSelectedIcon from "@/public/assets/unselected.png";
import VisaIcon from "@/public/assets/Visa.png";
import PayPalIcon from "@/public/assets/paypal.png";
import PayPalTwoIcon from "@/public/assets/paypalTwo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const TopUpForm: React.FC = () => {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState("visa"); // Set initial selected card
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleCardSelect = (cardType: string) => {
    setSelectedCard(cardType); // Set selected card when clicked
  };

  const OpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const OpenModalTwo = () => {
    setIsModalOpen(false);
    router.push("payment-success");
  };

  return (
    <div className="mb-5">
      <div className="my-2">
        <label
          htmlFor="mobile-number"
          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Enter the Mobile Number
        </label>
        <div className="flex flex-row justify-start">
          <div className="w-[25%] md:w-[15%] lg:w-[15%] px-1">
            <input
              type="tel"
              className="block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+92"
              onChange={() => {
                console.log("working");
              }}
            />
          </div>
          <div className="w-[75%] md:w-[85%] lg:w-[85%] px-1">
            <input
              type="tel"
              className="block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="88 77 44 2148"
              onChange={() => {
                console.log("working");
              }}
            />
          </div>
        </div>
      </div>

      <div className="my-2">
        <label
          htmlFor="mobile-number"
          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          User name
        </label>
        <div className="px-1">
          <input
            type="text"
            className="block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Alex Halley"
            onChange={() => {
              console.log("working");
            }}
          />
        </div>
      </div>

      <div className="my-2">
        <label
          htmlFor="mobile-number"
          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Enter the Amount
        </label>
        <div className="relative px-1">
          <span className="absolute left-5 top-2.5 font-semibold text-gray-900 dark:text-white">
            £
          </span>
          <input
            type="text"
            className="block w-full pl-10 pr-2.5 h-[45px] text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="100"
            onChange={() => {
              console.log("working");
            }}
          />
        </div>
      </div>

      <div className="my-2">
        <label
          htmlFor="mobile-number"
          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Payment method
        </label>
        <div className="flex flex-col md:flex-row lg:flex-row justify-start">
          {/* selected card */}
          <div
            className={`my-1 w-full md:w-[49%] lg:w-[49%] mx-1 border-2 py-3 rounded-md ${
              selectedCard === "visa" ? "border-black" : "border-gray"
            }`}
            onClick={() => handleCardSelect("visa")}
          >
            <div className="flex flex-row justify-start items-start px-3">
              <div className="w-[15%] px-1 py-2">
                <Image
                  src={selectedCard === "visa" ? selectedIcon : unSelectedIcon}
                  width={15}
                  height={15}
                  alt="selected"
                />
              </div>
              <div className="w-[55%] px-1">
                <div>**** 8304</div>
                <div className="flex flex-row justify-between">
                  <div className="text-[#677489]">Delete</div>
                  <div className="m-2 h-2 w-2 items-center bg-[#677489] rounded-xl"></div>
                  <div className="text-[#677489]">Edit</div>
                </div>
              </div>
              <div className="w-[30%] px-1">
                <Image src={VisaIcon} width={60} height={60} alt="selected" />
              </div>
            </div>
          </div>

          {/* un-selected card */}
          <div
            className={`my-1 w-full md:w-[49%] lg:w-[49%] mx-1 border-2 py-3 rounded-md border-gray ${
              selectedCard === "paypal" ? "border-black" : "border-gray"
            }`}
            onClick={() => handleCardSelect("paypal")}
          >
            <div className="flex flex-row justify-start items-start px-3">
              <div className="w-[15%] px-1 py-2">
                <Image
                  src={
                    selectedCard === "paypal" ? selectedIcon : unSelectedIcon
                  }
                  width={15}
                  height={15}
                  alt="selected"
                />
              </div>
              <div className="w-[55%] px-1">
                <div>**** 8304</div>
                <div className="flex flex-row justify-between">
                  <div className="text-[#677489]">Delete</div>
                  <div className="m-2 h-2 w-2 items-center bg-[#677489] rounded-xl"></div>
                  <div className="text-[#677489]">Edit</div>
                </div>
              </div>
              <div className="w-[30%] px-1">
                <Image src={PayPalIcon} width={60} height={60} alt="selected" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-2">
        <div className="md:px-1 lg:px-1">
          <button
            data-modal-target="static-modal"
            onClick={OpenModal}
            className="w-full p-5 border-2 border-dotted border-[#677489] rounded-md text-center text-[#677489] cursor-pointer"
            type="button"
          >
            + Add New
          </button>

          {/* modal codes */}
          {isModalOpen && (
            <div
              id="static-modal"
              data-modal-backdrop="static"
              tabIndex={-1}
              aria-hidden="true"
              className="bg-black bg-opacity-60 overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:inset-0"
            >
              <div className="relative p-4 w-[541px] max-w-2xl max-h-full flex flex-row justify-center">
                {/* Modal content */}
                <div className="p-6 w-[330px] h-full md:w-full lg:w-full relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* Modal header */}
                  <div className="flex items-center justify-between rounded-t dark:border-gray-600">
                    <h3 className="text-[26px] font-semibold text-gray-900 dark:text-white">
                      Payment method
                    </h3>
                  </div>
                  {/* Modal body */}
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
                        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
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
                  {/* Modal footer */}
                  <div className="py-2 md:py-3 lg:py-3 flex flex-col md:flex-row lg:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 lg:w-1/2 md:mr-2 lg:mr-2 mr-0 mb-2">
                      <button
                        onClick={closeModal}
                        className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-[15px]"
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2 md:ml-2 lg:ml-2 ml-0 mb-2">
                      <button
                        onClick={OpenModalTwo}
                        className="block bg-[#9747FF] w-full px-3 py-2 text-white border border-white-300 rounded-[15px]"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
