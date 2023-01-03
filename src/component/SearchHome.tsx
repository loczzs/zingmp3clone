import React from "react";
import icons from "../icons/icons";
const { FiSearch } = icons;
const SearchHome = () => {
  return (
    <div className="w-full flex items-center">
      <span className="h-10 pl-4 bg-[#DDE4E4] flex items-center  text-gray-500 justify-center rounded-l-[20px]">
        <FiSearch size={24} />
      </span>
      <input
        type="text"
        className="outline-none
        bg-[#DDE4E4] px-4 py-2
        h-10 rounded-r-[20px]
        w-full
        text-gray-500"
        placeholder="Tìm kiếm bài hát ,nghệ sĩ lời bài hát..."
      />
    </div>
  );
};

export default SearchHome;
