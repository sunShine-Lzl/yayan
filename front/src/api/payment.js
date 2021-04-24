import axios1 from "@/api/utli";
//根据手机号查询用户信息
export function searchUser(params) {
  return axios1({
    url: "/payPhone",
    method: "get",
    params,
  });
}
//查询所有项目
export function searchItem(params) {
  return axios1({
    url: "/payItem",
    method: "get",
    params,
  });
}
//添加记录到数据库
export function addRecord(data) {
  return axios1({
    url: "/payRecord",
    method: "post",
    data,
  });
}
//页面初始化查询record表单分页器内容渲染
export function init(params) {
  return axios1({
    url: "/payPage",
    method: "get",
    params,
  });
}
//页面初始化查询record表单分所有内容 获取length
export function initAll() {
  return axios1({
    url: "/payAll",
    method: "get",
    
  });
}
//更改账户余额并删除
export function settlement(params) {
  return axios1({
    url: "/pay",
    method: "get",
    params,
  });
}
//删除记录
export function deleteRecord(params) {
  return axios1({
    url: "/pay",
    method: "delete",
    params,
  });
}