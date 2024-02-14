import { RatingProps } from "@/@types";
import Image from "next/image";

export const CardRatings = ({ img, name, rating, review }: RatingProps) => {
  const generateRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<Image src={"star.svg"} alt="" width={12} height={12} />);
    }
    return stars;
  };

  return (
    <div className="flex flex-col gap-4 items-center text-left d-0:text-center bg-gray-900 rounded-lg shadow-lg p-6 d-0:p-7 h-[26rem] max-w-[400px] m-auto">
      <div className="flex flex-col gap-3 items-center">
        <Image
          src={img}
          alt=""
          width={0}
          height={0}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex gap-1 items-center">{generateRatingStars()}</div>
      </div>
      <div className="flex flex-col gap-2 max-w-sm">
        <p className="text-lg font-bold text-primary-blue text-center">{name}</p>
        <p className="text-sm d-0:text-base text-gray-100">{review}</p>
      </div>
    </div>
  );
};
