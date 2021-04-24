import axios1 from "@/api/utli";

export function searchPhone(data) {
  return axios1({
    url: "/userPhone",
    method: "get",
    params: { data },
  });
}
export function searchPage(params) {
  return axios1({
    url: "/userPage",
    method: "get",
    params,
  });
}
export function searchStrip() {
  return axios1({
    url: "/userStrip",
    method: "get",
  });
}
export function addUser(data) {
  return axios1({
    url: "/userAdd",
    method: "post",
    data
  });
}
export function editUser(data) {
  return axios1({
    url: "/userPut",
    method: "put",
    data
  });
}
export function deleteUser(params) {
  return axios1({
    url: "/userDelete",
    method: "delete",
    params
  });
}


