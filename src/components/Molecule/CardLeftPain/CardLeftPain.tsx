import { PainProps } from "@/@types";
import Image from "next/image";
import React from "react";

export const CardLeftPain = ({ description, title, id }: PainProps) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <div className="absolute right-0 translate-x-8 -translate-y-2 d-0.01:-translate-y-6 d-0.01:translate-x-8 overflow-hidden">
        <Image
          src="/images/pain-section/rightBigArrow.svg"
          width={0}
          height={0}
          alt=""
          className="w-16"
        />
      </div>
      <div className="flex gap-4 bg-gray-800 rounded-tl-3xl rounded-br-3xl relative w-[15rem] px-2">
        <div>
          <div className="flex items-center justify-center font-medium text-lg -translate-y-1 bg-gradient-to-b from-primary-blue to-dark-blue text-white bg-primary-blue border-2 border-gray-800 p-2 rounded-[50%] absolute w-[2rem] h-[2rem]">
            {id}
          </div>
        </div>
        <p className="text-base font-medium text-white w-full text-center">
          {title}
        </p>
      </div>
      <div className="flex items-baseline gap-2">
        <Image
          src="/images/pain-section/leftArrow.svg"
          width={0}
          height={0}
          alt=""
          className="w-auto"
        />
        <p className="text-sm text-left w-[80%] d-0.01:w-[60%]">{description}</p>
      </div>
    </div>
  );
};
