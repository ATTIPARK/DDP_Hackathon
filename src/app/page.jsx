"use client";

import Link from "next/link";

export default function Home() {
  const onClickNext = () => {
    console.log("다음 슬라이드");
  };

  return (
    <>
      <div className="w-[300px] h-[460px] left-[40px] absolute bg-stone-300 rounded-xl mt-20 flex justify-center items-center">
        Image
      </div>
      <button
        onClick={onClickNext}
        className="w-[342px] h-[54px] bottom-[120px] left-[20px] bg-neutral-900 absolute rounded-[30px] text-center text-white text-sm font-semibold"
      >
        Next
      </button>
      <Link href="login">
        <button className="w-[342px] h-[54px] bottom-[50px] left-[20px] bg-white absolute rounded-[30px] text-center border-black border text-black text-sm font-semibold">
          Skip
        </button>
      </Link>
    </>
  );
}
