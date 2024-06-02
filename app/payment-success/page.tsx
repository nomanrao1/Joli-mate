"use client";
import React, { useState } from "react"; // Import useState if you need to manage state
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { InputFieldSet } from "@/components/InputFieldSet";
import type { NextPage } from "next";
import Head from "next/head";
import Button from "@/components/Button";
import ImageCard from "@/components/ImageCard";
import Image from "next/image";
import topUpImg from "@/public/assets/topup.png";
import TopUpForm from "@/components/TopUpForm";
import { useRouter } from "next/navigation";
import Thumb from "@/public/assets/thumb.png";

type FormData = {
  [key: string]: string;
};

const PaymentSuccess: NextPage = () => {
  const router = useRouter();

  const openHome = () => {
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>JoliMate - Chat, Date, Make Friends</title>
      </Head>

      <Navbar />

      <section className="bg-white dark:bg-gray-900 w-full h-[420px] md:h-[500px] lg:h-[500px]">
        <div className="w-full h-full flex flex-row justify-center items-center align-middle px-1 md:px-28">
          <div className="w-full h-full md:w-full lg:w-1/2 mb-4 md:px-8 lg:px-8 flex justify-center align-start">
            <div className="bg-[#F0F0F0] p-6 rounded-[20px] w-[331px] md:w-[591px] lg:w-[591px] h-[300px] md:h-[372px] lg:h-[372px] m-4">
              {/* Modal content */}
              <div className="w-[50px] md:w-[100px] lg:w-[100px] h-[50px] md:h-[100px] lg:h-[100px] rounded-[50%] bg-white m-auto flex justify-center items-center">
                <Image src={Thumb} width={42} height={42} alt="thumbnail" className="py-3" />
              </div>
              <h1 className="font-[600] text-[22px] md:text-[26px] lg:text-[26px] leading-[34px] text-center py-3">
                Payment Successful
              </h1>
              <p className="text-[14px] text-center px-36">Your wallet has been credited on the mobile app</p>
              {/* <button onClick={closeModal}>Close Modal</button> */}
              <div className=" w-full m-auto flex justify-center py-[20px]">
                <Button
                  text="Home"
                  className=" bg-purple-600 text-white font-bold text-md rounded-lg  w-[243px] h-[56px] m-auto"
                  onClick={openHome}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PaymentSuccess;
