import Image from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";

export type PayCardProps = {
  title: string;
  status: string;
  adsReach: string;
  adsSpend: string;
  adsImpression: string;
  adsClick: string;
  duration: string;
  cardClassName: string;
  statusClassName: string;
  dotClassName: string;
  visibilityClassName: string;
};

export const PayCard: React.FC<PayCardProps> = ({
  title,
  status,
  adsReach,
  adsSpend,
  adsImpression,
  adsClick,
  duration,
  cardClassName,
  visibilityClassName,
  statusClassName,
  dotClassName,
}) => {
  return (
    <div
      className={`flex flex-col  gap-y-6 lg:w-full  lg:h-[279px] sm:h-[279px] rounded-md py-6  border shadow-lg  ${cardClassName}`}    >
      <div className="flex justify-between px-6">
        <div
          className={`text-sm  flex gap-x-2 items-center justify-center bg-purple-200 px-3 py-1 rounded-md ${statusClassName}`}
        >
          <div
            className={`w-[8px] h-[8px]  rounded-full ${dotClassName}`}
          ></div>
          <span> {status}</span>
        </div>
      </div>

      <div className="flex justify-between  flex-wrap gap-y-6 px-8">
        <div className="fex flex-col gap-1  border-l-[3px] border-l-red-dark px-2">
          <p className="text-sm text-textcolor-disabled">ADS REACH</p>
          <p className="text-md font-semibold">{adsReach}</p>
        </div>
        <div className="fex flex-col gap-1  border-l-[3px] border-l-yellow-medium px-2 pr-8">
          <p className="text-sm text-textcolor-disabled">ADS SPEND</p>
          <p className="text-md font-semibold"> {adsSpend}</p>
        </div>
        <div className="fex flex-col gap-1  border-l-[3px] border-l-brand-primary px-2 pr-8">
          <p className="text-sm text-textcolor-disabled">Ads IMPRESSION</p>
          <p className="text-md font-semibold">{adsImpression}</p>
        </div>
        <div className="fex flex-col gap-1  border-l-[3px] border-l-red-medium px-2 pr-9">
          <p className="text-sm text-textcolor-disabled">ADS CLICK</p>
          <p className="text-md font-semibold">{adsClick}</p>
        </div>
        <div className="fex flex-col gap-1  border-l-[3px] border-l-red-medium px-2 pr-[255px]">
          <p className="text-sm text-textcolor-disabled">DURATION</p>
          <p className="text-md font-semibold">{duration}</p>
        </div>
      </div>

      <div
        className={`flex flex-col border-t-1  gap-4  ${visibilityClassName}`}
      >
      </div>
    </div>
  );
};
