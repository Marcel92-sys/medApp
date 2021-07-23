import React, {useEffect, useState} from 'react'
import { StyleSheet,Text, KeyboardAvoidingView, View } from 'react-native'
import { Button,Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import { StackActions,Link, NavigationContainer } from '@react-navigation/native'
import socket from '../helpers/socket';
import { loginUser } from '../redux/actions/userActions';
// import { io } from 'socket.io-client';

const SignIn = ({navigation}) => {
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState(false)

    const userLogin = useSelector((state) => state.userSignin);
    const {loading, user, error} = userLogin
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser(surname, password))
        if (user) {
            navigation.replace('Dashboard')
        }
        setSurname('')
        setPassword('')
    }
    
    


    return (
        <View style={styles.container}> 
            <View style={{borderColor:'grey',width:"50%",height:"contain", borderWidth:1.5}}>
                
                
                <KeyboardAvoidingView >
                    <Input
                        label = "Surname"
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter surname"
                        onChangeText={(text) => setSurname(text)}
                        autoFocus={true}
                        value={surname}
                    />
                    <Input
                        label = "Passwords"
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />

                </KeyboardAvoidingView>
                <Button title='Login' disabled={!surname || !password} style={{margin:2, width:"50%", alignSelf:'center'}} onPress={handleLogin} />
                 <View style={{alignSelf:"center"}}>
                    <Text style={{fontWeight: 600}} >Are you a new Worker?
                        <Link to='/register'
                            action={StackActions.replace('Register')}
                         style={styles.link}>Create an account</Link>
                    </Text>
                 </View>
            </View>
      
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
    link: {
        color: 'green',
        paddingLeft: 5
    },

    })
