import { signInWithPopup } from "firebase/auth";
import React from "react";
import { setUser } from "../slices/userSlice";
import { auth, provider } from "../firebase";
import { setUserUploadedVideos } from "../slices/videoSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const SignInComponent = ({ children, prefix, postfix, className }) => {
  const dispatch = useDispatch();
  const { allVideos } = useSelector((state) => state.videos);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await signInWithPopup(auth, provider);
    setUser(response.user);
    dispatch(
      setUserUploadedVideos(
        allVideos.filter((video) => video.uploadedBy === response.user?.email)
      )
    );
  };
  return (
    <>
      <div className={`${!className && "text-center p-12"}`}>
        {`${prefix ? prefix : ""} `}
        <button
          className={`${
            className ? className : "text-yt-blue hover:underline"
          }`}
          onClick={(e) => handleLogin(e)}
        >
          {children}
          {prefix ? "sign in" : "Sign in"}
        </button>{" "}
        {`${postfix ? `to ${postfix.toLowerCase()}` : ""} `}
      </div>
    </>
  );
};

export default SignInComponent;