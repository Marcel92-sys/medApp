import {io} from "socket.io-client"

const URl = "http://192.168.43.83:5700";
const socket = io(URl, {autoConnect: false})
// const socket = io()


socket.onAny((event, ...args) => {
    console.log(event, args)
});

export default socket;