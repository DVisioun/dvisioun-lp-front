import { NavBarFooter } from "@/components/Molecule/NavBarFooter/NavBarFooter";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col py-12 gap-6 bg-gray-700 justify-center">
        <div className="bg-primary-blue h-4 w-full"></div>
        <NavBarFooter />
        <div className="bg-primary-blue h-1 w-3/4"></div>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          © 2023{" "}
          D'Vision
          - All Rights Reserved.
        </p>
      </div>
    </>
  );
};
