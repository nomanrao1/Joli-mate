"use client";
import Button from "@/components/Button";
import { InputFieldSet } from "@/components/InputFieldSet";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import { useState } from "react";
const AdminLogin: NextPage = () => {
  const router = useRouter();
  const [accessTokenValue, setAccessTokenValue] = useState('');
  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccessTokenValue(e.target.value);
  };
  const handleVerify = () => {
    router.push('dashboard')
    console.log("")
  }
  return (
    <>
      <div className="w-full h-[100vh] bg-[#F4FAFC] flex items-center justify-center p-3">
        <div className="w-[571px] h-[287px] bg-white rounded-[15px] p-[36px]">
          <h1 className="text-[#232323] text-[32px] leading-[32px] font-[500] pb-[32px]">
            Admin Access
          </h1>
          <InputFieldSet
            id="accessCode"
            label="Enter Token"
            value={accessTokenValue} 
            onChange={handleCode}
            placeholder="JM - 011 - ZRM"
            className="text-[#232323] font-[600] text-[14px] leading-[18.2px]"
          />
          <Button 
          text="Verify" 
          className="w-full h-[53px] rounded-[15px] mt-3 text-white text-[16px] font-[600] leading-[16px]"
          onClick={handleVerify}
          
          />
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
