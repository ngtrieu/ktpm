import React from "react";

const ConfirmDeleteModal = ({ handleConfirmDelete, setVideoToDelete }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-yt-black backdrop-filter backdrop-blur-sm bg-opacity-50 z-50">
    <div className="bg-[#1f1f1f] p-4 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
      <h2 className="text-xl text-yt-white font-semibold mb-4">
        Confirm Delete
      </h2>
      <p>Are you sure you want to delete this video?</p>
      <div className="mt-6 flex justify-end">
        <button
          title="Cancel"
          onClick={() => setVideoToDelete(null)}
          className="mr-4 px-4 py-2 bg-yt-gray text-yt-white rounded hover:bg-yt-gray transition-colors duration-300"
        >
          Cancel
        </button>
        <button
          title="Delete"
          onClick={handleConfirmDelete}
          className="px-4 py-2 bg-[#cf0000] text-yt-white rounded hover:bg-yt-red transition-colors duration-300"
        >
          OK
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmDeleteModal;