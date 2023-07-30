"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function Main() {
  return (
    <>
      <div className=" h-[1400px]  right-[1px] relative bg-white border-2 border-zinc-100 mt-2">
        <div className="w-[390px] h-[568px]  top-[-3px] absolute">
          <div className="w-[386px] h-[568px]   right-[6px] top-0 absolute bg-zinc-500" />
        </div>
        <div className="left-[25px] top-[61px] absolute text-white text-[26px] font-semibold leading-[30px]">
          Explore
        </div>
        <div className="left-[145px] top-[61px] absolute text-white text-[26px] font-semibold leading-[30px]">
          Popular
        </div>
        <div className="w-[280px] h-[381.82px] left-[55px] top-[117px] absolute bg-stone-300 rounded" />
        <div className="w-[342px] left-[26px] top-[603px] absolute justify-start items-start gap-[190px] inline-flex">
          <div className="text-black text-xl font-semibold leading-snug">
            Catagories
          </div>
          <div className="text-black text-sm font-semibold leading-[18px]">
            See all
          </div>
        </div>
        <div className="left-[31px] top-[986px] absolute flex-col justify-start items-start gap-px inline-flex">
          <div className="text-black text-base font-semibold leading-tight">
            Title
          </div>
          <div className="text-black text-sm font-normal leading-[18px]">
            sub
          </div>
          <div className="text-black text-sm font-normal leading-[18px]">
            location
          </div>
        </div>
        <div className="w-[180px] h-[260px] left-[26px] top-[709px] absolute bg-stone-300 rounded-lg" />
        <div className="w-8 h-8 left-[334px] top-[61px] absolute" />
        <div className="left-[24px] top-[1094px] absolute text-black text-xl font-semibold leading-snug">
          Popular
        </div>
        <div className="left-[321px] top-[1096px] absolute text-black text-sm font-semibold leading-[18px]">
          See all
        </div>
        <div className="w-[244px] h-[165px] left-[26px] top-[1138px] absolute">
          <div className="w-[244px] h-[165px] left-0 top-0 absolute bg-stone-300 rounded-lg" />
          <div className="left-[15px] top-[115px] absolute text-black text-base font-semibold leading-tight">
            title
          </div>
          <div className="left-[15px] top-[137px] absolute justify-center items-center gap-1 inline-flex">
            <div className="w-4 h-4 relative" />
            <div className="text-black text-[10px] font-normal leading-3">
              Location
            </div>
          </div>
        </div>
        <div className="px-4 py-2 left-[26px] top-[645px] absolute bg-neutral-800 rounded-[32px] border border-neutral-800 justify-start items-start gap-2.5 inline-flex">
          <div className="text-white text-sm font-normal leading-[18px]">
            subtitle
          </div>
        </div>
      </div>
    </>
  );
}
