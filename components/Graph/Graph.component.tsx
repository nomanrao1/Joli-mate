import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
// import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";

export type GraphProps = {
  options: ApexOptions;
};

export const Graph: React.FC<GraphProps> = ({ options }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div id="chart">
      {isClient && options.chart && (
        <ReactApexChart
          options={options}
          series={options.series}
          type="line"
          height={options.chart.height}
        />
      )}
    </div>
  );
};

export default Graph;
