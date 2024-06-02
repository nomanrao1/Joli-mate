"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import image from "../../public/assets/pic1.png";
import dot from "../../public/assets/commas.png";
import Button from "@/components/Button";
const AdsSpace: NextPage = () => {
  const router = useRouter();
  const SignForm = () => {
    console.log("Clicked");
    router.push("signup");
  };

  return (
    <>
      
      <Navbar />
      <main className="w-full m-auto flex justify-center lg:px-20  px-4">
        <div className="lg:w-[90%] flex flex-col lg:flex-row md:flex-col justify-between lg:items-center md:items-center  ">
          <div className="flex flex-col  w-[100%] mb-[50px] ">
            <div className="lg:flex lg:w-[100%] w-full  mt-[40px]">
              <span className="lg:block md:flex flex justify-center items-center mb-[16px]">
                <Image
                  src={dot}
                  width={72}
                  height={72}
                  className="mt-[15px] pr-[24.36px]"
                  alt="dot"
                />
              </span>
              <h1 className="sm:w-full lg:h-auto lg:text-left text-center font-[700] lg:text-[64px] md:text-[64px] text-[24px] lg:eading-[84px] md:leading-[84px] leading-[34px]">
                Harness the power of Jolimate's user base to engage with your
                target audience and grow your business.
              </h1>
            </div>
            <div className="flex gap-3 lg:ml-[70px]   mt-[30px] mb-[30px] lg:justify-start flex-wrap">
              <Button
                onClick={() => {
                  console.log("working");
                }}
                text="Login"
                className=" bg-purple-600 text-white font-bold text-md rounded-lg  lg:w-[243px] w-[100%] h-[56px]"
              />
              <Button
                text="Signup"
                className="bg-white text-black font-bold text-md rounded-lg lg:w-[243px] w-[100%]  h-[56px] border-[1px] border-[#D9D9D9] hover:bg-white hover:text-black"
                onClick={SignForm}
              />
            </div>
          </div>
          <div className="lg:w-[45%] md:w-[45%]  flex items-center justify-center pb-[30px] mb-[40px] lg:mt-[65px]">
            <div className="w-full flex lg:justify-end sm:visible ">
              <Image src={image} width={404} height={536} alt="image" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AdsSpace;
