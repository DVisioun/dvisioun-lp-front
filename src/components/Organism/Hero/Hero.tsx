import { BoxHero } from "@/components/Molecule/BoxHero/BoxHero";
import { VideoHero } from "@/components/Molecule/VideoHero/VideoHero";
import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12 bg-gradient-to-b from-gray-700 to-primary-blue">
      <div className="flex flex-col gap-12 d-0:flex-row d-0:justify-center d-0:gap-6">
        {/* <VideoHero /> */}
        <BoxHero />
      </div>
    </div>
  );
};
