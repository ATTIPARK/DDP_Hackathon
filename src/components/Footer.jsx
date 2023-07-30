import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { RiBookReadLine } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="absolute w-full bottom-0 border-t py-4 border-gray-300 ">
      <div className="flex justify-around text-5xl text-black ">
        <button>
          <RiHomeLine />
        </button>
        <button>
          <RiBookReadLine />
        </button>
        <button>
          <HiOutlineHeart />
        </button>
        <button>
          <FiUser />
        </button>
      </div>
    </div>
  );
};

export default Footer;
