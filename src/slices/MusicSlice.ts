import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Detailplaylist } from "../Interface";
import musicAPI from "../api/homeApi";
import { Dataplaylist } from "../Interface";
interface MusicState {
    
    isLoading: boolean;
    error?: string;
    curSongId:string | null
    isPlaying:boolean
    detailPlaylist:Dataplaylist
    
  }
  
  let initialState: MusicState= {
    
    isLoading: false,
    error: "",
    curSongId:"ZOACFBBU",
    isPlaying:false,
    detailPlaylist:{} as Dataplaylist
  };
  export const getdetailPlaylist = createAsyncThunk(
    "album/detailplaylist",
    async (payload:string | undefined, { rejectWithValue }) => {
      try {
        const data = await musicAPI.getdetailPlaylist(payload);
  
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  const MusicSlice = createSlice({
    name: "Home/player",
    initialState,
    reducers: {
      setCurrSongID:(state,{payload})=>{
        state.curSongId = payload
      },
      setPlaysong:(state,{payload})=>{
        state.isPlaying = payload
      }
    },
    extraReducers(builder) {
      builder.addCase(getdetailPlaylist.pending, (state, { payload }) => {
        state.isLoading = true;
      });
      builder.addCase(getdetailPlaylist.fulfilled, (state, { payload }) => {
        state.detailPlaylist = payload.data
  
        state.isLoading = false;
      });
      builder.addCase(getdetailPlaylist.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.isLoading = false;
      });
    },
  });
  export const {setCurrSongID,setPlaysong} = MusicSlice.actions
  export default MusicSlice.reducer;