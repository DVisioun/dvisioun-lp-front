"use client";

import { CardRatings } from "@/components/Atoms/CardRatings/CardRatings";
import { ratingInformation } from "@/states/rating.mock";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "@/swiper/swiper-bundle.min.css";

export const Ratings = () => {
  const [ratings] = useState(ratingInformation.init);
  return (
    <div className="flex flex-col gap-6 px-2 d-0:px-6 items-center justify-center bg-primary-blue py-12 overflow-hidden">
      <div className="flex gap-2">
        {
            Array(8).fill("").map((_, i) => (
                <h1 key={i} className="font-bold translate-y-[3px] text-xl opacity-50 text-gray-200 rotate-180">DEPOIMENTOS</h1>
            ))
        }
        <h1 className="font-bold text-xl text-gray-600">DEPOIMENTOS</h1>
        {
            Array(8).fill("").map((_, i) => (
                <h1 key={i} className="font-bold translate-y-[3px] text-xl opacity-50 text-gray-200 rotate-180">DEPOIMENTOS</h1>
            ))
        }
      </div>
      <Swiper
        slidesPerView={1}
        className="w-full d-0:w-[26rem] h-full"
        autoHeight={true}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCube, Pagination]}
      >
        {ratings.map((rating) => (
          <SwiperSlide key={rating.id}>
            <CardRatings
              img={rating.img}
              name={rating.name}
              review={rating.review}
              rating={rating.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
