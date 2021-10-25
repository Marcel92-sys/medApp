import React, {useState, useEffect} from 'react'
import { StyleSheet,  View,KeyboardAvoidingView ,ScrollView, Platform } from 'react-native'
import { Text,Button ,Input} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import { StackActions,Link } from '@react-navigation/native'
import instance from '../helpers/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkers } from '../redux/hWorkers/workersSlice';



const Register = ({navigation}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')

    const [rePassword, setRePassword] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [department, setDepartment] = useState('')
    const [cadre, setCadre] = useState('')

    const dispatch = useDispatch()
    // const {workers, loading} = useSelector(state => state.workersList)



    const userDetails = {
        name,surname,password, rePassword,age, gender, department,
        cadre
    }

const handleSignUp = async() =>{

        const res = await instance.post('/workers/register', userDetails)

        console.log("response from signUp",res.data)
//  navigation.navigate('SignIn')

}

    const scrollBehavior = Platform.OS === "ios" ? "padding" : "height"
    return (
        <ScrollView contentContainerStyle={styles.container} >
            <KeyboardAvoidingView behavior={scrollBehavior} style={{backgroundColor:'#3EB489' ,paddingVertical:20,marginBottom:30, borderRadius:5, width:'80%'}} >
                <Text h4  style={{padding:10, alignSelf:'center', color:'white'}}>  
                    Create your account
                </Text>
                <Input
                    style={{width:300}}
                    label = "Name"
                    // style={{height: 40,borderColor:'black', marginBottom:.5, borderWidth:0.5}}
                    placeholder="Enter name"
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Input
                    style={{width:300}}
                    label = "Surname"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter surname"
                    onChangeText={(text) => setSurname(text)}
                    value={surname}
                />
                <Input
                    style={{width:300}}
                    label = "Passwords"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Input
                    style={{width:300}}
                    label = " Repeat Passwords"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter Password again"
                    onChangeText={(text) => setRePassword(text)}
                    value={rePassword}
                />
                <Input
                    style={{width:300}}
                    label = "Age"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter Age"
                    onChangeText={(text) => setAge(text)}
                    value={age}
                />
                <>
                    <Text style={{fontWeight:'bold', color:'grey', paddingLeft:10}}>Gender </Text>
                    <Picker
                    
                        style={{height:40, margin:12, padding:5, borderWidth:1, borderColor:'grey'}}
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) => 
                        setGender(itemValue)}
                    >
                        <Picker.Item  label='Select a gender' value='#' />
                        <Picker.Item label='Male' value='male' />
                        <Picker.Item label='female' value='female' />
                    </Picker>
                </>
                <Input
                    style={{width:300}}
                    label = "Cadre"
                    placeholder="Enter Cadre"
                    onChangeText={(text) => setCadre(text)}
                    value={cadre}
                />
                <Input
                    style={{width:300}}
                    label = "Department"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter department"
                    onChangeText={(text) => setDepartment(text)}
                    value={department}
                />
                <Button containerStyle={styles.button} disabled={!surname || !password} title='Register' onPress={handleSignUp} />
            
                <View style={{alignSelf:"center" ,marginTop:10}}>
                    <Text style={{fontWeight: '600'}} >Already a user or not a Worker?{" "}
                        <Link to='/signin'
                            action={StackActions.replace('SignIn')}
                            style={styles.link}> 
                          {" "}Login
                         
                        </Link>
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
    // flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal:10,
    justifyContent: 'center',
    marginTop:10,
    marginBottom:30
    // backgroundColor: '#3EB489',
  },
   formContainer: {
    
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    width:'80%'
  },
  button:{
      width:"50%", alignSelf:'center'
  },
   link: {
        color: 'white',
        paddingLeft: 5
    },

})
