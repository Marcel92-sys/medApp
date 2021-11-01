import {io} from "socket.io-client"

const URl = "https://medapp21.herokuapp.com";
const socket = io(URl, {autoConnect: false})
// const socket = io()


socket.onAny((event, ...args) => {
    console.log(event, args)
});

export default socket;