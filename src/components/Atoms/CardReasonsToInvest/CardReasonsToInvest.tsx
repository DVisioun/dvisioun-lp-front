import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  text: string;
}

const CardReasonsToInvest: React.FC<CardProps> = ({ image, title, text }) => {
  return (
    <div className="relative p-6">
      <Image src={image} alt="1" width={67} height={200} className="absolute" />
      <h1 className="text-gray-100 font-semibold text-base w-4/5 pl-9">
        {title}
      </h1>
      <p className="text-gray-100 pl-9 text-sm">{text}</p>
    </div>
  );
};

export default CardReasonsToInvest;
