import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, setVideos } from "../slices/videoSlice";
import { SideBarItems } from "../static/Data";
import RenderSidebarItems from "./RenderSidebarItems";
import { selectSidebarState } from "../slices/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { allVideos } = useSelector((state) => state.videos);
  const [active, setActive] = useState("Home");
  const sidebarState = useSelector(selectSidebarState);

  const handleFilter = useCallback(
    (category) => {
      if (category !== "Home") {
        category = category === "Movies" ? "Movie" : category;
        dispatch(filterByCategory(category));
      } else {
        dispatch(setVideos(allVideos));
      }
    },
    [dispatch, allVideos]
  );

  const handleItemClick = (category) => {
    setActive(category);
    handleFilter(category);
  };

  return (
    <div
      className={`sidebar ${
        sidebarState.isOpen ? "translate-x-0" : "-translate-x-full"
      }  inset-y-0 w-[17%] text-white transition-transform duration-300 ease-in-out
      sidebar yt-scrollbar scrollbar-hide bg-yt-black h-[calc(100vh-53px)] fixed top-14 left-0 text-yt-white p-3 overflow-scroll max-1054:hidden`}
    >
      <div className="mb-4">
        <RenderSidebarItems
          items={SideBarItems.Top}
          active={active}
          onItemClick={handleItemClick}
          activeColor="yt-light-black" // Example active color
          backgroundColor="yt-black"
        />
      </div>
      <hr className="text-yt-light-black my-2" />
      <div className="mb-4">
        <RenderSidebarItems
          items={SideBarItems.Middle}
          active={active}
          onItemClick={handleItemClick}
          activeColor="yt-light-black" // Example active color
          backgroundColor="yt-black"
        />
      </div>
      <hr className="text-yt-light-black my-2" />
      <h2 className="pt-1 px-3">Explore</h2>
      <div className="mb-4">
        <RenderSidebarItems
          items={SideBarItems.Explore}
          active={active}
          onItemClick={handleItemClick}
          activeColor="yt-light-black" // Example active color
          backgroundColor="yt-black"
        />
      </div>
      <hr className="text-yt-light-black my-2" />
    </div>
  );
};

export default Sidebar;