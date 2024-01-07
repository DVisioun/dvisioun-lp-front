import Image from "next/image";
import React from "react";

const BoxSolution = () => {
  return (
    <div className="flex items-center justify-between w-full h-full">
      <Image
        src="/trianguloAzulLeft.png"
        alt="Triângulo Azul"
        width={48}
        height={0}
        aria-label="Triângulo Azul"
        className="h-[4.5rem]"
      ></Image>
      <h2 className="text-center text-gray-100 uppercase font-medium w-[60%]">
        Clique no botão e faça seu orçamento agora!
      </h2>
      <Image
        src="/trianguloAzulRight.png"
        alt="Triângulo Azul"
        width={48}
        height={0}
        aria-label="Triângulo Azul"
        className="h-[4.5rem]"
      ></Image>
    </div>
  );
};

export default BoxSolution;
