import React, {useState,useLayoutEffect, useEffect, useRef} from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, KeyboardAvoidingView,Text, View, TextInput,Button,ScrollView } from 'react-native'
import socket from '../helpers/socket'
import { Ionicons } from '@expo/vector-icons'
import { Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { getMessagesByMe } from '../helpers/apiCalls'


const Chat = ({navigation, route}) => {
    const [message, setMessage] = useState("")
    const [sentMessages, setSentMessages] = useState([])

    const scrollRef = useRef()

        // console.log("sentMessage:", sentMessages)
        const dispatch = useDispatch();
        const inUser = useSelector(state => state.authState)
        const {userInfo, loading, error} = inUser

        const handleSend = (e) => {
            Keyboard.dismiss()
            e.preventDefault();
            let sentItem = {
                "message": message,
                "to": route?.params._id,
                "from": userInfo.user?.id,
                "date": Date.now()
            }
            // console.log(sentItem,"sentItem")
            socket.emit("messageSent", sentItem);
            socket.on("sendToClient", (payload) => {
            // console.log("item from socket:", payload)
            setSentMessages(payload)
            // payload.map(item =>        )
            })
        }

        // useEffect(() => {


        //         socket.on("connected", () => 
            
        //         )
         
        //     return () => {
                
        //         // socket.off("sendToClient")
        //         socket.off("connected")
        //     }
        // })
        

        // header setting
        useLayoutEffect(() =>{
            navigation.setOptions({
                headerTitle: () => (
                    <View style={{alignItems:'center'}}>
                        <Text style={{alignSelf:'center'}}>{route.params.name} {' '} {route.params.surname} </Text>
                    </View>
                )
            })
        },[navigation]);

// get messages 
    useEffect(() => {
        const unsubscribe = ()=> {
            getMessagesByMe({userId:userInfo.user?.id,
                receiverId:route?.params._id }
                ).then(data => {
                setSentMessages(data)
                }
                )
        }
        unsubscribe();
    },[])

    return (
        <View style={styles.main} >

            <ScrollView 
                contentContainerStyle={{paddingHorizontal: 10, paddingBottom:40}}
                onContentSizeChange={() =>scrollRef.current.scrollToEnd()}
                ref={scrollRef}    
            >
                {sentMessages.map((item,i) => 
                        (item.to === userInfo.user?.id) ? 
                        <View key={i} style={{marginVertical:10,padding:5,borderRadius:10,backgroundColor:'#3EB489',alignSelf:'flex-start', position:'relative'}}>
                            <Text style={{}} 
                                numberOfLines={3}
                            >{item.message}
                            
                            </Text>
                            <Text>{moment(item.date).fromNow()}</Text>

                        </View>
                

                    :
                        <View key={i} style={{marginVertical:10,padding:5,borderRadius:10,backgroundColor:'gray',alignSelf:'flex-end', position:'relative'}}>
                        
                        <Text 
                            numberOfLines={3}
                        >   {item.message}
                        
                            {/* <Text>{item.from}</Text> */}
                        </Text>
                        <Text>{moment(item.date).fromNow()}</Text>
                    </View>
                    
                    
                )}
            </ScrollView>
            <KeyboardAvoidingView style={styles.container}>
                <TextInput 
                    style={{width:'80%',paddingLeft: 10,marginRight:5, backgroundColor:'gray',borderRadius:15}}
                    // onSubmitEditing={handleSend}
                    onChangeText={(text) => setMessage(text)}
                    numberOfLines={2}
                    value = {message} 
                    placeholder="Enter Message"/>

                <TouchableOpacity>
                    <Ionicons name='send'onPress={handleSend} disabled={!message} size={24} color="#3EB489" />
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    )
}


export default Chat

const styles = StyleSheet.create({
    main: {
        flex:1,
        marginHorizontal:10

        
    },
container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    position:'absolute',
    bottom:0,
    
  },

})
