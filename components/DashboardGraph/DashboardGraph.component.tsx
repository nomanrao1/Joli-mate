import React, { useState } from "react";
import Graph from "@/components/Graph";
import { ApexOptions } from "apexcharts";

export type DashboardGraphProps = {
  tabs: { id: number; label: string }[];
};

export const DashboardGraph: React.FC<DashboardGraphProps> = ({ tabs }) => {
  const options: ApexOptions = {
    series: [
      {
        name: "Desktops",
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
    chart: {
      height: 350,
      type: "line", // Explicitly set the type as 'line'
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: ["red"], // Change to an array with a single string
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Corrected the property name to 'categories'
    },
  };
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <>
      <div className="flex w-full gap-3 lg:bg-white items-center p-2 rounded-[6px] lg:border-[1px] lg:border-[#000000 20%] overflow-x-auto overflow-y-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 lg:w-[271px] h-[50px] rounded-[6px]  whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "lg:bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="w-full h-[381px] my-3 border-[1px] rounded-[10px] border-[$00000] p-3">
        <Graph options={options} />
      </div>
    </>
  );
};
