import axios  from "axios";

const instance = axios.create({
    baseURL: "http://192.168.43.83:5700/api/v1"
})


export default instance
