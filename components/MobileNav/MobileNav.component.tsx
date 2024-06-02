import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button";

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state to manage dropdown visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  return (
    <nav className="bg-white py-4 relative z-10">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-purple-600 font-bold focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <Link
          href="/"
          className="w-[100%] text-center text-[24px] text-brand-primary font-bold"
        >
          JoliMate
        </Link>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#9747FF] z-20">
          <div className="max-w-screen-xl flex items-center align-middle justify-between mx-auto p-6">
            <Link
              href="/"
              className="text-white font-bold focus:outline-none w-[90%] text-center ml-5 text-xl"
            >
              Jolimate
            </Link>
            <div>
              <svg
                className="w-6 h-6"
                fill="white"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleMenu}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <ul className="flex flex-col items-left p-4 space-y-2">
            <li>
              <Link
                href="/top-up"
                className="block py-2 px-3 font-semibold text-[20px] text-white"
                aria-current="page"
              >
                TOP-UP
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown} // Attach toggleDropdown function
                className="w-full flex-row justify-between px-3 py-2 text-white focus:ring-4 focus:outline-none font-semibold text-[20px] text-center inline-flex items-center"
                type="button"
              >
                <div>RESOURCES</div>
                <div>
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </div>
              </button>

              {isDropdownOpen && ( // Render dropdown menu based on isDropdownOpen state
                <div className="w-full z-10 divide-y rounded-lg transition-transform duration-300 transform translate-y-0">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        href="/blog"
                        className="block text-[16px] font-medium px-4 py-2 text-white"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/safety-tips"
                        className="block text-[16px] font-medium px-4 py-2 text-white"
                      >
                        Safety Tips
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="block text-[16px] font-medium px-4 py-2 text-white"
                      >
                        FAQ’s
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        className="block text-[16px] font-medium px-4 py-2 text-white"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/ads-space"
                className="block py-2 px-3 font-semibold text-[20px] text-white"
                aria-current="page"
              >
                ADS SPACE
              </Link>
            </li>
            <Button
              text="Download App"
              className=" bg-transparent w-full text-white font-bold text-md rounded-lg h-[56px] border border-white"
              onClick={() => {
                console.log("clicked");
              }}
            />
          </ul>
        </div>
      )}
    </nav>
  );
};
