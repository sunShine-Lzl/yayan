import axios1 from "@/api/utli";
export function searchcsp(params) {
  return axios1({
    url: "/cspSearch",
    method: "get",
    params,
  });
}
export function initcsp(params) {
  return axios1({
    url: "/cspPage",
    method: "get",
    params,
  });
}
export function searchAll() {
  return axios1({
    url: "/cspAll",
    method: "get",
  });
}