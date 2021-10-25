import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Chats from '../Screens/Chats';
import Entry from './Entry';
import { useDispatch } from 'react-redux';



const Tab = createBottomTabNavigator()
const tabBarOptions = {
    showLabel: true,
    activeTintColor: 'green',
    style: {
        height:'10%',
    },
};

const RootNavigation = () => {



    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Entry' tabBarOptions={tabBarOptions}>
                <Tab.Screen name='Chats' component={Chats} />
                <Tab.Screen name='Entry' component={Entry} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
