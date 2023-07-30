"use client";

import Link from "next/link";

import { useContext } from "react";
import { AppContext } from "../layout";

export default function Login() {
  const { account, setAccount } = useContext(AppContext);

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLogOut = () => {
    setAccount("");
  };

  return (
    <>
      <div className="w-[276px] left-[48px] top-[50px] absolute text-black text-4xl font-bold tracking-wide mt-20">
        쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라
      </div>
      <Link href="/register">
        <button className="w-[160px] h-[60px] left-[24px] bottom-[80px] absolute border-2 rounded-[30px] bg-neutral-900 text-white font-bold hover:bg-neutral-600">
          Register
        </button>
      </Link>
      <Link href="/main">
        <button
          onClick={onClickAccount}
          className="w-[160px] h-[60px] right-[24px] bottom-[80px] absolute border-2 rounded-[30px] bg-neutral-900 text-white font-bold hover:bg-neutral-600"
        >
          Sign in
        </button>
      </Link>
    </>
  );
}
