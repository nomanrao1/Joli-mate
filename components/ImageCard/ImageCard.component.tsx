import Image from "next/image";
import React from "react";

export type ImageCardProps = {
  title: string;
  className: string;
  imageUrl: string;
};

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  className,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden ">
      <Image
        src={imageUrl}
        alt={title}
        width={320}
        height={320}
        objectFit="cover"
        className={className}
      />
    </div>
  );
};
