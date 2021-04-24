import axios from "axios";

const axios1 = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 500000,
});

//添加请求拦截器，会在发起请求之前执行相应的需求
axios1.interceptors.request.use(
  function(config) {
    console.log("我是请求拦截器");
    config.headers.common["Authorization"] =
      "Bearer " + sessionStorage.getItem("token");
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// //添加响应拦截器，会在返回数据后先执行相应的需求
axios1.interceptors.response.use(
  function(response) {
    console.log("我是响应拦截器", response);
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    console.log("error", error.status);

    return Promise.reject(error);
  }
);
export default axios1;
