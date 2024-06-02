"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";
import Navbar from "@/components/Navbar";
import ListItem from "@/components/ProfileCreationListItem";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import homeOne from "@/public/assets/homeOne.png";
import homeTwo from "@/public/assets/homeTwo.png";
import homeThree from "@/public/assets/homeThree.png";
import homeThreeMobile from "@/public/assets/homeThreeMobile.png";

const Home: NextPage = () => {
  const profileCreationSteps = [
    {
      id: 1,
      title: "Create Profile",
      description:
        "Create Your Profile, add photos, share your interests, and let Jolimate's algorithms do the rest.",
    },
    {
      id: 2,
      title: "Discover Matches",
      description:
        "Discover Matches and explore a curated selection of matches tailored to your preferences.",
    },
    {
      id: 3,
      title: "Connect with Individuals",
      description:
        "Break the ice and connect with like-minded individuals and build meaningful connections in a comfortable and secure environment.",
    },
  ];

  return (
    <>
      <Head>
        <title>JoliMate - Chat, Date, Make Friends</title>
      </Head>

      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="w-full bg-white flex flex-col md:flex-col lg:flex-row flex-wrap justify-center align-middle items-center md:justify-between px-5 md:px-36  my-10">
          {/* left side */}
          <div className="text-section xl:max-w-[581px] xl:text-start lg:text-center md:w-auto">
            <h1 className="h1 xl:text-xxxl md:text-xxl  text-xxl xl:text-start text-center  font-extrabold  leading-snug text-gray-800">
              Chat, Date Make Friends Have Fun, Hangout
            </h1>
            <p className="text-lg  text-gray-600 mt-lg xl:text-start text-center">
              The Ultimate Dating app that goes beyond the swipe
            </p>
            <div className="flex justify-center items-center md:hidden lg:hidden">
              <Button
                text="Download App"
                className=" xl:bg-white xl:text-purple-600 text-white border font-bold text-md rounded-lg  w-[195px] h-[56px] hover:text-white xl:mt-0 md:mt-0 mt-8"
                onClick={() => {
                  console.log("clicked");
                }}
              />
            </div>
          </div>
          {/* right side */}
          <div className="relative mt-xxl">
            <Image src={homeOne} alt="homeOne" />
          </div>
        </div>

        <div className="w-full bg-purple-600 flex flex-col md:flex-col lg:flex-row flex-wrap justify-center align-middle items-center md:justify-between px-5 md:px-36 py-20">
          {/* left side */}
          <div className="flex flex-col xl:items-start items-center xl:max-w-[473px] xl:text-start lg:text-center md:w-auto">
            <h1 className="h1 xl:text-xxxl text-xxl  text-white  font-extrabold  leading-snug xl:text-start text-center ">
              Skip the line
            </h1>
            <p className="text-lg  text-white mt-lg xl:block md:block hidden">
              Find those closer to you in spotlight and maps.
            </p>
            <p className="text-lg  text-white my-lg xl:block md:block hidden">
              Ignite the spark with a conversation
            </p>
            <Button
              text="Download App"
              className=" xl:bg-white xl:text-purple-600 text-white border font-bold text-md rounded-lg  w-[195px] h-[56px] hover:text-white xl:mt-0 md:mt-0 mt-8"
              onClick={() => {
                console.log("clicked");
              }}
            />
          </div>
          {/* right side */}
          <div className="relative mt-xxl">
            <Image src={homeTwo} alt="homeOne" />
          </div>
        </div>

        <div className="w-full bg-white flex flex-col md:flex-col lg:flex-row flex-wrap justify-center align-middle items-center md:justify-between px-5 md:px-36 py-20">
          {/* left side */}
          <div className="w-full flex flex-row justify-center items-center">
            <h2 className="text-center text-xxl font-semibold text-gray-800">
              How it works
            </h2>
          </div>
          <div className="w-full xl:px-0 px-8 py-8 mx-auto flex xl:flex-row flex-col md:justify-between items-center mt-8">
            <div className="flex flex-col gap-12 xl:max-w-[473px]  xl:text-start lg:text-center md:w-auto ">
              {profileCreationSteps.map((item) => (
                <ListItem
                  key={item.id}
                  count={item.id}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            <div className="xl:w-[560px] w-full border flex justify-center pt-20 bg-gray-200 rounded-lg mt-xxl">
              <ImageCard
                title="profile"
                imageUrl="/assets/image60.png"
                className=" w-[315px] h-[auto]"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-white  hidden md:flex lg:flex flex-col md:flex-col lg:flex-row flex-wrap justify-center align-middle items-center md:justify-between my-10">
          {/* left side */}
          <div className="text-section xl:max-w-[581px] xl:text-start lg:text-center md:w-auto">
            <Image src={homeThree} alt="homeThree" />
          </div>
          {/* right side */}
          <div className="w-[50%] relative h-[445px] flex flex-col align-middle justify-evenly">
            <div className="h-[50%] flex flex-col align-middle justify-evenly mx-28">
              <h2 className="text-xxl font-semibold text-gray-800">
                Stay in control
              </h2>
              <p className="text-md">connect with people you desire</p>
              <Button
                text="Download App"
                className=" bg-purple-600 text-white font-bold text-md rounded-lg  w-[195px] h-[56px]  "
                onClick={() => {
                  console.log("clicked");
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-white  flex md:hidden lg:hidden flex-col md:flex-col lg:flex-row flex-wrap justify-center align-middle items-center md:justify-between my-5">
          {/* left side */}
          <div className="w-full relative h-[245px] flex flex-col align-middle justify-evenly">
            <div className="h-[60%] flex flex-col align-middle justify-evenly items-center mx-16">
              <h2 className="text-[26px] font-bold text-gray-800">
                Stay in control
              </h2>
              <p className="text-[16px]">connect with people you desire</p>
              <Button
                text="Download App"
                className=" bg-purple-600 text-white font-bold text-md rounded-lg  w-[195px] h-[56px]  "
                onClick={() => {
                  console.log("clicked");
                }}
              />
            </div>
          </div>
          {/* right side */}
          <div className="text-section xl:max-w-[581px] xl:text-start lg:text-center md:w-auto mb-5">
            <Image src={homeThreeMobile} alt="homeThreeMobile" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
