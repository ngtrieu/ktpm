import React from "react";

const RenderSidebarItems = ({
  items,
  active,
  onItemClick,
  activeColor,
  backgroundColor,
}) => {
  return items.map((item, index) => (
    <div
      key={index}
      className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-${activeColor} my-1 ${
        item.name === active ? `bg-${activeColor}` : `bg-${backgroundColor}`
      }`}
      onClick={() => onItemClick(item.name)}
    >
      <span className="mr-5">{item.icon}</span>
      <p className="p-2 text-sm font-medium">{item.name}</p>
    </div>
  ));
};

export default RenderSidebarItems;