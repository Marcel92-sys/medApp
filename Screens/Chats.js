// import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect, useLayoutEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import UserListItem from '../components/UserListItem';
// import { isAuthenticated } from '../helpers/authHelpers';
import instance from '../helpers/axios';
const io = require('socket.io-client');
// const socket = io()

const SERVER = "http://localhost:5700"

const Chats = ({navigation}) => {

    const [workerList, setWorkerList] = useState([])
    const [patientsList, setPatientsList] = useState([])


    // getting user from reduxStore 
    const loginUser = useSelector((state )=> state.authState)
    let {status, userInfo, error} = loginUser
    
    // getting user from localStorage
//    const user = isAuthenticated()
//      useLayoutEffect(() => {
//          const jwt = isAuthenticated().then((value) => {

//              if (value?.token ) {
//                  navigation.replace('Main')
//                 } 
//             }
//             ) 

//     }, [])

    useEffect(() => {
       const getWorkers = async() => {
           const res = await instance.get('/workers/');
           setWorkerList(res.data)
           console.log(workerList)
       }
        getWorkers();

    //    listing patients
        const getPatients = async() => {
           const res = await instance.get('/patients/');
           setPatientsList(res.data)
       }
        getPatients();
    }, [])

    const enterChat = (_id, name,surname) => {
        navigation.navigate("Chat", {_id, name, surname})
    }

    return (
        <View>
            { (!userInfo?.bmi )? (
            <>

                
                <View>
                    <Text>Patients :</Text>
                    <ScrollView>
                        {patientsList.map(({_id, name, surname}) => {

                            <TouchableOpacity key={_id} onPress={handleToChat}>

                                <UserListItem enterChat={enterChat} key={_id} name={name} surname={surname} id={_id}  />
                            </TouchableOpacity>
                        })}
                            

                    </ScrollView>

                    <View style={{marginTop:20}}>
                        <Text>HealthWorkers :</Text>
                        <ScrollView>
                            {workerList.map(({_id, name, surname }) => (
                                <UserListItem enterChat={enterChat} key={id} name={name} surname={surname} id={id}  />
                            ))}
                            

                        </ScrollView>
                    </View>
                </View>
            </>
        
        ) : (
        <View>
            <Text>HealthWorkers :</Text>
            <ScrollView>
                {workerList.map(({_id, name, surname }) => (
                <TouchableOpacity>
                    <UserListItem enterChat={enterChat} key={_id} name={name} surname={surname} id={_id}  />
                </TouchableOpacity>
                ))}
            </ScrollView>
        </View>

        )}
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({})
