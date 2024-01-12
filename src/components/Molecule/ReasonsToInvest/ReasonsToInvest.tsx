'use client'
import React, { useState } from "react";
import CardReasonsToInvest from "@/components/Atoms/CardReasonsToInvest/CardReasonsToInvest";
import { reasonsAtom } from "@/states/reasons.mock";

function ReasonsToInvest() {
  const [reasons, ] = useState(reasonsAtom.init);

  return (
    <section className="bg-gray-700">
      <h1 className="uppercase text-gray-100 font-semibold text-center text-base mb-10 mt-5 px-4">
        Por que <span className="text-primary-blue uppercase">você</span>
        deveria investir na
        <span className="text-primary-blue uppercase">sua empresa</span>?
      </h1>
      {reasons.map((reason) => (
        <CardReasonsToInvest
          key={reason.id}
          image={reason.imgPath}
          title={reason.title}
          text={reason.text}
        />
      ))}
    </section>
  );
}

export default ReasonsToInvest;
