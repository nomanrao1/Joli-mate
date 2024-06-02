import Image from "next/image";
import React from "react";

export type IconImgProps = {
  title: string;
  className: string;
  imageUrl: string;
};

export const IconImg: React.FC<IconImgProps> = ({
  title,
  className,
  imageUrl,
}) => {
  return (
    <Image
      src={imageUrl}
      alt={title}
      width={24}
      height={24}
      objectFit="cover"
      className={className}
    />
  );
};
