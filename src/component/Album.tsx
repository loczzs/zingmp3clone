import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getdetailPlaylist } from "../slices/MusicSlice";
import { AppDispatch, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from "react-router-dom";
import Listsong from "./Listsong";
import moment from "moment";
const Album: React.FC = () => {
  const { title, id } = useParams();
  const param = useParams();
  const navigate = useNavigate();
 

  const dispatch = useDispatch<AppDispatch>();
  const { curSongId, isPlaying, detailPlaylist } = useSelector(
    (state: RootState) => state.music
  );

  useEffect(() => {
    dispatch(getdetailPlaylist(id));
  }, []);

  return (
    
      <div className="flex h-full gap-6 w-full px-[59px] ">
        <div className="flex-none w-1/4 flex flex-col  gap-2">
          <img
            src={detailPlaylist?.thumbnailM}
            className="w-full object-contain rounded-md shadow-md"
            alt=""
          />
          <div className="flex flex-col items-center gap-1 justify-center">
            <h3 className="text-[15px] font-bold text-gray-800 text-center">
              {detailPlaylist?.title}
            </h3>
            <span className="flex gap-2 items-center text-gray-500 text-xs">
              <span>Cập nhật:</span>
            <span>
                {moment
                  .unix(detailPlaylist?.contentLastUpdate)
                  .format("DD/MM/YYYY")}
              </span>
            </span>
            <p className="text-center flex gap-2 items-center  text-gray-500 text-xs">
              {detailPlaylist?.artistsNames}
            </p>

            <span className="flex gap-2 items-center text-gray-500 text-xs">
              {detailPlaylist?.like > 1000
                ? `${Math.round(detailPlaylist?.like / 1000)}K người yêu thích`
                : `${detailPlaylist?.like} người yêu thích`}
            </span>
          </div>
        </div>
        <Scrollbars style={{ width: "100%", height: "65%" }}>
        <div className="flex-auto  ">
          <span>
            <span className="text-gray-500">Lời tựa</span>{" "}
            <span>{detailPlaylist?.sortDescription?.split('.')[0]}</span>
          </span>
          <div>
            <Listsong
              songs={detailPlaylist?.song?.items}
              totalDuration={detailPlaylist?.song?.totalDuration}
            />
          </div>
        </div>
        </Scrollbars>
      </div>
  
  );
};

export default Album;
