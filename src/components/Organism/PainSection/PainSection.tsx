"use client"
import { CardLeftPain } from "@/components/Molecule/CardLeftPain/CardLeftPain";
import { clientPainInformation } from "../../../states/client-pain.mock";
import { CardRightPain } from "@/components/Molecule/CardRightPain/CardRightPain";
import { useState } from "react";

export const PainSection = () => {
  const [pain] = useState(clientPainInformation.init);

  return (
    <section className="bg-primary-blue">
      <div className="flex justify-center bg-dark-gray-transparent">
        <h1 className="font-bold text-base uppercase text-white text-center px-4 d-0:text-[18px] d-0.1:text-xl d-0.3:text-2xl u-1:text-3xl d-0.1:w-[55%] d-0.3:w-[55%] u-0:w-[45%] u-1:w-[35%]">
          Se você está aqui,{" "}
          <strong className="text-gray-600">
            significa que você está escolhendo
          </strong>{" "}
          solucionar:
        </h1>
      </div>
      <div>
        <div className="flex flex-col gap-8 py-8 d-0.1:gap-12">
          {pain.map((item) => {
            if (item.id % 2 === 0) {
              return (
                <CardRightPain
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  title={item.title}
                />
              );
            } else {
              return (
                <CardLeftPain
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  title={item.title}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
