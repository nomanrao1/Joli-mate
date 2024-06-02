"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";

const SignUp: NextPage = () => {
  const router = useRouter();
  const openModal = () => {
    router.push("otp");
  };
  return (
    <>
      <div className="sm:block lg:md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:lg:block">
        <Header />
      </div>

      <>
        <div className="p-6 w-full bg-[#F4FAFC]  lg:h-[780px] md:h-[780px] ">
          <div className="md:w-full p-4 lg:w-[457px] sm:w-[457px]  h-[750px] border-[1px] bg-white border-[#D9D9D9] rounded-[20px] mx-auto lg:h-[740px]">
            <h1 className="text-[28px] font-[600] leading-[28px] text-[#232323] text-center mt-[30px]">
              Sign Up
            </h1>
            <Input />
            <div className="flex justify-center ">
              <Button
                text="Sign Up"
                className=" bg-purple-600 text-white font-bold text-md rounded-lg  w-[390px] h-[56px] md:w-full lg:w-[390px]"
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
};

export default SignUp;
