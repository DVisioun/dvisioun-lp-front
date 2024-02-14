import React from "react";

const DropdownHeader = () => {
  return (
    <section className="w-24 h-32 d-0.1:w-28 d-0.1:h-36 d-1:hidden opacity-100 bg-primary-blue absolute -bottom-28 right-10 d-0.1:-bottom-32 rounded-md flex justify-center items-center">
      <ul className="w-full flex flex-col justify-center items-center gap-2 opacity-100">
        <li className="font-medium text-[.8rem] d-0.1:text-base cursor-pointer opacity-100 text-gray-100 hover:text-gray-700 duration-300 hover:duration-300">
          Home
        </li>
        <li className="font-medium text-[.8rem] d-0.1:text-base cursor-pointer text-gray-100 hover:text-gray-700 duration-300 hover:duration-300">
          Serviços
        </li>
        <li className="font-medium text-[.8rem] d-0.1:text-base cursor-pointer text-gray-100 hover:text-gray-700 duration-300 hover:duration-300">
          Sobre nós
        </li>
        <li className="font-medium text-[.8rem] d-0.1:text-base cursor-pointer text-gray-100 hover:text-gray-700 duration-300 hover:duration-300">
          Contato
        </li>
      </ul>
    </section>
  );
};

export default DropdownHeader;
