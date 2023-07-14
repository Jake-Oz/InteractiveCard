"use client";

import Image from "next/image";
import useCardData from "../hooks/useCardData";

const FrontCard = () => {
  const data = useCardData();
  return (
    <div className="relative z-30 w-[240px] desktop:top-0 desktop:w-[400px]">
      <Image
        src="/bg-card-front.png"
        alt="Credit Card Front"
        height={220}
        width={400}
      />
      <div className="absolute w-full z-20 top-0 p-4 desktop:py-7 desktop:px-6">
        <div className="desktop:mb-10 desktop:w-[60px] w-[30px] mb-7">
          <Image src="/card-logo.svg" alt="Card Logo" width={82} height={40} />
        </div>
        <div className=" text-left text-white/80 font-medium text-[1rem] mb-3 desktop:text-[1.675rem] tracking-widest desktop:mb-4">
          {data.cardData.cardNumber
            ? data.cardData.cardNumber
            : "0000 0000 0000 0000"}
        </div>
        <div className="flex justify-between tracking-widest font-medium text-white/70 text-[0.6rem] desktop:text-[0.875rem]">
          <div>
            {data.cardData.cardHolder
              ? data.cardData.cardHolder.toUpperCase()
              : "JANE APPLESEED"}
          </div>
          <div>
            {data.cardData.month ? data.cardData.month : "00"} /{" "}
            {data.cardData.year ? data.cardData.year : "00"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
