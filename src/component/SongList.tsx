import React, { memo } from "react";
import { Item } from "../Interface";
import icons from "../icons/icons";
import moment from "moment";
import { setCurrSongID,setPlaysong } from "../slices/MusicSlice";
import { AppDispatch, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";

const { BsMusicNoteBeamed } = icons;
interface SongList {
  songData: Item;
}
const SongList: React.FC<SongList> = ({ songData }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { curSongId, isPlaying,isLoading } = useSelector(
    (state: RootState) => state.music
  );
  return (
    <div
      className="flex justify-between items-center p-[10px] border-t  border-[rgba(0,0,0,0.05)]  hover:bg-[#DDE4E4] cursor-pointer"
      onClick={() => {
        dispatch(setCurrSongID(songData?.encodeId))
      
        dispatch(setPlaysong(true))
      
      }}
    >
      <div className="flex items-center gap-3 flex-1">
        <span>
          <BsMusicNoteBeamed />
        </span>
        <img
          src={songData?.thumbnail}
          alt="thumbnailM"
          className="w-10 h-10 object-cover rounded-md"
        />
        <span className="flex flex-col w-full">
          <span className="text-xs font-semibold">
            {songData?.title?.length > 30
              ? `${songData?.title?.slice(0, 30)}...`
              : songData?.title}
          </span>
          <span>{songData?.artistsNames}</span>
        </span>
      </div>
      <div className="flex-1 flex items-center justify-center pl-10 ">
        {songData?.album?.title && songData?.album?.title?.length > 30 ? `${songData?.album?.title?.slice(0, 30)}...` : songData?.album?.title}
        {/* {songData?.album?.title?.slice(0, 30)}{songData?.album?.title && songData?.album?.title?.length > 30 } */}
      </div>
      <div className="flex-1 flex justify-end">
        {moment.utc(songData?.duration * 1000).format("mm:ss")}
      </div>
    </div>
  );
};

export default memo(SongList);
