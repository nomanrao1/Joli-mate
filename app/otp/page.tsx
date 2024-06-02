"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Thumb from "../../public/assets/thumb.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import Head from "next/head";

const Otp: NextPage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openDashboard = () => {
    router.push("ads-space/dashboard");
  };
  return (
    <>
      <div className="w-full h-auto ">
      <div className="sm:block lg:md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:lg:block">
        <Header />
      </div>
        <>
        <div className="p-4 lg:h-full md:h-[548px]  bg-[#F4FAFC] lg:py-[100px] flex py-[54px]">
          <div className="mx-auto w-full sm:w-auto  sm:max-w-[500px] md:w-[70%] lg:w-[50%]  sm:h-auto md:h-[316px] lg:h-[316px]  flex justify-center">
            <div className=" w-full sm:w-full  md:h-full lg:h-[350px] h-[316px] rounded-[12px] border-[1px] border-[#0000001A 10%] bg-white p-6">
              <h1 className="text-center font-[600] text-[28px] leading-[28px] mt-[16px] text-[#222222]">
                OTP
              </h1>
              <div className=" w-full">
                <p className="text-center font-[400] text-[16px] leading-[20px] text-[#222222] mt-[16px]">
                  Let’s verify your company email, enter the OTP sent to
                  sopport@amazon.com
                </p>
              </div>
              <div className="w-full md-w-full lg:w-full lg:h-[45px] md:h-[45px] h-[30px]  mt-[16px] ">
                <form className=" flex lg:gap-[19px] gap-[5px]  justify-center">
                  <div className="mb-5">
                    <input
                      type="text"
                      id="large-input"
                      className="lg:w-[52px] lg:h-[45px] md:w-[50px] md:h-[40px] w-[47.5px] h-[39px] text-center text-[20px] font-[600] text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="text"
                      id="large-input"
                      className="lg:w-[52px] lg:h-[45px] md:w-[50px] md:h-[40px] w-[47.5px] h-[39px] text-center text-[20px] font-[600] text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="text"
                      id="large-input"
                      className="lg:w-[52px] lg:h-[45px] md:w-[50px] md:h-[40px] w-[47.5px] h-[39px] text-center text-[20px] font-[600] text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="text"
                      id="large-input"
                      className="lg:w-[52px] lg:h-[45px] md:w-[50px] md:h-[40px] w-[47.5px] h-[39px] text-center text-[20px] font-[600] text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="text"
                      id="large-input"
                      className="lg:w-[52px] lg:h-[45px] md:w-[50px] md:h-[40px] w-[47.5px] h-[39px] text-center text-[20px] font-[600] text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="text"
                      id="large-input"
                      className="lg:w-[52px] lg:h-[45px] md:w-[50px] md:h-[40px] w-[47.5px] h-[39px] text-center text-[20px] font-[600] text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </form>
              </div>
              <span className="flex justify-end mt-[16px] text-[#009CDE] text-[14px] leading-[18.2px] font-[600] lg:pr-[20px] md:pr-[20px] pr-[0px] ">
                RESEND OTP
              </span>
              <Button
                text="Verify"
                className=" bg-purple-600 text-white font-bold text-md rounded-[15px]  w-full h-[56px] mt-[16px]"
                onClick={openModal}
              />
            </div>
          </div>
          </div>
        </>
      </div>
      <Footer />
      {showModal && (
        <div
          className="fixed inset-0 lg:bg-black lg:bg-opacity-50 flex justify-center lg:items-center md:items-center mt-[100px] lg:mt-0 md-mt-0"
          onClick={closeModal}
        >
          <div className="bg-[#F0F0F0] p-6 rounded-[20px] w-[591px] h-[372px] m-4">
            {/* Modal content */}
            <div className="w-[100px] h-[100px] rounded-[50%] bg-[#E8E8E8] m-auto flex justify-center items-center mt-[22px]">
              <Image src={Thumb} width={42} height={42} alt="thumbnail" />
            </div>
            <p className="font-[600] text-[26px] leading-[34px] text-center mt-[24px]">
              Ad space created
              <br /> successfully
            </p>
            {/* <button onClick={closeModal}>Close Modal</button> */}
            <div className=" w-full m-auto flex justify-center py-[20px]">
              <Button
                text="Dashboard"
                className=" bg-purple-600 text-white font-bold text-md rounded-lg  w-[243px] h-[56px] m-auto"
                onClick={openDashboard}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Otp;
