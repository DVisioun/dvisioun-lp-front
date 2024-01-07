import { ButtonProps } from "@/@types";
import React from "react";

export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="font-bold bg-gradient-to-b from-primary-blue to-dark-blue uppercase rounded-md text-white cursor-pointer duration-300 text-xs py-1 px-10 d-0.01:py-2 d-0.01:px-12 d-0.01:text-base d-0:text-lg hover:from-dark-blue hover:to-primary-blue">
      {title}
    </button>
  );
};
