"use client";
import React, { useState } from "react";
import IconImg from "@/components/IconImg";
import CurrentAds from "@/components/CurrentAds";
import AddNewAds from "@/components/AddNewAds";
import currentAds from "@/public/assets/checkadd.svg";
import newAdds from "@/public/assets/addNewAdd.svg";
import companyInfo from "@/public/assets/company.svg";
import DocumentIcon from "@/public/assets/document.svg";
import Invoices from "@/public/assets/invoice.svg";
import { NextPage } from "next";
import CompanyInfo from "@/components/CompanyInfo";
import Document from "@/components/Document";
import Invoice from "@/components/Invoice";

interface MenuItem {
  title: string;
  imageUrl: string;
}

const DashboardLayout: NextPage = () => {
  // Wrap your component with useClient()
  const menuItems: MenuItem[] = [
    { title: "Current Ads", imageUrl: currentAds },
    { title: "Add New Ads", imageUrl: newAdds },
    { title: "Company Info", imageUrl: companyInfo },
    { title: "Document", imageUrl: DocumentIcon },
    { title: "Invoice", imageUrl: Invoices },
  ];
  const mobileMenuItems: MenuItem[] = [
    { title: "ADS", imageUrl: currentAds },
    { title: "New ADS", imageUrl: newAdds },
    { title: "INFO", imageUrl: companyInfo },
    { title: "DOCUMENT", imageUrl: DocumentIcon },
    { title: "INVOICE", imageUrl: Invoices },
  ];

  // Now you can use useState safely in your component
  const [selectedItem, setSelectedItem] = useState<number>(0);

  // Function to handle item click
  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div>
          <div className="flex flex-col gap-12 px-8 py-8  w-[240px] h-screen bg-[#F4FAFC] sm:h-[130vh]">
            <h1 className="text-center text-[24px] font-bold text-textcolor-primary">
              Ad Space
            </h1>
            <nav className="flex flex-col items-center ">
              <ul className="flex flex-col gap-y-6  w-[200px]">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleItemClick(index)}
                      className={`px-4 py-3 rounded-sm  w-full flex gap-3 items-center ${
                        selectedItem === index
                          ? "active bg-brand-primary text-white"
                          : "bg-none text-textcolor-secondary"
                      }`}
                    >
                      <IconImg
                        className="w-[14px] h-[14px]"
                        title={item.title}
                        imageUrl={item.imageUrl}
                      />
                      <span>{item.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </aside>

      <div className="py-4 px-2 sm:ml-64">
        {selectedItem === 0 && <CurrentAds />}
        {selectedItem === 1 && <AddNewAds />}
        {selectedItem === 2 && <CompanyInfo />}
        {selectedItem === 3 && <Document />}
        {selectedItem === 4 && <Invoice />}
      </div>

      <div className="sm:block md:hidden lg:hidden bg-[#F4FAFC]  flex py-3 sticky bottom-0">
        <nav className="w-[100%] flex items-center justify-center">
          <ul className="flex gap-[30px]">
            {mobileMenuItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-center hover:text-[#9747FF]"
              >
                <button
                  onClick={() => handleItemClick(index)}
                  className="flex flex-col items-center justify-center"
                >
                  <IconImg
                    className="w-[14px] h-[14px] hover:text-[#9747FF]"
                    title={item.title}
                    imageUrl={item.imageUrl}
                  />
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardLayout;
