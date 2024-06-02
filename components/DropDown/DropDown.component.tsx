"use client";
import React, { useState } from "react";
import Image from "next/image";
import DropDownIcon from "@/public/assets/icon-expand-arrow.svg";

type DropDownItem = {
  text: string;
  href: string;
};

export type DropDownProps = {
  title: string;
  menuOpen : boolean;
  className : string
  items: DropDownItem[];
};

export const DropDown: React.FC<DropDownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 px-3 text-gray-600 text-md"
      >
        {title}
        <Image
          src={DropDownIcon}
          alt="My Company Logo"
          width={24}
          height={24}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 font-normal bg-white rounded-lg shadow w-44 border border-slate-200 text-md">
          <ul className="py-1">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-600 hover:text-white"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};