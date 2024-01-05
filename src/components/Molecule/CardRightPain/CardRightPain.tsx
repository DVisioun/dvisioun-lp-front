import { PainProps } from "@/@types";
import Image from "next/image";
import React from "react";

export const CardRightPain = ({ description, title, id }: PainProps) => {
  return (
    <div className="flex flex-col items-end gap-2 relative px-2 d-1:items-center">
      <div className="absolute left-0 -translate-y-2 d-0.01:-translate-y-10">
        <Image
          src="/images/pain-section/leftBigArrow.svg"
          width={0}
          height={0}
          alt=""
          className="w-16"
        />
      </div>
      <div className="flex flex-col gap-2 items-end d-0.1:items-center d-0.1:gap-4">
        <div className="flex gap-4 bg-gray-800 rounded-tl-3xl rounded-br-3xl relative w-[15rem] d-0:w-[18rem] px-2">
          <p className="text-base font-medium text-white w-full text-center d-0:text-lg d-0.1:text-xl">
            {title}
          </p>
          <div className="flex items-center justify-center font-medium text-lg -translate-y-1 bg-gradient-to-b from-primary-blue to-dark-blue text-white bg-primary-blue border-2 border-gray-800 p-2 rounded-[50%] absolute w-[2rem] h-[2rem]  d-0.1:w-[2.5rem] d-0.1:h-[2.5rem]  d-0.1:text-2xl">
            {id}
          </div>
        </div>
        <div className="flex items-baseline gap-2 justify-end d-0.1:justify-center">
          <p className="text-sm text-right w-[78%] d-0.01:w-[70%] d-0:w-[60%] d-0.1:w-[50%] d-1:max-w-[1200px] d-0.1:text-justify d-0:text-base d-0.1:text-lg d-0.1:leading-8">
            {description}
          </p>
          <Image
            src="/images/pain-section/rightArrow.svg"
            width={0}
            height={0}
            alt=""
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
};
