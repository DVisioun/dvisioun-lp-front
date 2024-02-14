"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe2 } from 'lucide-react'
import DropdownHeader from "@/components/Molecule/DropdownHeader/DropdownHeader";

const NavBarHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="w-full h-full">
        <nav className="w-full h-full relative flex items-center d-1:justify-around justify-between bg-gray-700 border-b border-primary-blue p-4">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo DVisioun"
              aria-label="Logo DVisioun"
              className="w-20 h-4 d-0.1:w-32 d-0.1:h-6 d-1:w-48 d-1:h-9"
              width={100}
              height={100}
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
            className="h-auto d-0.1:w-8 d-1:hidden"
          />
          {
            isDropdownOpen && <DropdownHeader />
          }
          <div className="hidden d-1:block">
            <ul className="flex gap-14">
              <li className="cursor pointer text-lg text-white hover:text-primary-blue duration-300">Home</li>
              <li className="cursor pointer text-lg text-white hover:text-primary-blue duration-300">Serviços</li>
              <li className="cursor pointer text-lg text-white hover:text-primary-blue duration-300">Sobre nós</li>
              <li className="cursor pointer text-lg text-white hover:text-primary-blue duration-300">Contato</li>
            </ul>
          </div>
          <Globe2 className="hidden d-1:block"  size={32} color="#3BC9DB" />
        </nav>
      </header>
    </>
  );
};

export default NavBarHeader;
