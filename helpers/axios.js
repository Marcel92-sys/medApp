import axios  from "axios";

const instance = axios.create({
    baseURL: "https://medapp21.herokuapp.com/api/v1"
    // "http://192.168.43.83:5700/api/v1"
})


export default instance
