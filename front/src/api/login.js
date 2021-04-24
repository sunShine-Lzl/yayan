import axios1 from "@/api/utli";

export function adminLogin(data){
    return axios1({
        url:'/login',
        method:'post',
        data
    })
}