"use client";

import Link from "next/link";

export default function Register() {
  const onClickRegister = () => {
    console.log("db저장 및 회원가입완료");
  };

  return (
    <div className="bg-green-300">
      <div className="left-[137px] top-[154px] absolute text-black text-3xl font-bold tracking-wide">
        Sign Up
      </div>
      <form className="w-[328px] h-[50px] left-[31px] top-[250px] absolute rounded-[10px] border border-zinc-300">
        <input
          type="text"
          placeholder="Enter username"
          className="w-full h-full opacity-50 text-black font-light tracking-tight px-4"
        />
      </form>
      <form className="w-[328px] h-[50px] left-[31px] top-[325px] absolute rounded-[10px] border border-zinc-300">
        <input
          type="text"
          placeholder="Enter email"
          className="w-full h-full opacity-50 text-black font-light tracking-tight px-4"
        />
      </form>
      <form className="w-[328px] h-[50px] left-[31px] top-[400px] absolute rounded-[10px] border border-zinc-300">
        <input
          type="text"
          placeholder="Password"
          className="w-full h-full opacity-50 text-black font-light tracking-tight px-4"
        />
      </form>
      <Link href="/login">
        <button
          onClick={onClickRegister}
          className="w-[342px] h-[54px] left-[24px] top-[513px] absolute"
        >
          <div className="w-[342px] h-[60px] left-0 top-0 absolute bg-neutral-900 rounded-[30px] text-white font-bold hover:bg-neutral-700 flex justify-center items-center">
            Create account
          </div>
        </button>
      </Link>
      <div className="left-[70px] top-[603px] absolute">
        <span className="text-black text-opacity-50 text-sm font-normal tracking-wide">
          Already have an account?
        </span>
        <span className="text-black text-sm font-normal tracking-wide"> </span>
        <Link href="/login">
          <button className="text-black text-sm font-normal underline tracking-wide">
            Login in
          </button>
        </Link>
      </div>
    </div>
  );
}
