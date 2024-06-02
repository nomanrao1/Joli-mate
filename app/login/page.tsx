"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Input from "@/components/Input";

import Navbar from "@/components/Navbar";

import type { NextPage } from "next";
import Head from "next/head";

const SignUp: NextPage = () => {
  return (
    <>
      <Navbar />
      <>
        <div className="w-[457px] h-auto border-[1px] border-[#D9D9D9] rounded-[20px] m-auto mt-[30px] mb-[30px] pb-[30px]">
          <h1 className="text-[28px] font-[600] leading-[28px] text-[#232323] text-center mt-[30px]">
            Sign Up
          </h1>
          <Input />
        </div>
      </>

      <Footer />
    </>
  );
};

export default SignUp;
