import React from "react";
import Button from "../Button";

export type InputProps = {
    placeholder?: string,
    className?: string;
};

export const Input: React.FC<InputProps> = ({ placeholder ,className }) => {
  return (
    <>
    
<form className="md:w-full mx-auto lg:max-w-sm  mt-[30px]">
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company name</label>
      <input type="text" id="large-input" className="w-full h-[45px] p-4 text-[#232323] font-[600] border border-gray-300 rounded-[6px] bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Galaxy Weblinks"/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact name</label>
      <input type="text" id="base-input" className="h-[45px] bg-gray-50 border border-gray-300 text-[#232323] font-[600] text-sm rounded-[6px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alex Halley"/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Website</label>
      <input type="text" id="base-input" className="h-[45px] bg-gray-50 border border-gray-300 text-[#232323] font-[600] text-sm rounded-[6px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alex Halley"/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company address</label>
      <input type="text" id="large-input" className="block w-full h-[45px] p-4 text-[#232323] font-[600] border border-gray-300 rounded-[6px] bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5-4658 Barter Street."/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact email</label>
      <input type="email" id="large-input" className="block w-full h-[45px] p-4 text-[#232323] font-[600] border border-gray-300 rounded-[6px] bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alex Halley2132@gmail.com"/>
  </div>
  <div className="mb-5">
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
      <input type="text" id="large-input" className="block w-full h-[45px] p-4 text-[#232323] font-[600] border border-gray-300 rounded-[6px] bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="90031845751"/>
  </div>
  
</form>
</>
  );
};
