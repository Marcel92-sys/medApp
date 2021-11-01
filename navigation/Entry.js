import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../Screens/SignIn';
import Register from '../Screens/Register';
import InnerNav from './InnerNav';


const Stack = createStackNavigator();

  const globalOption = {
    headerStyle:{backgroundColor: "#3EB489"},
    headerTitleStyle: {color:'white'},
    headerTintColor:"white"
  }

const Entry = () => {

    return (
      <NavigationContainer>

          <Stack.Navigator screenOptions={globalOption} initialRouteName="SignIn" >
            <Stack.Screen name="SignIn" component={SignIn} />      
            <Stack.Screen name="InnerNav" options={{ headerShown: false}} component={InnerNav} /> 
            <Stack.Screen  name="Register" component={Register} />      
                
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Entry

const styles = StyleSheet.create({})
