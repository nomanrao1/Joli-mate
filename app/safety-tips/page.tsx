"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";
import Navbar from "@/components/Navbar";
import ListItem from "@/components/ProfileCreationListItem";
import type { NextPage } from "next";
import Head from "next/head";

const SafetyTips: NextPage = () => {
  const safetyTips = [
    {
      title: "Keep Personal Information Private",
      details: [
        "Avoid sharing your full name, address, phone number, or financial information with anyone on the app.",
        "Use the in-app messaging system to communicate with other users rather than giving out your personal contact information.",
      ],
    },
    {
      title: "Verify Profiles",
      details: [
        "Take time to verify the profiles of other users before engaging in conversations or meetings.",
        "Look for profile verification badges or linked social media accounts to ensure authenticity.",
      ],
    },
    {
      title: "Trust Your Instincts",
      details: [
        "If something feels off or uncomfortable, trust your instincts and consider ending communication or reporting the user to our support team.",
        "Never feel pressured to meet someone in person if you're not comfortable.",
      ],
    },
    {
      title: "Meet in Public Places",
      details: [
        "When meeting someone in person for the first time, choose a public location such as a cafe, restaurant, or park.",
        "Inform a friend or family member about your plans and share your location with them during the meeting.",
      ],
    },
    {
      title: "Stay Sober and Alert",
      details: [
        "Avoid excessive alcohol or drug consumption during dates to stay alert and make informed decisions.",
        "If you're unsure about the other person's intentions, it's best to stay cautious.",
      ],
    },
    {
      title: "Report Suspicious Behavior",
      details: [
        "If you encounter any suspicious or abusive behavior on the app, report it immediately to our moderation team.",
        "Provide detailed information and screenshots if possible to assist in the investigation.",
      ],
    },
    {
      title: "Respect Boundaries",
      details: [
        "Respect other users' boundaries and preferences. Consent is key, and both parties should feel comfortable and respected during interactions.",
      ],
    },
    {
      title: "Educate Yourself",
      details: [
        "Stay informed about common online dating scams and safety tips.",
        "Our app provides resources and articles on safe dating practices that you can refer to for guidance.",
      ],
    },
    {
      title: "Take Your Time",
      details: [
        "Don't rush into anything. Take your time to get to know the person you're interested in before moving forward with meetings or sharing more personal information.",
      ],
    },
    {
      title: "Use the Block and Report Features",
      details: [
        "If someone is harassing or behaving inappropriately towards you, utilize the block and report features to protect yourself and other users.",
        "Remember, your safety is our top priority. If you ever feel unsafe or have any concerns, don't hesitate to reach out to our support team for assistance.",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>JoliMate - Chat, Date, Make Friends</title>
      </Head>

      <Navbar />

      <main className="w-full  flex flex-col gap-xxxl mb-20">
        {/* heading section */}
        <div className="w-full bg-purple-600 py-7 px-32">
          <div className=" max-w-screen-xl  w-full mx-auto">
            <div className="w-full py-20 px-4 mx-auto flex xl:flex-row flex-col md:justify-between items-center ">
              <h1 className="h1 text-[32px]  text-white  font-extrabold  leading-snug ">
                Safety Tips for Using Our Dating App
              </h1>
            </div>
          </div>
        </div>

        {/* content section */}
        <div className="w-full bg-white  px-32">
          <div className="max-w-screen-xl w-full mx-auto">
            <ol className="space-y-4 text-[#232323] list-decimal list-inside dark:text-gray-400">
              {safetyTips.map((tip, index) => (
                <li key={index}>
                  <span className="text-lg font-semibold text-[#232323]">
                    {tip.title}
                  </span>
                  <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    {tip.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SafetyTips;
