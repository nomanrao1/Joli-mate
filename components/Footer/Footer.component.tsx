import Link from "next/link";
import React from "react";
import ImageCard from "../ImageCard";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  const socialMediaIcons = [
    {
      title: "LinkedIn",
      imageUrl: "/assets/LinkedIn.svg",
      link: "#",
    },
    {
      title: "Facebook",
      imageUrl: "/assets/fb.svg",
      link: "#",
    },
    {
      title: "Instagram",
      imageUrl: "/assets/Instagram.svg",
      link: "#",
    },
    {
      title: "TikTok",
      imageUrl: "/assets/tictok.svg",
      link: "#",
    },
  ];
  return (
    <footer className="flex justify-between items-center px-5 md:px-28 lg:px-28 py-8 bg-gray-800 flex-wrap lg:w-full sm:w-full">
      <p className="text-gray-300">© Copyright @ 2024 Jolimate Inc</p>
      <div className="flex lg:gap-4 sm:justify-center py-4">
        <Link href="/" className="text-gray-300  font-bold">
          Privacy Policy
        </Link>
        <span className="text-white"> /</span>
        <Link href="/" className="text-gray-300  font-bold">
          cookie policy
        </Link>
        <span className="text-gray-300"> /</span>
        <Link href="/" className="text-gray-300  font-bold">
          Terms of use
        </Link>
      </div>

      <div className="flex gap-6">
        {socialMediaIcons.map((icon, index) => (
          <Link href={icon.link} key={index}>
            <ImageCard
              title={icon.title}
              imageUrl={icon.imageUrl}
              className="w-[20px] h-[20px]"
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};
