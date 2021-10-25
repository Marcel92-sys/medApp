import React, {useState,useLayoutEffect, useEffect} from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, KeyboardAvoidingView,Text, View, FlatList,Button,ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import socket from '../helpers/socket'
import { Ionicons } from '@expo/vector-icons'
import { Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'


const Chat = ({navigation, route}) => {
        
        const [message, setMessage] = useState("")
        const [usernameSelected, setUsernameSelected] = useState(false)
        const [readChats, setReadChats] = useState([])

        const dispatch = useDispatch();
        const inUser = useSelector(state => state.userSignin)
        const {user, loading, error} = inUser

        const handleSend = (e) => {
            Keyboard.dismiss()
            e.preventDefault;
            console.log(route.params)
            console.log(user)
            let sentItem = {
                "message": message,
                "to": route?.params.id,
                "from": user?._id
            }
            // console.log(sentItem)
            // socket.emit("messageSent", sentItem)

            socket.on("sendToClient", (data) => {
                setReadChats(data)
                console.log(readChats)
            })

        }
        useEffect(() => {
            socket.connect();
            socket.on("connect_error", (err) => {
                if (err.message === "invalid name"){
                }
            })


          function destroyed() {
            socket.off("connect_error")
            }
        }, []);

        useLayoutEffect(() =>{
            navigation.setOptions({
                title: "Ok_Medical",
                headerStyle: {backgroundColor:"white"},
                headerTitleStyle:{color:'black'},
                headerTintColor:'black',
                headerTitle: () => (
                    <View style={{alignItems:'center'}}>
                        <Text>{route.params.name} {' '} {route.params.surname} </Text>
                    </View>
                )
            })

        },[navigation]);



 
    return (
        <View style={styles.main} >

            <ScrollView>


                    <View>
                        <View key={route.params.id}>
                            <Text>{route.params.name} {' '} {route.params.surname} </Text>
                            {/* <Text>{readChats.map((i) => {
                                <Text>{i}</Text>
                            })}
                                <Text>{Date.now()}</Text>
                            </Text> */}
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
