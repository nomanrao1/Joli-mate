"use client";
import React, { useState } from "react";
import DashoardHeader from "../DashboardHeader";
import NotificationAlert from "@/components/NotificationAlert";
import PayCard from "../PayCard";
import ImageSlider from "../Slider";
import DashboardGraph from "../DashboardGraph";
const paymentCardsData = [
  {
    title: "Job Ads / 11/03/2024",
    status: "Running",
    adsReach: "50k",
    adsSpend: "£ 100",
    adsImpression: "50k",
    adsClick: "500 K",
    duration: "7th - 15th June",
    visibilityClassName: "",
    cardClassName: "",
    statusClassName: "text-textcolor-primary",
    dotClassName: "bg-brand-primary",
  },
  {
    title: "Job Ads / 11/03/2024",
    status: "Running",
    adsReach: "50k",
    adsSpend: "£ 100",
    adsImpression: "50k",
    adsClick: "500 K",
    duration: "7th - 15th June",
    visibilityClassName: "",
    cardClassName: "",
    statusClassName: "text-textcolor-primary",
    dotClassName: "bg-brand-primary",
  },
  {
    title: "Job Ads / 11/03/2024",
    status: "Running",
    adsReach: "50k",
    adsSpend: "£ 100",
    adsImpression: "50k",
    adsClick: "500 K",
    duration: "7th - 15th June",
    visibilityClassName: "",
    cardClassName: "",
    statusClassName: "text-textcolor-primary",
    dotClassName: "bg-brand-primary",
  },
  {
    title: "Job Ads / 11/03/2024",
    status: "Running",
    adsReach: "50k",
    adsSpend: "£ 100",
    adsImpression: "50k",
    adsClick: "500 K",
    duration: "7th - 15th June",
    visibilityClassName: "",
    cardClassName: "",
    statusClassName: "text-textcolor-primary",
    dotClassName: "bg-brand-primary",
  },
];
export const CurrentAds: React.FC = () => {
  const [CardViews, setCardViews] = useState(true);
  const [AddViews, setAddViews] = useState(false);

  function PreviewAdFunc() {
    setCardViews(false);
    setAddViews(true);
  }

  const tabsData = [
    { id: 1, label: "Ads Reach" },
    { id: 2, label: "Ads Impression" },
    { id: 3, label: "Ads Spend" },
    { id: 4, label: "Add Click" },
  ];

  const payCardsData = [
    {
      title: "Job Ads / 11/03/2024",
      status: "Running",
      adsReach: "50k",
      adsSpend: "£ 100",
      adsImpression: "50k",
      adsClick: "500 K",
      duration: "7th - 15th June",
      visibilityClassName: "",
      cardClassName: "",
      statusClassName: "text-textcolor-primary",
      dotClassName: "bg-brand-primary",
    },
  ];

  const images = [
    {
      src: "/assets/a.jpeg",
      alt: "Message Preview",
      label: "Message Preview",
      description: "Description of the first image",
    },
    {
      src: "/assets/a.jpeg",
      alt: "Message Preview",
      label: "Second slide label",
      description: "Description of the second image",
    },
    {
      src: "/assets/a.jpeg",
      alt: "Message Preview",
      label: "Third slide label",
      description: "Description of the third image",
    },
  ];

  return (
    <>
      {CardViews && (
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
          <div className="flex flex-start gap-3 flex-wrap">
            {paymentCardsData.map((data, index) => (
              <div
                key={index}
                className={`flex flex-col  gap-y-6 lg:w-[400px] h-[auto] rounded-md py-6  border shadow-lg  ${data.cardClassName}`}
              >
                <div className="flex justify-between px-6">
                  <div
                    className={`flex gap-x-2 items-center ${data.visibilityClassName}`}
                  >
                    <div className="w-[23px] h-[24px] border-2 border-gray-300 rounded-full"></div>
                    <h2
                      className={
                        "text-md font-semibold text-textcolor-secondary"
                      }
                    >
                      {data.title}
                    </h2>
                  </div>
                  <div
                    className={`text-sm  flex gap-x-2 items-center justify-center bg-purple-200 px-3 py-1 rounded-md ${data.statusClassName}`}
                  >
                    <div
                      className={`w-[8px] h-[8px]  rounded-full ${data.dotClassName}`}
                    ></div>
                    <span> {data.status}</span>
                  </div>
                </div>

                <div className="flex justify-between  flex-wrap gap-y-6 px-8">
                  <div className="fex flex-col gap-1  border-l-[3px] border-l-red-dark px-2">
                    <p className="text-sm text-textcolor-disabled">ADS REACH</p>
                    <p className="text-md font-semibold">{data.adsReach}</p>
                  </div>
                  <div className="fex flex-col gap-1  border-l-[3px] border-l-yellow-medium px-2 pr-8">
                    <p className="text-sm text-textcolor-disabled">ADS SPEND</p>
                    <p className="text-md font-semibold"> {data.adsSpend}</p>
                  </div>
                  <div className="fex flex-col gap-1  border-l-[3px] border-l-brand-primary px-2 pr-8">
                    <p className="text-sm text-textcolor-disabled">
                      Ads IMPRESSION
                    </p>
                    <p className="text-md font-semibold">
                      {data.adsImpression}
                    </p>
                  </div>
                  <div className="fex flex-col gap-1  border-l-[3px] border-l-red-medium px-2 pr-9">
                    <p className="text-sm text-textcolor-disabled">ADS CLICK</p>
                    <p className="text-md font-semibold">{data.adsClick}</p>
                  </div>
                  <div className="fex flex-col gap-1  border-l-[3px] border-l-red-medium px-2 pr-9">
                    <p className="text-sm text-textcolor-disabled">DURATION</p>
                    <p className="text-md font-semibold">{data.duration}</p>
                  </div>
                </div>

                <div
                  className={`flex flex-col border-t-1  gap-4  ${data.visibilityClassName}`}
                >
                  <hr />
                  <div className="flex justify-between px-6 text-textcolor-disabled ">
                    <div
                      className="text-sm cursor-pointer"
                      onClick={PreviewAdFunc}
                    >
                      Preview Ads
                    </div>
                    <div className="text-sm">Pause Ads</div>
                    <div className="text-sm font-semibold text-textcolor-action">
                      Edit Ads
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {AddViews && (
        <div>
          <div>
            <DashoardHeader heading="Job Ads / 11/03/2024" />
          </div>

          <div className="w-full">
            <DashboardGraph tabs={tabsData} />
          </div>

          <div className="flex flex-col md:flex-row justify-between align-start items-start mt-10">
            <div className="w-full md:w-1/2 mr-1">
              {payCardsData.map((data, index) => (
                <PayCard key={index} {...data} />
              ))}
            </div>
            <div className="w-full md:w-1/2 ml-1">
              <div className="border-[1px] border-[#000000 %10] rounded-[10px] ">
                <ImageSlider images={images} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
