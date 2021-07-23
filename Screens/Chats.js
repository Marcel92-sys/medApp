// import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { listWorkers } from '../redux/actions/userActions';
const io = require('socket.io-client');
// const socket = io()

const SERVER = "http://localhost:5700"


const Chats = ({navigation}) => {

    const [workerList, setWorkerList] = useState(true)
    const dispatch = useDispatch();
    const listOfWorkers = useSelector(state => state.workersList)
    const {workers, error, loading} = listOfWorkers;


    useEffect(() => {
        dispatch(listWorkers())
        setWorkerList(workers)
        console.log(workerList)

        const socket = io(SERVER)
        socket.emit('firstEvent', "Just texting")
    }, [])

    const handleToChat = () => {
        navigation.navigate("Chat")
    }

    return (
        <View>

            {/* {worker ? ( */}
                <>

                    
                    <View>
                        <Text>Patients :</Text>
                        <ScrollView>

                            
                                    <TouchableOpacity onPress={handleToChat}>
                                        <Text>{workers}</Text>
                                    </TouchableOpacity>
                              

                        </ScrollView>

                        <View style={{marginTop:20}}>
                            <Text>HealthWorkers :</Text>
                            <ScrollView>

                              
                                {/* <FlatList 
                                    data=
                                    {[{key:1, name: "cardone"},{key:2, name: "cardone"},
                                        {key:3, name: "cardone"},{key:4, name: "cardone"},
                                        {key:5, name: "cardone"}, {key:6, name: "cardone"}]}
                                        
                                        renderItem={ ({item}) => 

                                        <TouchableOpacity onPress={handleToChat}>
                                            <Text>{item.name}</Text>
                                        </TouchableOpacity>
                                        
                                        }
                                /> */}

                            </ScrollView>
                        </View>
                    </View>
                </>
            
            {/* ) : ( */}
                            <View>
                <Text>HealthWorkers :</Text>
                <ScrollView>

                    {/* <FlatList 
                        data=
                        {[{key:1, name: "cardone"},{key:2, name: "cardone"},
                            {key:3, name: "cardone"},{key:4, name: "cardone"},
                            {key:5, name: "cardone"}, {key:6, name: "cardone"}]}
                            
                            renderItem={ ({item}) => 

                            <TouchableOpacity onPress={handleToChat}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                            
                            }
                    /> */}

                </ScrollView>
            </View>

            {/* )} */}
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({})
