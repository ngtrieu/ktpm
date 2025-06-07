
import React from "react";
import { useSelector } from "react-redux";

const TableRows = ({ handleViewClick, handleDeleteClick, handleEditClick }) => {
  const { userUploadedVideos } = useSelector((state) => state.videos);
  return (
    <>
      {userUploadedVideos.map((video, index) => (
        <tr
          key={index}
          className="border-b-[1px] border-[#3e3e3e] hover:bg-[#2e2e2e]"
        >
          <td className="p-3 w-24 text-center">
            <img
              src={video.thumbnail}
              alt=""
              className="h-18 w-20 object-cover mx-auto rounded-md"
            />
          </td>
          <td className="p-3 w-36 text-center">
            {video?.name?.length <= 25
              ? video.name
              : `${video.name.substr(0, 25)}...`}
          </td>
          <td className="p-3 w-64 text-center">
            {video?.description?.length <= 25
              ? video.description
              : `${video.description.substr(0, 25)}...`}
          </td>
          <td className="p-3 w-24 text-center">{video.category}</td>
          <td className="p-3 w-48 text-center">{video.link}</td>
          <td className="p-3 w-24 text-center">
            <img
              src={video.logo}
              alt=""
              className="h-9 w-9 rounded-full mx-auto"
            />
          </td>
          <td className="p-3 w-36 text-center">{video.channel}</td>
          <td className="p-3 w-24 text-center">{video.duration}</td>
          <td className="p-3 w-24 text-center">{video.subscribers}</td>
          <td className="p-3 w-36 text-center">{video.uploadTime}</td>
          <td className="p-3 w-24 text-center">{video.views}</td>
          <td className="p-3 w-24 text-center">
            <button
              title="View"
              onClick={() => handleViewClick(video)}
              className="text-[rgb(92,231,92)] hover:text-[rgb(59,255,59)] transition-colors duration-300"
            >
              View
            </button>
          </td>
          <td className="p-3 w-24 text-center">
            <button
              title="Edit"
              onClick={() => handleEditClick(video)}
              className="text-[rgb(213,255,59)] hover:text-[rgba(204,255,116,0.85)] transition-colors duration-300"
            >
              Edit
            </button>
          </td>
          <td className="p-3 w-24 text-center">
            <button
              title="Delete"
              onClick={() => handleDeleteClick(video)}
              className="text-[#ff0e0e] hover:text-[#ff0000] transition-colors duration-300"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRows;
