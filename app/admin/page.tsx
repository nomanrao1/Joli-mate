"use client";
import Button from "@/components/Button";
import { InputFieldSet } from "@/components/InputFieldSet";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import { useState } from "react";
const AdminLogin: NextPage = () => {
  const router = useRouter();
  const [accessCodeValue, setAccessCodeValue] = useState('');
  const [accessKeyValue, setAccessKeyValue] = useState('');
  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccessCodeValue(e.target.value);
  };
  const handleKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccessKeyValue(e.target.value);
  };
  const handleLogin = () => {
    router.push("admin/verify")

  }
  return (
    <>
      <div className="w-full h-[100vh] bg-[#F4FAFC] flex items-center justify-center p-3">
        <div className="w-[571px] h-[385x] bg-white rounded-[15px] p-[36px]">
          <h1 className="text-[#232323] text-[32px] leading-[32px] font-[600] pb-[32px]">
            Admin Access
          </h1>
          <InputFieldSet
            id="accessCode"
            label="Access Code"
            value={accessCodeValue} 
            onChange={handleCode}
            placeholder="ehfd454"
            className="text-[#232323] font-[600] text-[14px] leading-[18.2px]"
          />

          <InputFieldSet
            id="accessCode"
            label="Access Key"
            value={accessKeyValue} 
            onChange={handleKey} 
            placeholder="48795678943"
            className="text-[#232323] font-[600] text-[14px] leading-[18.2px]"
          />
          <Button 
          text="Login" 
          className="w-full h-[53px] rounded-[15px] mt-3 text-white text-[16px] font-[600] leading-[16px]"
          onClick={handleLogin}
          
          />
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
