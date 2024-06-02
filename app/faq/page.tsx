"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";
import Navbar from "@/components/Navbar";
import ListItem from "@/components/ProfileCreationListItem";
import type { NextPage } from "next";
import Head from "next/head";

const Faqs: NextPage = () => {
  const Faqs = [
    {
      title: "How do I create an account on the app?",
      details: [
        "To create an account, download the app from the App Store or Google Play Store.",
        "Open the app and follow the on-screen instructions to sign up using your mobile no",
        "Complete your profile by adding photos, writing a bio, and specifying your preferences.",
      ],
    },
    {
      title: "Is my information secure on the app?",
      details: [
        "We take privacy and security seriously. Your information is encrypted and protected using industry-standard security measures.",
        "We do not share your personal information with third parties without your consent.",
      ],
    },
    {
      title: "How can I edit my profile?",
      details: [
        `You can edit your profile information by navigating to the \"Profile\" section in the app.`,
        "Tap on the edit icon next to the information you want to change, such as photos, bio, or preferences.",
      ],
    },
    {
      title: "Can I report abusive or inappropriate behavior?",
      details: [
        'Yes, you can report any abusive or inappropriate behavior by using the "Report" feature in the app.',
        "Provide details of the issue, and our moderation team will investigate and take appropriate action.",
      ],
    },
    {
      title: "How does matching work on the app?",
      details: [
        "Our app uses a sophisticated matching algorithm to connect users based on their preferences, interests, and location.",
        "You'll receive potential matches based on these criteria, and you can swipe or message to connect with them.",
      ],
    },
    {
      title: "What safety measures are in place for in-person meetings?",
      details: [
        "We encourage users to follow safety guidelines, such as meeting in public places for the first time.",
        "Use the in-app messaging system to get to know someone before meeting in person, and always inform a friend or family member about your plans.",
      ],
    },
    {
      title: "How can I delete my account?",
      details: [
        'If you wish to delete your account, go to the "Settings" section in the app.',
        'Look for the "Delete Account" option and follow the prompts to permanently delete your account and data.',
      ],
    },
    {
      title: "Can I hide my profile from certain users?",
      details: [
        'Yes, you can use the "Hide Profile" feature to hide your profile from specific users.',
        "This feature is helpful if you want to take a break from interacting with certain individuals.",
      ],
    },
    {
      title: "What if I have technical issues with the app?",
      details: [
        'If you encounter technical issues, you can reach out to our support team through the "Help" or "Contact Us" section in the app.',
        "Describe the problem in detail, and our team will assist you in resolving the issue.",
      ],
    },
    {
      title: "Are there any tips for a successful experience on the app?",
      details: [
        "We recommend being authentic in your profile, uploading clear photos, and engaging in meaningful conversations with matches.",
        "Respect others' boundaries, communicate openly, and have fun exploring connections on the app.",
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
                Frequently Asked Questions (FAQ)
              </h1>
            </div>
          </div>
        </div>

        {/* content section */}
        <div className="w-full bg-white  px-32">
          <div className="max-w-screen-xl w-full mx-auto">
            <ol className="space-y-4 text-[#232323] list-decimal list-inside dark:text-gray-400">
              {Faqs.map((tip, index) => (
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

export default Faqs;
