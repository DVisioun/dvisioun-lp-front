"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DropdownHeader from "@/components/Molecule/DropdownHeader/DropdownHeader";

const NavBarHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="w-full h-full">
        <nav className="w-full h-full relative flex items-center justify-between bg-gray-700 border-b border-primary-blue p-4">
          <Link href="/">
            <Image
              src="/DvisiounLogo.png"
              alt="Logo DVisioun"
              aria-label="Logo DVisioun"
              className="w-20 h-4"
              width={72}
              height={80}
            />
          </Link>
          <Image
            src="/menu.png"
            alt="Menu Image"
            aria-label="Menu Image"
            width={24}
            height={24}
            onClick={toggleDropdown}
            onMouseEnter={toggleDropdown}
          ></Image>
          {isDropdownOpen && <DropdownHeader />}
        </nav>
      </header>
    </>
  );
};

export default NavBarHeader;
