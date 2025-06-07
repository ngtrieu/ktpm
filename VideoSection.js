import React from "react";
import { Link } from "react-router-dom";
import Video from "./Video";
import { TailSpin } from "react-loader-spinner";

const VideoSection = ({ status, videos, error, errorMsg }) => {
  return (
    <div className="pt-8 px-5 pb-12 grid grid-cols-yt gap-x-3 gap-y-8">
      {videos?.length === 0 ? (
        <div className="h-[86vh]">
          <div className="h-full flex items-center justify-center">
            {status !== "loading" ? (
              <p className="p-3 text-yt-white absolute top-[24rem]">
                {errorMsg}
              </p>
            ) : (
              ""
            )}
            {status === "loading" && (
              <span className="absolute top-72">
                <TailSpin
                  visible={true}
                  height="40"
                  width="40"
                  color="#fff"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </span>
            )}
            {status === "failed" && <p className="text-yt-red">{error}</p>}
          </div>
        </div>
      ) : (
        videos.map((video) => (
          <Link to={`/video/${video.id}`} key={video.id}>
            <Video {...video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoSection;