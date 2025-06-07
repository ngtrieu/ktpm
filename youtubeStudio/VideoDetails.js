import React from "react";
import { CgClose } from "react-icons/cg";

const VideoDetails = ({ video, onClose }) => {
  const videoDetails = [
    { label: "Category", value: video.category },
    { label: "IFrame Link", value: video.link },
    { label: "Channel", value: video.channel },
    { label: "Duration", value: video.duration },
    { label: "Subscribers", value: video.subscribers },
    { label: "Upload Time", value: video.uploadTime },
    { label: "Views", value: video.views },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-[2px] bg-opacity-50 z-50">
      <div className="bg-[#1f1f1f] p-4 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
        <div className="bg-[#1f1f1f]  p-4">
          <div className="flex items-center mb-4 justify-between border-b-[1px] border-[#3e3e3e] pb-4">
            <p className="text-yt-white text-xl">Video Details</p>
            <button
              title="Close"
              onClick={onClose}
              className="flex items-center text-yt-white hover:text-yt-blue transition-colors duration-300"
            >
              <CgClose className="mr-2" size={25} />
            </button>
          </div>
          <div className="scrollbar-hide text-yt-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={video.thumbnail}
                  alt=""
                  className="h-72 w-auto object-contain rounded-lg shadow-md mb-4"
                />
                <img
                  src={video.logo}
                  alt=""
                  className="h-16 w-16 object-cover rounded-full shadow-md mt-12 mb-3"
                />
                <p className="text-sm font-normal mb-2 text-yt-blue">
                  Channel Logo
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-md mb-2 text-yt-white font-normal ml-auto">
                  {video.name}
                </p>
                <p className="text-sm font-normal text-yt-blue mb-2">
                  Description
                </p>
                <p className="text-xs mb-4 font-normal">{video.description}</p>
                <div className="grid grid-cols-2 gap-4 items-center">
                  {videoDetails.map((detail, index) => (
                    <React.Fragment key={index}>
                      <p className="text-sm font-normal text-yt-blue">
                        {detail.label}
                      </p>
                      <p className="text-xs font-normal">{detail.value}</p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
