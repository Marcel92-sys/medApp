import React, {useEffect, useLayoutEffect, useState} from 'react'
import { StyleSheet, KeyboardAvoidingView, View,Alert } from 'react-native'
import { Button,Text,Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { StackActions,Link, NavigationContainer } from '@react-navigation/native';
import { loginUser } from '../redux/auth/authSlice';
import { isAuthenticated } from '../helpers/authHelpers';
import { getPatients } from '../redux/patients/patientsListSlice';
import { getPatient } from '../redux/userDetails/patientDetailsSlice';
import { getWorker } from '../redux/userDetails/workerDetailsSlice';
const SignIn = ({navigation}) => {
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [values, setValues] = useState({
        message:'',
        error:'',
        loading:false
    })


    // getting user from redux store
    
    // const loggedInUser = useSelector(state => state.authState)
    // const {userInfo, status, error} = loggedInUser

    // handleing userState to either redirect to dashboard
    useLayoutEffect(() => {
         const jwt = isAuthenticated().then(value => {
             if (value) {
                 navigation.replace('InnerNav')
                } 
            }
            ) 
        // const searchingUser = () => {
        //     if (userInfo){

        //      navigation.replace('InnerNav')
        //      }
        // }

        // searchingUser()


    }, [])

    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Allmediware",
    })
    },[navigation])

    const dispatch = useDispatch();

    const userData = {surname,password}

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginUser(userData))
            .then((data) => {
                console.log("login data:", data)
            if (data.error){
                setValues({...values, error:data.error.message})
            } else {
                setValues({...values})
                dispatch(getPatients())
                navigation.replace("InnerNav")
            }
        })
        .catch(error => Alert.alert(error))
        setSurname('')
        setPassword('')
    }
      const scrollBehavior = Platform.OS === "ios" ? "padding" : "height"
  
    return (
        <KeyboardAvoidingView behavior={scrollBehavior} style={styles.container}> 
            <View  style={{backgroundColor:'#3EB489', paddingVertical:20,marginBottom:30, borderRadius:5, width:'80%'}}  >
                <Text  h4  style={{padding:10, alignSelf:'center', color:'white'}}>Login to your Account</Text>
                
                    { values.error ?
                    <View>
                        <Text style={styles.error} >{values.error}</Text>
                    </View>
                    : null
                    }
                
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

                <Button title='Login'  
                    disabled={!surname || !password } 
                    containerStyle={styles.button} 
                    onPress={handleLogin} 
                />
                <View style={{alignSelf:"center",marginTop:10}}>
                <Text style={{fontWeight:'600'}} >Are you a new Worker?{" "}
                    <Link to='/register'
                        action={StackActions.replace('Register')}
                        style={styles.link}>Create an account</Link>
                </Text>
                </View>
            </View>
      
        </KeyboardAvoidingView>
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
            color: 'yellow',
            paddingLeft: 5
        },
  button:{
            width:"50%", alignSelf:'center'
        },
    error: {
        fontWeight:'bold',
        color:'red',
        borderColor:'red',
        borderWidth:1.5,
        backgroundColor:'white',
        borderRadius:3,
        padding: 10,
        marginBottom:10,
        alignSelf:'center',
        width:'50%'

    }


    })
