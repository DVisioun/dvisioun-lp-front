import React from "react";

export const BoxHero = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-gray-500 to-dark-blue px-5 py-8 d-1:px-10 d-1:py-12 rounded-md max-w-[22rem] d-1:max-w-[30rem] u-1:max-w-[35rem]">
      <div>
        <h1 className="w-[13rem] d-0:w-[15rem] d-1:w-[25rem] u-1:w-[30rem] u-2:w-[35rem] font-bold text-white text-center text-lg d-0:text-xl d-1:text-3xl u-1:text-4xl">
          ESTAR NA INTERNET NÃO É O SUFICIENTE
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-white text-sm font-medium d-0.01:text-base u-1:text-lg">
          Imagina estar no mundo virtual aonde todos os clientes estão
          diariamente e nele não conseguir atingir as suas metas?
        </p>
        <p className="text-white text-sm font-medium d-0.01:text-base u-1:text-lg">
          Não está conseguindo alavancar o seu negócio?
        </p>
        <p className="text-white text-sm font-medium d-0.01:text-base u-1:text-lg">
          Com o intuito de posicionar a sua empresa no ambiente da web, nasceu a
          D’Visioun.
        </p>
        <p className="text-white text-sm font-medium d-0.01:text-base u-1:text-lg">
          Em até 4 semanas, para impulsionar o seu negócio.
        </p>
      </div>
    </div>
  );
};
