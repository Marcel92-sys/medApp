import React, {useState, useEffect} from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, KeyboardAvoidingView,Text, View, FlatList,Button,ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import socket from '../helpers/socket'
import { Ionicons } from '@expo/vector-icons'
import { Keyboard } from 'react-native'
const Chat = () => {
        const [message, setMessage] = useState("")
        const [usernameSelected, setUsernameSelected] = useState(false)
        const [readChats, setReadChats] = useState([])

        const handleSend = (e) => {
            Keyboard.dismiss()
            e.preventDefault;
            console.log("Button got pressed")
            socket.emit("messageSent", message)
            socket.on("sendToClient", (data) => {
                setReadChats(data)
                console.log(readChats)
            })

        }
        useEffect(() => {
            setUsernameSelected(true)
            socket.auth = {name:"message"}
            socket.connect();
            // console.log("here's the entered message %s", message);
            socket.on("connect_error", (err) => {
                if (err.message === "invalid name"){
                    setUsernameSelected(false);
                }
            })


          function destroyed() {
            socket.off("connect_error")
            }
        }, [])

 
    return (
        <View style={styles.main} >

            <ScrollView>


                    {/* <FlatList 
                        data=
                        {[{key:1, name: "cardone"},{key:2, name: "cardone"},
                        {key:3, name: "cardone"},{key:4, name: "cardone"},
                        {key:5, name: "cardone"}, {key:6, name: "cardone"}]}
                        
                        renderItem={ ({item}) => 
                        
                                <Text>{item.name}</Text>
                            
                        }
                    /> */}

                    <View>

                        <Text>Sent messages</Text>
                        <View>
                            <Text>{readChats.map((i) => {
                                <Text>{i}</Text>
                            })}</Text>
                        </View>

                    </View>
                    
                    

                </ScrollView>
                        
                <KeyboardAvoidingView style={styles.container}>
                    <TextInput 
                        style={{width:'80%',paddingLeft: 10,}}
                        onSubmitEditing={handleSend}
                        onChangeText={(text) => setMessage(text)}
                        placeholder="Enter Message"/>
                   <TouchableOpacity>
                       <Ionicons name='send'onPress={handleSend} disabled={!message} size={24} color="green" />
                   </TouchableOpacity>
                </KeyboardAvoidingView>

        </View>
    )
}


export default Chat

const styles = StyleSheet.create({
    main: {
        flex:1
    },
container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    marginBottom: 10,
    position:'absolute',
    bottom:0
    
  },

})
