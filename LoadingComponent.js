import React from "react";
import { TailSpin } from "react-loader-spinner";

const LoadingComponent = ({ status, errorMsg, error }) => (
  <div className="h-full flex items-center justify-center">
    {status === "loading" && (
      <span className="absolute top-72">
        <TailSpin visible height="40" width="40" color="#fff" />
      </span>
    )}
    {status === "failed" && <p className="text-yt-red">{error}</p>}
    {status !== "loading" && (
      <p className="p-3 text-yt-white absolute top-[24rem]">{errorMsg}</p>
    )}
  </div>
);

export default LoadingComponent;