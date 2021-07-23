import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Link,StackActions} from '@react-navigation/native'

import { Button,Input } from 'react-native-elements';
import Charts from '../components/Charts';
import { TouchableOpacity } from 'react-native';
import { Touchable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../redux/actions/userActions';
import Search from '../components/Search';
// import { ScreenWidth } from 'react-native-elements/dist/helpers';

const Dashboard = ({navigation}) => {
    const [healthW, setHealthW] = useState(true)
    // const [user, setUser] =useState('Marcel')
    const dispatch = useDispatch()

    // accessing user state
    const loginUser = useSelector(state => state.userSignin)
    const {loading, user, error} = loginUser


    const handleLogOut = ()=> {
        dispatch(signout())
        navigation.replace("SignIn")
    }
    useLayoutEffect(() =>{
        navigation.setOptions({
            title: "Ok_Medical",
            headerStyle: {backgroundColor:"white"},
            headerTitleStyle:{color:'black'},
            headerTintColor:'black',
            headerLeft: () => (
                <View style={{marginLeft:20}}>
                    <Text>Home</Text>
                </View>
            ),
            headerRight: () => (
                <View style={{marginRight:20}}>
                    <TouchableOpacity onPress={handleLogOut} >

                     <Text>Home</Text>
                    </TouchableOpacity>
                </View>
            ),
        })

    },)

  useEffect(() => {

  },[])

    return (
        <View style={styles.container}>
            
                    <Text  >Hello 
                        <Text style={{fontWeight:'bold'}}>
                           {''} {user?.name}{' '}{user?.surname}
                        </Text>
                    </Text>
                    <View style={{width:'90%'}}>

                     <Charts/>
                    </View>
                    <View style={{ width:'80%'}}>
                        <Search />   
                        
                    </View>

                <View style={{marginTop:10}} >
                     {   (!user?.bmi ) ? 

                  ( 
                <>  
                    <Text>Activities</Text>


                   <View style={{flexDirection:'row', justifyContent:'space-between',margin: 10}} >
                      
                        

                        <TouchableOpacity onPress={()=> navigation.navigate('Encounter')}>
                         
                                <Text>Perform an Encounter</Text>
                        </TouchableOpacity>
                         
                        <TouchableOpacity onPress={()=> navigation.navigate('rPatients')}>
                          
                                <Text>Register new Patient</Text>
                        </TouchableOpacity>
                           
                        <TouchableOpacity onPress={()=> navigation.navigate('Logs')}>
                            <Text>Check Logs</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('Chats')}>
                            <Text>Go to Chats</Text>

                        </TouchableOpacity>
                        
                    </View>
                   </> ) :
                       (
                    <View style={{flexDirection:'row', justifyContent:'space-between',margin: 10}} >
                       


                        <TouchableOpacity onPress={()=> navigation.navigate('Chats')}>
                            <Text>Chat a Patient</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('Pfile')}>
                            <Text>View File</Text>

                        </TouchableOpacity>
                        
                        
                        <TouchableOpacity onPress={()=> navigation.navigate('Chats')}>
                            <Text>Talk to a HealthWorker</Text>

                        </TouchableOpacity>
                      
                    </View>)
                        } 
                </View>

        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    box: {
        flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },

})
