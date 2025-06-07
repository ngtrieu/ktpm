import React from "react";
import { MdVerified } from "react-icons/md";

const RecommendVideo = ({
  logo,
  thumbnail,
  name,
  channel,
  views,
  uploadTime,
}) => {
  return (
     <div className="text-yt-white md:flex cursor-pointer mb-1">
      <img
        src={thumbnail}
        alt=""
        className=" w-[100%] h-[14rem] md:h-[9.5rem] md:w-[30%] lg:w-[50%] lg:h-[6.5rem] rounded-[10px] p-1"
      />
      <div className="p-2 flex gap-2">
        <img
          src={logo}
          alt=""
          className="h-[3rem] md:hidden rounded-full p-1"
        />
        <div>
          <h2 className="font-medium text-[#fff] md:text-md lg:text-sm mt-0 mb-0 items-center">
            {name.length <= 50 ? name : `${name.substr(0, 60)}...`}
          </h2>
          <div className="flex md:block items-center ">
            <h3 className="text-[#909090] font-medium md:text-md lg:text-xs mt-1 md:mt-0 flex items-center">
              {channel}
              <span className="p-1 hidden md:block">
                <MdVerified />
              </span>
              <span className="p-1 md:hidden block">{`•`}</span>
            </h3>
            <h3 className="text-[#909090] font-medium md:text-md lg:text-xs mt-1 md:mt-0 flex items-center">
              {views} Views • {uploadTime}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendVideo;