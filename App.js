import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Encounter from './Screens/Encounter';
import Register from './Screens/Register';
import Dashboard from './Screens/Dashboard';
import SignIn from './Screens/SignIn';
import Logs from './Screens/Logs';
import Rpatient from './Screens/Rpatient';
import Charts from './components/Charts';
import Chats from './Screens/Chats';
import Chat from './Screens/Chat';
import E_File from './Screens/E-File';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Pfile from './Screens/Pfile';
import AppCamera from './components/AppCamera';

const Stack = createStackNavigator();

export default function App() {

  const globalOption = {
    headerStyle:{backgroundColor: "#2c68ed"},
    headerTitleStyle: {color:'white'},
    headerTintColor:"white"
  }


  

  return (
    <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator screenOptions={globalOption} >  
              <Stack.Screen name="Dashboard" component={Dashboard} /> 
              <Stack.Screen name="Register" component={Register} />     
              <Stack.Screen name="Encounter" component={Encounter} /> 
              {/* <Stack.Screen name="caamera" component={AppCamera} />  */}
              <Stack.Screen name="Pfile" component={Pfile} /> 
              <Stack.Screen name="SignIn" component={SignIn} />     
              <Stack.Screen name="E_File" component={E_File} /> 
              <Stack.Screen name="Logs" component={Logs} /> 
              <Stack.Screen name="Chat" component={Chat} />
              <Stack.Screen name="Chats" component={Chats} />
              <Stack.Screen name="rPatients" component={Rpatient} />     
              <Stack.Screen name="Charts" component={Charts} /> 
        
        
            </Stack.Navigator>

            
              
      </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
