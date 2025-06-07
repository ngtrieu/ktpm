import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../slices/userSlice";
import dfLogo from "../../assets/default-account-logo.png";
import { SideBarItems } from "../../static/Data";
import { selectSidebarState } from "../../slices/sidebarSlice";

const StudioSidebar = ({ activeInStudioSidebar, handleStudioSidebarClick }) => {
  const user = useSelector(getUser);
  const sidebarState = useSelector(selectSidebarState);

  return (
    <div
      className={`${
        sidebarState.isStudioSidebarOpen ? "lg:w-[22%]" : "lg:w-[5%]"
      }  Studio-Sidebar w-full md:w-1/4 lg:w-[22%] border-r-[1px] border-[#3e3e3e] flex flex-col items-center md:items-start`}
    >
      <div className="pt-6 pb-1 flex gap-4 flex-col items-center justify-center w-full">
        <img
          src={user ? user.photoURL : dfLogo}
          alt={user?.displayName}
          className={`${
            sidebarState.isStudioSidebarOpen
              ? "md:w-28 md:h-28"
              : "md:w-12 md:h-12"
          }  mt-0 object-contain rounded-full cursor-pointer w-20 h-20 `}
        />
        <div
          className={`${
            sidebarState.isStudioSidebarOpen ? "flex" : "hidden"
          }  gap-1 flex-col justify-center items-center`}
        >
          <span className="text-sm md:text-base text-yt-white">
            Your channel
          </span>
          <span className="text-yt-gray text-xs md:text-sm">
            {user ? user.displayName : "User"}
          </span>
        </div>
      </div>
      <div className="flex-grow yt-scrollbar scrollbar-hide text-[#aaa] p-3 overflow-scroll w-full">
        <div className="mb-4">
          {SideBarItems.channel.map((item, index) => (
            <div
              key={index}
              className={`flex justify-start px-3 py-2 items-center cursor-pointer hover:bg-[#1f1f1f] ${
                item.name === activeInStudioSidebar
                  ? `bg-[#1f1f1f] border-l-2 border-[#ff4e45] text-[#ff4e45]`
                  : ``
              }`}
              onClick={() => handleStudioSidebarClick(item.name)}
            >
              <span className="mr-2 md:mr-5">{item.icon}</span>
              <p className="p-2  text-xs md:text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudioSidebar;