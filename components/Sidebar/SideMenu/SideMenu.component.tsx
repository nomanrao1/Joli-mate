import Link from "next/link";
import React, { useState } from "react";
import IconImg from "@/components/IconImg";
import currentAds from "@/public/assets/checkadd.svg";
import newAdds from "@/public/assets/addNewAdd.svg";
import companyInfo from "@/public/assets/company.svg";
import Document from "@/public/assets/document.svg";
import Invoices from "@/public/assets/invoice.svg";

interface MenuItem {
  title: string;
  imageUrl: string;
}

export const SideMenu: React.FC = () => {
  const menuItems: MenuItem[] = [
    { title: "Current Ads", imageUrl: currentAds },
    { title: "Ad New Ads", imageUrl: newAdds },
    { title: "Company Info", imageUrl: companyInfo },
    { title: "Document", imageUrl: Document },
    { title: "Invoice", imageUrl: Invoices },
  ];

  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <nav className="flex flex-col items-center">
      <ul className="flex flex-col gap-y-6  w-[200px]">
        {menuItems.map((item, index) => (
          <li key={index} className="text-md  ">
            <Link
              href="#"
              passHref
              className={`px-4 py-3 rounded-sm  w-full flex gap-3 items-center ${
                selectedItem === index
                  ? "bg-brand-primary text-white"
                  : "bg-none text-textcolor-secondary"
              }`}
              onClick={() => handleItemClick(index)}
            >
              <IconImg
                title={item.title}
                imageUrl={item.imageUrl}
                className="w-[14px] h-[14px]"
              />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
