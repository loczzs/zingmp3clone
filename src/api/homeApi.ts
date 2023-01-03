
import axiosClient from "./axiosclient"
import axiosclientSong from "./axiosclientSong";
import { Music } from "../Interface";
import { Audiosong } from "../Interface";
import { Detailplaylist } from "../Interface";
const musicAPI = {
    getHome:()=>{
        return axiosClient.get<unknown,any[]>(`/home`)
    },
    
    getSong: (id:string | null) => {
        return axiosclientSong.get<unknown,Audiosong>(`/song`, {
          params: {
            id:id
          },
        });
      },
      getdetailSong: (id:string | null) => {
        return axiosclientSong.get<unknown,Music>(`/infosong`, {
          params: {
            id:id
          },
        });
      },
      getdetailPlaylist: (id:string | undefined ) => {
        return axiosclientSong.get<unknown,Detailplaylist>(`/detailplaylist`, {
          params: {
            id:id
          },
        });
      },
}

export default musicAPI
