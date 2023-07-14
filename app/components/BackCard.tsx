"use client";

import Image from "next/image";
import useCardData from "../hooks/useCardData";

const BackCard = () => {
  const data = useCardData();
  return (
    <div className="relative w-[200px] desktop:w-[400px]">
      <Image
        src="/bg-card-back.png"
        alt="Credit Card Back"
        width={400}
        height={220}
      />
      <div className="absolute top-[47px] right-[25px] desktop:top-[96px] desktop:right-12 text-white/80 text-[0.6rem] desktop:text-sm font-medium tracking-widest">
        {data.cardData.cvc ? data.cardData.cvc : "000"}
      </div>
    </div>
  );
};

export default BackCard;
