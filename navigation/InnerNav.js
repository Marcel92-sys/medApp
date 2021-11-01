import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../Screens/Dashboard';
import Chat from '../Screens/Chat';
import Chats from '../Screens/Chats';
import Encounter from '../Screens/Encounter';
import Rpatient from '../Screens/Rpatient';
import Logs from '../Screens/Logs';
import Pfile from '../Screens/Pfile';
import EncounterNote from '../Screens/EncounterNote';
import socket from '../helpers/socket';

const InnerNav = () => {


    // socket.io
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
    
const Stack = createStackNavigator();

  const globalOption = {
    headerStyle:{backgroundColor: "#3EB489"},
    headerTitleStyle: {color:'white'},
    headerTintColor:"white"
  }

    return (
        <Stack.Navigator screenOptions={globalOption} initialRouteName="Dashboard" >
            <Stack.Screen name="Dashboard" component={Dashboard} />      
            <Stack.Screen name="Chat" component={Chat} /> 
            <Stack.Screen name="Chats" component={Chats} /> 
            <Stack.Screen name="Encounter" component={Encounter} /> 
            <Stack.Screen name="Rpatient" component={Rpatient} /> 
            <Stack.Screen name="Logs" component={Logs} /> 
            <Stack.Screen name="Pfile" component={Pfile} /> 
            <Stack.Screen name="Note" component={EncounterNote} /> 
        </Stack.Navigator>

    )
}

export default InnerNav

const styles = StyleSheet.create({})
