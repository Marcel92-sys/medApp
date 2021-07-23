
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`surname:`, surname)
        
        console.log(`password:`, password)
        setUserName(true);
        navigation.replace("Dashboard")
        // socket.auth = {surname}

        // console.log(`here's cocket.auth:`,socket.auth)
        // socket.connect()
    }



    // invalidating a user

    socket.on("connect_error", (err) => {
        if (err.message === "invalid surname") {
            setUserName(false)
        }
    });

    socket.on("users", (users) => {
        users.forEach((user) => {
            user.self = user.userID === socket.id;
            initReactiveProperties(user);
        });

        // putting the current user first , then sort by username

        this.users = users.sort((a,b) => {
            if (a.self) return -1;
            if (b.self) return 1;
            if(a.username < b.username) return -1;
            return a.username > b.username ? 1 : 0;
        })
    })

    // recieving and listing users
        socket.on("user connected", (user) => {
            initReactiveProperties(user);
            this.users.push(user);
        })

        // private messaging (sending)
        // onmessage(content)  {
        // //     if (this.selectedUser) {
        //         socket.emit("private message", {
        //             content, 
        //             to : this.selectedUser.userID
        //         });
        //         this.selectedUser.messages.push({
        //             content,
        //             fromSelf : true
        //         });
        //     }
        // }



        // "client(recipient)"
        
        socket.on("private message", ({content, from}) => {
            for (let i=0; i < this.users.length; i++) {
                const user = this.users[i];
                if (user.userID === from) {
                    user.messages.push({
                        content,
                        fromSelf: false,
                    })
                    if(user !== this.selectedUser) {
                        user.hasNewMessages = true;
                    }
                    break;
                }
            }
        })

        // connection listening

        socket.on("connect", () => {
            this.user.forEach((user) => {
                if(user.self) {
                    user.connected = true;
                }

            }
            )
        })

        // disconnection listener
        socket.on("disconnect", () => {
            this.users.forEach((user) => {
                if (user.self) {
                    user.connected = false
                }
            })
        })

        // recieving session and saving to localStorage
        socket.on("session", ({sessionID, userID}) => {
            // attach the sessionID to the next reconnection attempts
            socket.auth = {sessionID};

            // storing session
            localStorage.setItem("sessionID", sessionID);
            // save userID
            socket.userID = userID;
        })




        // fetching sessionID on application startup
// created() {
//     const sessionID = localStorage.getItem("sessionId")

//     if (sessionID) {
//         setUserName = true
//         socket.auth = {sessionID};
//         socket.connect();
//     }
// }
