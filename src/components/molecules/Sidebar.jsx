import React from "react";
import logo from "../../images/ascendLogo.svg";
import dashboardLogo from "../../images/dashboardIcon.svg";

const Sidebar = () => {
  const sideBarLinks = [
    {
      id: 1,
      content: "Dashboard 1",
    },
    {
      id: 2,
      content: "Dashboard 2",
    },
    {
      id: 3,
      content: "Dashboard 3",
    },
    {
      id: 4,
      content: "Dashboard 4",
    },
    {
      id: 5,
      content: "Dashboard 5",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between col-start-1 col-span-3 row-start-1 h-screen p-2 bg-surface0 border-r border-border1">
      <div className="flex flex-col items-center w-full space-y-2">
        <img src={logo} alt="CompanyLogo" className="mb-[2rem] mt-[1rem]" />
        {sideBarLinks.map(({ id, content }) => (
          <div
            key={id}
            className="flex flex-row jusitfy-around items-center w-[90%] text-white bg-gray-800 rounded-lg"
          >
            <button className="text-[1.1rem] flex flex-row items-center md:gap-3 sm:py-[1rem] sm:px-[1rem] justify-center rounded-lg w-full text-[#FFFFFF] hover:bg-surface1 active:text-accent1 active:bg-surface1 font-bold">
              <img
                src={dashboardLogo}
                alt="dashboardIcon"
                className="active:text-accent1"
              />
              <h4 className="hidden xl:flex">{content}</h4>
            </button>
          </div>
        ))}
      </div>
      <div className="hidden sm:flex flex-col items-start gap-4 px-4 w-full">
        <p className="text-xs text-bodyDark font-semibold">Terms of Use</p>
        <p className="text-xs text-bodyDark font-semibold">Privacy Policy</p>
        <p className="text-xs text-surface3 font-semibold mt-4">
          All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
