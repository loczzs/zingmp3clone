import React from "react";
import { AppDispatch, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../Interface";
import { useNavigate } from "react-router-dom";
const Playlist = () => {
  const { Playlist, isLoading, error } = useSelector(
    (state: RootState) => state.home
  );
  const navigate = useNavigate()

  const handleClickBanner = (link: string) => {
    const albumPath = link?.split('.')[0]
    navigate(albumPath)
  };
  return (
    <div className="mt-10 w-full overflow-hidden px-[59px] duration-1000 mb-40  ">
      <h1 className="text-lg text-gray-700 font-semibold ">
        {Playlist?.title}
      </h1>
      <div className="flex flex-wrap ">
        {Playlist?.items?.map((item: Item) => {
          return (
            <div 
            onClick={()=>handleClickBanner(item?.link)}
            className="w-1/5 mb-5  p-2 cursor-pointer">
              <img src={item?.thumbnailM} alt="" />
              <span className="text-sm">{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
