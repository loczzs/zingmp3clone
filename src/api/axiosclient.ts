import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
  baseURL: "https://api-zingmp3-vercel.vercel.app/api",
});
axiosClient.interceptors.response.use(
  // thành công
  (response) => {
    // ta có thể thay đổi respone trước khi respone đc trả ra cho nơi gọi request,
    // respone.data : format của axios
    // .content: format của cybersoft
    return response.data.data.items
;
  },
  // thất bại
  (error: AxiosError) => {
    //ta có thể thay đổi error trước khi error đc trả ra cho nơi gọi request
    Promise.reject(error.response?.data );
  }
);
export default axiosClient;