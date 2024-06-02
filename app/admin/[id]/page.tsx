"use client";
import React, { useEffect, useState } from "react";
import IconImg from "@/components/IconImg";
import currentAds from "@/public/assets/checkadd.svg";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Users from "@/components/Users";
import VerifyUsers from "@/components/VerifyUser";
import Payout from "@/components/Payout";
import AdsReview from "@/components/AdsReview";
import CompanyDocs from "@/components/CompanyDocs";
import Employee from "@/components/Employee";
import Transaction from "@/components/Transaction";

interface MenuItem {
  title: string;
  imageUrl: string;
  URL: string;
}

const AdminDashboardLayout: NextPage = () => {
  const router = useRouter();
  // Wrap your component with useClient()
  const menuItems: MenuItem[] = [
    { title: "Users", URL: "/admin/user-management", imageUrl: currentAds },
    { title: "Verify users", URL: "/admin/verify-user", imageUrl: currentAds },
    { title: "Payout", URL: "/admin/payout", imageUrl: currentAds },
    { title: "Ads Review", URL: "/admin/ads-review", imageUrl: currentAds },
    { title: "Company Docs", URL: "/admin/company-docs", imageUrl: currentAds },
    { title: "Employee", URL: "/admin/employee", imageUrl: currentAds },
    { title: "Transaction", URL: "/admin/transaction", imageUrl: currentAds },
  ];

  const mobileMenuItems: MenuItem[] = [
    { title: "Users", URL: "/admin/user-management", imageUrl: currentAds },
    { title: "Verify users", URL: "/admin/verify-user", imageUrl: currentAds },
    { title: "Payout", URL: "/admin/payout", imageUrl: currentAds },
    { title: "Ads Review", URL: "/admin/ads-review", imageUrl: currentAds },
    { title: "Company Docs", URL: "/admin/company-docs", imageUrl: currentAds },
    { title: "Employee", URL: "/admin/employee", imageUrl: currentAds },
    { title: "Transaction", URL: "/admin/transaction", imageUrl: currentAds },
  ];

  // Now you can use useState safely in your component
  const [selectedItem, setSelectedItem] = useState<string>("/ads/dashboard");
  console.log("selectedItem", selectedItem);
  // const [Pathname, setPathname] = useState<string>("");

  // Function to handle item click
  const handleItemClick = (URL: string) => {
    setSelectedItem(URL);
    router.push(URL);
  };

  useEffect(() => {
    setSelectedItem(window.location.pathname);
  }, []);

  return (
    <div className="">
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
              <ul className="flex flex-col gap-y-2  w-[200px]">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleItemClick(item.URL)}
                      className={`px-4 py-3 rounded-sm  w-full flex gap-3 items-center ${
                        selectedItem === item.URL
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

      <div className=" py-4 px-2 sm:ml-64">
        {selectedItem === "/admin/user-management" && <Users />}
        {selectedItem === "/admin/verify-user" && <VerifyUsers />}
        {selectedItem === "/admin/payout" && <Payout />}
        {selectedItem === "/admin/ads-review" && <AdsReview />}
        {selectedItem === "/admin/company-docs" && <CompanyDocs />}
        {selectedItem === "/admin/employee" && <Employee />}
        {selectedItem === "/admin/transaction" && <Transaction />}
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
                  onClick={() => handleItemClick(item.URL)}
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

export default AdminDashboardLayout;
