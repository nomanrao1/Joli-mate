// InputFieldSet.component.tsx
import React from "react";

interface InputFieldSetProps {
  id: string | "number";
  label: string;
  placeholder?: string;
  inputType?: string | "text" | "number" | "email" | "password" | "textarea"; // Add more input types as needed.
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // Optional className prop if you need additional custom styling
}

const InputFieldSet: React.FC<InputFieldSetProps> = ({
  id,
  label,
  placeholder = "",
  inputType = "text",
  value,
  onChange,
  className = "", // Default to empty string if no className is provided
}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      {inputType !== "textarea" ? (
        <input
          type={inputType}
          id={id}
          className={`block w-full h-[45px] p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={
            onChange as (event: React.ChangeEvent<HTMLInputElement>) => void
          } // Corrected event handler type
        />
      ) : (
        <textarea
          id={id}
          rows={3}
          className={`block w-full p-2.5 text-gray-900 border border-gray-300 rounded-[6px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={
            onChange as (
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => void
          } // Generic ChangeEvent handler
        />
      )}
    </div>
  );
};

export default InputFieldSet;
