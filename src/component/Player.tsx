import React, { useEffect, useState, useRef } from "react";
import { AppDispatch, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import musicAPI from "../api/homeApi";
import { DataSong } from "../Interface";
import icons from "../icons/icons";
import { setPlaysong } from "../slices/MusicSlice";
import moment from "moment";
import { notification } from "antd";

const {
  AiOutlineHeart,
  AiFillHeart,
  BsThreeDots,
  MdSkipNext,
  MdSkipPrevious,
  CiRepeat,
  BsPauseFill,
  BsFillPlayFill,
  CiShuffle,
} = icons;
var intervalId: any;
const Player: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { curSongId, isPlaying } = useSelector(
    (state: RootState) => state.music
  );

  const [infoSong, setInfoSong] = useState<DataSong | null>(null);
  const [curSecond, setCurseconds] = useState<number>(0);
  const [audio, setAudio] = useState<string|null>(null);
  const [right, setRight] = useState<string>("0%");
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  let audioPlayer = document.getElementById("myAudio") as  HTMLAudioElement | null;
  // console.log(audioPlayer);
  
  // const adioEl = new Audio("https://mp3-s1-zmp3.zmdcdn.me/b36802b4ccf325ad7ce2/1729810351076897325?authen=exp=1671792212~acl=/b36802b4ccf325ad7ce2/*~hmac=157a574e145636a65624980b13dc8e31&fs=MTY3MTYxOTQxMjmUsIC4NHx3ZWJWNnwwfDI3LjExOC4xOC4xNzE")
  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        musicAPI.getdetailSong(curSongId),
        musicAPI.getSong(curSongId),
      ]);
      
      if (res2.err === 0) {
       
        if (res1.err === 0) {
          setInfoSong(res1.data);
        }
          setCurseconds(0)
          setRight(`0%`)
        setAudio(res2.data["128"]);
        
      }else{
        
        notification.error({
          message: 'không thể phát bài nhạc',
          description:
            res2.msg
          
        })
        dispatch(setPlaysong(false));
        audioPlayer && audioPlayer.pause(); 
       
      
        
      }
      
    };

    fetchDetailSong();
  }, [curSongId]);

  // const play = async () => {
  //   await audio.play();
  // };

  useEffect(() => {
    audioPlayer && audioPlayer.load() ;
  
    if (isPlaying) audioPlayer && audioPlayer.play();
  }, [audio]);

  useEffect(() => {
    if (isPlaying) {
      const thumbEl = document.getElementById("thumb-progress");
      intervalId = setInterval(() => {
        if (infoSong?.duration && audioPlayer) {
            let percent =
            Math.round((audioPlayer.currentTime ) / audioPlayer?.duration * 100) ;
            setCurseconds(Math.round(audioPlayer.currentTime))
          // console.log(percent);
          if (thumbRef?.current) {
            thumbRef.current.style.cssText = `width: ${percent}%`;
          }
          // setRight(`${ percent}%`)
        }
      }, 200);
    } else {
      intervalId && clearInterval(intervalId);
    }
  }, [audio,isPlaying]);

  const handleTogglePlayMusic = async () => {
   
    if (isPlaying) {
     
     audioPlayer && audioPlayer.pause(); 
      dispatch(setPlaysong(false));
    } else {
      audioPlayer && audioPlayer.play(); 
      dispatch(setPlaysong(true));
    }
  };
  const handleClickProgressbar =async (e:any)=>{
   
    const trackRect =  trackRef.current?.getBoundingClientRect()
    if(trackRect){
      
        const percent = Math.round((e?.clientX - trackRect?.left)*100 / trackRect?.width) 
        
        if(infoSong?.duration && audioPlayer){
          audioPlayer.currentTime = percent * audioPlayer.duration / 100
          setCurseconds(Math.round(percent * audioPlayer.duration / 100))
        }
        // audioPlayer && audioPlayer.pause(); 
        setRight(`${percent}%`)
        // audioPlayer && audioPlayer.pause()
        // audioPlayer && audioPlayer.play(); 
       
        // if (thumbRef?.current) {
        //   audioPlayer && audioPlayer.pause();
        //   // dispatch(setPlaysong(false));
        //   thumbRef.current.style.cssText = `right: ${100 - percent}%`;
        //   audioPlayer && audioPlayer.play(); 
        //   // dispatch(setPlaysong(true));
        // }
        // audioPlayer && audioPlayer.play(); 
        
        // audioPlayer.currentTime = percent

        
    }
    
  }

  return (
    <div className="bg-main-400 px-5 h-full flex">
      {audio && <audio id="myAudio" src={audio}>
       
        
        
       </audio>}

      <div className="w-[30%] flex-auto flex gap-3 items-center">
        <img
          src={infoSong?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-700 text-sm">
            {infoSong?.title}
          </span>
          <span className="text-xs text-gray-500">
            {infoSong?.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            <AiOutlineHeart size={16} />
          </span>
          <span>
            <BsThreeDots size={16} />
          </span>
        </div>
      </div>
      <div className="w-[40%] flex-auto border flex items-center justify-center gap-4 flex-col border-red-500 py-2">
        <div className="flex gap-8 justify-center items-center">
          <span className="cursor-pointer" title="Bật phát ngẫu nhiên">
            <CiShuffle size={24} />
          </span>
          <span className="cursor-pointer">
            <MdSkipPrevious size={24} />
          </span>
          <span
            className="p-1 border border-gray-700 cursor-pointer hover:text-main-500 rounded-full"
            onClick={handleTogglePlayMusic}
          >
            {isPlaying ? (
              <BsPauseFill size={30} />
            ) : (
              <BsFillPlayFill size={30} />
            )}
          </span>
          <span className="cursor-pointer">
            <MdSkipNext size={24} />
          </span>
          <span className="cursor-pointer" title="Bật phát lại tất cả">
            <CiRepeat size={24} />
          </span>
        </div>
        <div className="w-full flex  px-2 text-xs">
          <p className="">{moment.utc(curSecond * 1000).format("mm:ss")}</p>
          <div
            onClick={handleClickProgressbar}
            ref={trackRef}
            className="bg-[rgba(0,0,0,0.1)] relative m-auto h-[3px] hover:h-[8px] cursor-pointer w-4/5 rounded-l-full rounded-r-full"
          >
            <div
              ref={thumbRef}
              id="thumb-progress"
              // style={{width:right}}
              className="bg-[#0e8080] absolute top-0 left-0  bottom-0 h-full   rounded-l-full rounded-r-full"
            ></div>
          </div>
          
          <p className="">
            {infoSong?.duration &&
              moment.utc(infoSong?.duration * 1000).format("mm:ss")}
          </p>
        </div>
      </div>
      <div className="w-[30%] flex-auto border border-red-500">
        {/* <audio id="audio" autoPlay src={ audio }></audio> */}
      </div>
    </div>
  );
};

export default Player;
