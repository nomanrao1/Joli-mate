// components/Slider.js

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  appendDots: (dots: React.ReactNode) => (
    <ul style={{ margin: "0px", padding: "0px", textAlign: "center" }}>
      {React.Children.toArray(dots).map(
        (dot: React.ReactNode, index: number) => (
          <li
            key={index}
            style={{
              display: "inline-block",
              width: "50px",
              height: "5px",
              backgroundColor: (
                (dot as React.ReactElement).props.className as string
              )?.includes("slick-active")
                ? "#FA628E"
                : "#CACACA",
              margin: "0 3px",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          ></li>
        )
      )}
    </ul>
  ),
};

export type ImageType = {
  src: string;
  alt: string;
  description: string;
};

export type SliderProps = {
  images: ImageType[];
};

export const ImageSlider: React.FC<SliderProps> = ({ images }) => {
  return (
    <div className="w-full p-2">
      <Slider {...settings}>
        {Array.isArray(images) &&
          images.map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "13px",
                  padding: "5px",
                }}
                width={100}
                height={100}
                alt={image.alt}
              />
              <div className="carousel-caption hidden md:block">
                <h5 className="text-center mt-[10px] mb-[-10px] text-[16px] text-[#111729]">
                  {image.alt}
                </h5>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};
