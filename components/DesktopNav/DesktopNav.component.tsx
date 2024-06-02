import React from "react";
import Button from "../Button";
import Link from "next/link";
import DropDown from "../DropDown";

export const DesktopNav: React.FC = () => {
  return (
    <>
      <nav className="bg-white py-4">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-28 py-4">
          <Link href="/" className="text-[24px] text-brand-primary font-bold">
            JoliMate
          </Link>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/top-up" className="font-normal text-gray-600 text-md">
                TOP UP
              </Link>
            </li>
            <li>
              <DropDown
                title="RESOURCES"
                className="text-xs"
                menuOpen= {false}
                items={[
                  { text: "Blog", href: "/blog" },
                  { text: "Safety Tips", href: "/safety-tips" },
                  { text: "FAQ’s", href: "/faq" },
                  { text: "Contact Us", href: "/contact-us" },
                ]}
              />
            </li>
            <li>
              <Link href="/ads-space" className="text-gray-600 text-md">
                ADS SPACE
              </Link>
            </li>
            <li>
              <Button
                text="Download App"
                className="text-white text-md rounded-lg"
                onClick={() => {
                  console.log("clicked");
                }}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
