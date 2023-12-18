import React from "react";

export const BoxHero = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-gray-500 to-dark-blue px-5 py-8 rounded-md max-w-[22rem]">
      <div>
        <h1 className="font-bold text-white text-center text-lg d-0:text-xl">
          ESTAR NA INTERNET <br/>NÃO É O SUFICIENTE
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-white text-sm font-medium d-0.01:text-base">
          Imagina estar no mundo virtual aonde todos os clientes estão
          diariamente e nele não conseguir atingir as suas metas?
        </p>
        <p className="text-white text-sm font-medium d-0.01:text-base">
          Não está conseguindo alavancar o seu negócio?
        </p>
        <p className="text-white text-sm font-medium d-0.01:text-base">
          Com o intuito de posicionar a sua empresa no ambiente da web, nasceu a
          D’Visioun.
        </p>
        <p className="text-white text-sm font-medium d-0.01:text-base">
          Em até 4 semanas, para impulsionar o seu negócio.
        </p>
      </div>
    </div>
  );
};
