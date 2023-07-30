import React, { useEffect, useState } from "react";
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";

const Header = () => {
  const [time, setTime] = useState(getTime());

  function getTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    return formattedTime;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-evenly text-lg font-bold" id="navbar">
      <div className="mt-2 mx-4">{time}</div>
      <div className="w-[180px] h-[40px] bg-neutral-900 rounded-b-xl"></div>
      <div className="flex text-xl mt-2 gap-2">
        <FaSignal />
        <FaWifi />
        <FaBatteryFull />
        {/* <img
          src={`${process.env.PUBLIC_URL}/images/RightSide.svg`}
          alt="Right Side Icon"
        /> */}
      </div>
    </div>
  );
};

export default Header;
