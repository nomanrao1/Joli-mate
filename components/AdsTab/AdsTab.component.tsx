import React, { useState } from "react";

interface Tab {
  label: string;
  value: string;
}

export const AdsTab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("adsReach");

  const tabs: Tab[] = [
    { label: "Ads Reach", value: "adsReach" },
    { label: "Ads Impression", value: "adsImpression" },
    { label: "Ads Spend", value: "adsSpend" },
    { label: "Ads Click", value: "adsClick" },
  ];

  const handleTabClick = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="flex w-full border rounded-md border-gray-200 p-2">
      <ul className="flex justify-between items-center w-full">
        {tabs.map((tab) => (
          <li
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={`text-md w-[271px] text-center py-2 rounded-md cursor-pointer  ${
              selectedTab === tab.value
                ? "bg-brand-primary text-white"
                : "text-textcolor-secondary hover:bg-purple-100"
            }`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
