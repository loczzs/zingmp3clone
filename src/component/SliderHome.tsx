import React, { useEffect, useState,useRef} from "react";
import { getBannerList } from "../slices/HomeSlice";
import { AppDispatch, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BannerHome } from "../Interface";
import { setCurrSongID } from "../slices/MusicSlice";
import { setPlaysong } from "../slices/MusicSlice";


const SliderHome: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const { lisBanner, isLoading, error } = useSelector(
    (state: RootState) => state.home
  );
  //   console.log(lis);
  // const [min, setMin] = useState<number>(0);
  const [list, setList] = useState<number[]>([1,3,5]);

 
  
  const filterBanner = (
    start: number,
    end: number,
    number: number
  ) => {
    const limit:number = start > end ? number : end
    let output = []
    for (let i = start; i <= limit; i++) {
        output.push(i)
    }
    if (start > end) {
        for (let i = 0; i <= end; i++) {
            output.push(i)
        }
    }
    setList(output)
   
  };

  useEffect(() => {
    const sliderEls = document.getElementsByClassName('slider-item')
   
   let min =0
   let max =2
  //  console.log({min,max});
   
    const intervalId = setInterval(() => {
       filterBanner(min, max, sliderEls.length - 1)
       
            for (let i = 0; i < sliderEls.length; i++) {
                // Delete classnames (css)
                sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
                sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
                sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10')

                // Hide or Show images
               
            }
            // Add animation by adding classnames
            list?.forEach(item => {
                if (item === max) {
                    sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20',)
                } else if (item === min) {
                    sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10',)
                } else {
                    sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10',)
                }
            })
            min = (min === sliderEls.length - 1) ? 0 : min + 1
            max = (max === sliderEls.length - 1) ? 0 : max + 1
            // console.log({min,max});
            
        
    }, 3000);
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);
  const handleClickBanner = (item:BannerHome) => {
    if (item?.type === 1) {
       dispatch(setCurrSongID(item.encodeId))
       dispatch(setPlaysong(true))
    } else if (item?.type === 4) {
      const albumPath = item?.link?.split('.')[0]
      navigate(albumPath)
    }
}
  return (
   <div className='w-full overflow-hidden px-[59px] duration-1000'>
     <div className='flex w-full gap-8 pt-8 duration-1000'>
      {lisBanner?.map((item: BannerHome, index: number) => {
       let display:string = "hidden"
       if (list?.some(item => item === index)) {
                display ="block"
       }
        return (
          <img
          style={{cursor:"pointer"}}
          onClick={() => {
            handleClickBanner(item)
           
          }}
          // style={{transition:"all 2s"}}
            key={item.encodeId}
            src={item.banner}
            className={`slider-item ${display} rounded-lg w-[30%] flex-1 object-contain  `}
            alt=""
          />
        );
      })}
    </div>
   </div>
  );
};

export default SliderHome;
