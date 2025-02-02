"use client";

import React from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
  placeholder?: string;
}

export const Input = ({
  label,
  value,
  onChange,
  type = "text",
  className,
  placeholder,
}: Props) => {
  return (
    <label className={`block font-medium text-lg mb-2 ${className}`}>
      {label}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border-2  border-slate-200 py-2 px-3 form-input mt-1 block w-full  ${className}`}
      />
    </label>
  );
};
