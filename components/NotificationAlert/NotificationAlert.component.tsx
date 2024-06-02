import Image from "next/image";
import React from "react";
import Button from "../Button";

export type NotificationAlertProps = {
  text: string;
  className: string;
  buttonText: string;
};

export const NotificationAlert: React.FC<NotificationAlertProps> = ({
  text,
  className,
  buttonText,
}) => {
  return (
    <div
      className={`p-2 border w-[100%] flex justify-between items-center  ${className}`}
    >
      <div className="w-[100%]">
        <p className="text-md text-white lg:text-[16px] text-[12px] leading-[18px] lg:leading-[16px] md:leading-[16px] md:text-[12px]">
          {text}
        </p>
      </div>
      
        <Button
          text={buttonText}
          className="w-[15%] text-textcolor-warning font-semibold hover:bg-transparent focus:ring-0"
          onClick={() => {
            console.log("clicked");
          }}
        />
      
    </div>
  );
};
