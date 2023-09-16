import React from "react";
import BellIcon from "../../images/bellIcon.svg";
import Avatar from "../../images/avatar.svg";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-surface1 border-border1  border-b px-[3rem] py-[0.75rem] col-start-4 row-span-1 row-start-1 col-span-full">
      <h3 className="text-[1.6rem] font-bold text-[#FFFFFF]">Dashboard</h3>
      <div className="icons flex flex-row space-x-[2rem]">
        <img src={BellIcon} alt="bellIcon" />
        <img src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Navbar;
