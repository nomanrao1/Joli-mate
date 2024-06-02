import React from "react";

export type ListProps = {
  count: number;
  title: string;
  description: string;
};

export const ListItem: React.FC<ListProps> = ({
  count,
  title,
  description,
}) => {
  return (
    <div className="flex gap-6 items-start">
      <div className="bg-purple-200 px-3 py-1 rounded-circle text-purple-600 font-bold">
        {count}
      </div>
      <div className="flex flex-col gap-lg">
        <h3 className="text-[22px] text-gray-800 font-semibold text-lg">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
