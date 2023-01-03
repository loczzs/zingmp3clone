import React, { useEffect } from "react";
import Header from "../component/Header";
import musicAPI from "../api/homeApi";
import { getBannerList } from "../slices/HomeSlice";
import { AppDispatch, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import SliderHome from "../component/SliderHome";
import Playlist from "../component/Playlist";
import Scrollbars from "react-custom-scrollbars-2";
const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const { items, isLoading, error } = useSelector(
  //   (state: RootState) => state.home
  // );
  useEffect(() => {
    dispatch(getBannerList());
  }, []);

  return (
    <div className="h-full ">
      <Scrollbars style={{ width: "100%", height: "100%" }}>
        <SliderHome />
        <Playlist />
      </Scrollbars>
    </div>
  );
};

export default Home;
