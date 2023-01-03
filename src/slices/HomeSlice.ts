import musicAPI from "../api/homeApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BannerHome,PlaylistHome } from "../Interface";
import { Dataplaylist } from "../Interface";

interface HomeState {
  lisBanner: BannerHome[];
  isLoading: boolean;
  error?: string;
  Playlist:PlaylistHome;

  
 
  
}

let initialState: HomeState = {
  lisBanner: [],
  isLoading: false,
  error: "",
  Playlist:{} as PlaylistHome
  
};

export const getBannerList = createAsyncThunk(
  "home/bannerlist",
  async (_, { rejectWithValue }) => {
    try {
      const data = await musicAPI.getHome();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const HomeSlice = createSlice({
  name: "Home/listhome",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder.addCase(getBannerList.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getBannerList.fulfilled, (state, { payload }) => {
      
      
      state.lisBanner = payload[0]?.items;
      state.Playlist  = payload[2]

      state.isLoading = false;
    });
    builder.addCase(getBannerList.rejected, (state, { payload }) => {
      state.error = payload as string;
      state.isLoading = false;
    });
  },
});
export default HomeSlice.reducer;
