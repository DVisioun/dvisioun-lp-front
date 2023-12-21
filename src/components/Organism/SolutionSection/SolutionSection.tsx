"use client";
import React, { useState } from "react";
import Image from "next/image";
import { solutionAtom } from "@/states/solution.mock";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Autoplay } from "swiper/modules";
import "@/swiper/swiper-bundle.min.css";
import BoxSolution from "@/components/Molecule/BoxSoluction/BoxSolution";

const SolutionSection = () => {
  const [solutions] = useState(solutionAtom.init);

  return (
    <section className="bg-gray-700 flex flex-col items-center justify-center gap-8 py-4">
      <Image
        src="/DvisiounLogo.png"
        width={128}
        height={48}
        alt="D'Visioun Logo"
        aria-label="D'Visioun Logo"
      ></Image>
      <p className="uppercase text-gray-100 font-semibold text-center text-base w-4/5">
        Somos a <span className="text-primary-blue uppercase">solução</span>{" "}
        para <span className="text-primary-blue uppercase">alavancar</span> você
        e seu negócio{" "}
        <span className="text-primary-blue uppercase">rumo ao sucesso</span>
      </p>
      <Swiper
        slidesPerView={1}
        className="w-4/5"
        autoHeight={true}
        effect={"flip"}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectFlip, Pagination, Autoplay]}
      >
        {solutions.map((solution) => (
          <SwiperSlide key={solution.id}>
            <div className="bg-gray-700 shadow-3xl mb-10 rounded-lg p-4 flex flex-col items-center gap-6 justify-center">
              <Image
                src={solution.imgPath}
                width={48}
                height={48}
                alt={solution.title}
                aria-label={solution.title}
              ></Image>
              <h2 className="text-center text-primary-blue font-bold">
                {solution.title}
              </h2>
              <p className="text-center text-gray-100 text-[.9rem]">
                {solution.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <BoxSolution />
    </section>
  );
};

export default SolutionSection;
