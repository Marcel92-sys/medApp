// import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect, useLayoutEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import UserListItem from '../components/UserListItem';
import { isAuthenticated } from '../helpers/authHelpers';
// import { isAuthenticated } from '../helpers/authHelpers';
import instance from '../helpers/axios';
import socket from '../helpers/socket';


const Chats = ({navigation}) => {

    const [workerList, setWorkerList] = useState([])
    const [patientsList, setPatientsList] = useState([])

    // getting user from reduxStore 
    const loginUser = useSelector((state )=> state.authState)
    let {status, userInfo, error} = loginUser
    

    
        
    useEffect(() => {
       const getWorkers = async() => {
           const res = await instance.get('/workers/');

           
        //    sort user out of patientsList
       let workers =  res.data.filter(item => item._id != userInfo.user.id)
           setWorkerList(workers)
       }
        getWorkers();

    //    listing patients
        const getPatients = async() => {
           const res = await instance.get('/patients/');
        
        //    sort user out of patientsList
       let patients =  res.data.filter(item => item._id != userInfo.user.id)
           setPatientsList(patients)
           
       }
        getPatients();
    }, [])

    const enterChat = (_id, name,surname) => {
        navigation.navigate("Chat", {_id, name, surname})
    }

    return (
        <View>
              <View style={{marginLeft:10,marginTop:10}}>
                    <Text>Patients :</Text>
                    <ScrollView>
                        {patientsList.map((patient) => 
                            <UserListItem key={patient._id} enterChat={enterChat} name={patient.name} surname={patient.surname} id={patient._id}  />
                        )}
                            

                    </ScrollView>

                    <View style={{marginTop:20,marginLeft:10}}>
                        <Text>HealthWorkers :</Text>
                        <ScrollView>
                            {workerList.map(({_id, name, surname }) => (
                                <UserListItem enterChat={enterChat} key={_id} name={name} surname={surname} id={_id}  />
                            ))}
                            

                        </ScrollView>
                    </View>
                </View>
            
        {/* ) : ( */}
        {/* <View>
            <Text>HealthWorkers :</Text>
            <ScrollView>
                {workerList.map(({_id, name, surname }) => (
                <TouchableOpacity>
                    <UserListItem enterChat={enterChat} key={_id} name={name} surname={surname} id={_id}  />
                </TouchableOpacity>
                ))}
            </ScrollView>
        </View> */}

        {/* )} */}
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({})
