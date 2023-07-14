"use client";

import Image from "next/image";
import checkmark from "@/public/icon-complete.svg";
import Button from "./Button";

const Confirmation = () => {
  return (
    <div className="desktop:w-[280px] w-[80%] desktop:mx-10 m-auto flex flex-col justify-center items-center">
      <div className="mb-7 w-[60px] desktop:w-[80px]">
        <Image src={checkmark} alt="checkmark" height={80} width={80} />
      </div>
      <div className=" text-3xl font-medium tracking-widest mb-2">
        THANK YOU!
      </div>
      <div className=" text-darkGrayishViolet">
        We&apos;ve added your card details
      </div>
      <Button title="Continue" />
    </div>
  );
};

export default Confirmation;
