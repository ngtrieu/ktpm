
import React, { useState } from "react";
import { ChannelCategoryItems } from "../../static/Data";
import VideoTable from "./VideoTable";
import { useSelector } from "react-redux";
import SignInComponent from "../helper/SignInComponent";

const ContentComponent = () => {
  const { user } = useSelector((state) => state.userInfo);

  const [activeInTopbar, setActiveInTopbar] = useState("Videos");
  const handleTopbarClick = (category) => {
    setActiveInTopbar(category);
  };

  return (
    <>
      <div className="h-[3rem] flex flex-row px-6 pt-0 overflow-x-scroll relative scrollbar-hide border-b-[1px] border-[#3e3e3e]">
        {ChannelCategoryItems.map((item, i) => (
          <p
            className={`text-sm flex justify-start p-3 items-center cursor-pointer ${
              item === activeInTopbar
                ? `border-b-[3px] border-[#3ea6ff] text-[#3ea6ff]`
                : ``
            }`}
            onClick={() => handleTopbarClick(item)}
            key={i}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="h-[80%]">
        {activeInTopbar === "Videos" ? (
          user ? (
            <VideoTable errorMsg={"No videos found"} />
          ) : (
            <div className="flex items-center justify-center h-full ">
              <SignInComponent
                prefix={"Please"}
                postfix={`view ${activeInTopbar}`}
              >
                sign in
              </SignInComponent>
            </div>
          )
        ) : user ? (
          <div className="flex items-center justify-center h-full text-yt-white">
            Coming Soon...{" "}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full ">
            <SignInComponent
              prefix={"Please"}
              postfix={`view ${activeInTopbar}`}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ContentComponent;
