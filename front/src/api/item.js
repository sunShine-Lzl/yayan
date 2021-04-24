import axios1 from "@/api/utli";

export function searchItem(params) {
  return axios1({
    url: "/itemSearch",
    method: "get",
    params,
  });
}
export function initItem(params) {
  return axios1({
    url: "/itemPage",
    method: "get",
    params,
  });
}
export function searchAll() {
  return axios1({
    url: "/itemAll",
    method: "get",
  });
}
export function editItem(data) {
  return axios1({
    url: "/putItem",
    method: "put",
    data,
  });
}
export function addItem(data) {
  return axios1({
    url: "/addItem",
    method: "post",
    data,
  });
}
export function deleteItem(params) {
  return axios1({
    url: "/deleteItem",
    method: "delete",
    params,
  });
}
