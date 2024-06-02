"use client";
import React, { useState } from "react"; // Import useState if you need to manage state
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { InputFieldSet } from "@/components/InputFieldSet";
import type { NextPage } from "next";
import Head from "next/head";
import Button from "@/components/Button";
import ImageCard from "@/components/ImageCard";
import Image from "next/image";
import contactUsImg from "@/public/assets/contactusright.png";
import { useRouter } from "next/navigation";

type FormData = {
  [key: string]: string;
};

const ContactUs: NextPage = () => {
  const router = useRouter();
  const formFields = [
    {
      id: "first-name",
      label: "First name",
      placeholder: "Alex Halley",
      inputType: "text",
      className: "text-base p-4", // Specify custom classes for each input
    },
    {
      id: "last-name",
      label: "Last name",
      placeholder: "R",
      inputType: "text",
      className: "text-base p-4", // Specify custom classes for each input
    },
    {
      id: "email",
      label: "Email",
      placeholder: "example@gmail.com",
      inputType: "email",
      className: "text-base p-4", // Specify custom classes for each input
    },
    {
      id: "phone-number",
      label: "Phone number",
      placeholder: "9879416131",
      inputType: "text",
      className: "text-base p-4", // Specify custom classes for each input
    },
    {
      id: "message",
      label: "Message",
      placeholder: " ",
      inputType: "textarea",
      className: "text-base p-4", // Specify custom classes for each input
    },
  ];

  // Example of managing state for input values
  // This assumes you want to keep track of the values for each field

  const [formData, setFormData] = useState<FormData>({
    "company-name": "", // Initialize state for each field ID
    // Add more fields as needed
  });

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  function submitInfo() {
    router.push("/")
  }

  return (
    <>
      <Head>
        <title>JoliMate - Chat, Date, Make Friends</title>
      </Head>

      <Navbar />

      <section className="bg-white dark:bg-gray-900">
        <div className="w-full flex flex-col md:flex-col lg:flex-row flex-wrap justify-center align-middle items-center md:justify-between px-5 md:px-28">
          <div className="w-full md:w-full lg:w-1/2 mb-4 px-4">
            <div className="p-4">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                We’d love to hear from you
              </h2>

              {/* form start */}
              {formFields.map((field, index) => (
                <InputFieldSet
                  id={`${index}`}
                  key={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  inputType={field.inputType}
                  className={field.className}
                  value={formData[field.id] || ""} // Ensure a fallback value if formData[field.id] is undefined
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
              ))}

              <Button
                text="Submit"
                className=" bg-purple-600 text-white font-bold text-md rounded-lg  w-full h-[56px]  "
                onClick={submitInfo}
              />
            </div>
          </div>
          <div className="w-full md:w-full lg:w-1/2 mb-4 px-4">
            <div className="p-4">
              <Image
                src={contactUsImg}
                alt="Contact Us Image"
                height={673}
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
