"use client";
import React, { useState } from "react";
import DashoardHeader from "../DashboardHeader";
import NotificationAlert from "@/components/NotificationAlert";
import PaymentCard from "@/components/PaymentCard";


export const ViewAdsPage: React.FC = () => {
  return (
    <>
      <div className="">
        <div>
          <DashoardHeader heading="Dashboard" />
        </div>
        <div className="flex items-center flex-col justify-center mt-10 mb-4 rounded  dark:bg-gray-800">      
          <div className="lg:w-[101%] w-full lg:px-2 md:px-10 px-3 flex flex-col gap-y-12">
            <NotificationAlert
              text=" Your card on file has been declined. Please update your payment method
              or retry the payment manually."
              className="bg-brand-primary rounded-md"
              buttonText="Retry Payment"
            />
          </div>         
        </div>
      </div>
    </>
  );
};
