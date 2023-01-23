"use client";
import React, { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
