import React from "react";

const DropdownHeader = () => {
  return (
    <section className="w-24 h-32 opacity-100 bg-primary-blue absolute -bottom-28 right-10 rounded-md flex justify-center items-center">
      <ul className="w-full flex flex-col justify-center items-center gap-2 opacity-100">
        <li className="font-medium text-[.8rem] opacity-100 text-gray-100 hover:text-gray-700 duration-300 hover:duration-300">
          Home
        </li>
        <li className="font-medium text-[.8rem] text-gray-100 hover:text-gray-700 duration-300 hover:duration-300">
          Serviços
        </li>
        <li className="font-medium text-[.8rem] text-gray-100 hover:text-gray-700 duration-300 hover:duration-300">
          Sobre nós
        </li>
        <li className="font-medium text-[.8rem] text-gray-100 hover:text-gray-700 duration-300 hover:duration-300">
          Contato
        </li>
      </ul>
    </section>
  );
};

export default DropdownHeader;
