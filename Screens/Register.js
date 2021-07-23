import React, {useState} from 'react'
import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native'
import { Button,Input } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import { StackActions,Link } from '@react-navigation/native'



const Register = ({navigation}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [department, setDepartment] = useState('')
    const [cadre, setCadre] = useState('')




    return (
        <View style={styles.container}>
            <Text>  
                Register
            </Text>
           <View style={{borderColor:'grey',width:"50%",marginBottom:30,height:"contain", borderWidth:1.5}}>
               
            <KeyboardAvoidingView >
                <Input
                    label = "Name"
                    // style={{height: 40,borderColor:'black', marginBottom:.5, borderWidth:0.5}}
                    placeholder="Enter name"
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Input
                    label = "Surname"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter surname"
                    onChangeText={(text) => setSurname(text)}
                    value={surname}
                />
                
                <Input
                    label = "Passwords"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                
                <Input
                    label = " Repeat Passwords"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter Password again"
                    onChangeText={(text) => setRePassword(text)}
                    value={rePassword}
                />
                
                <Input
                    label = "Age"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter Age"
                    onChangeText={(text) => setAge(text)}
                    value={age}
                />
                <View>
                    <Text style={{fontWeight:'bolder', color:'grey', paddingLeft:10}}>Gender </Text>
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
                </View>
                
                
                <Input
                    label = "Cadre"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter Cadre"
                    onChangeText={(text) => setCadre(text)}
                    value={cadre}
                />
                
                <Input
                    label = "Department"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter department"
                    onChangeText={(text) => setDepartment(text)}
                    value={department}
                />

            </KeyboardAvoidingView>
            <Button style={{width:"50%", alignSelf:'center'}} title='Register' onPress={() => navigation.navigate('SignIn')} />
              <View style={{alignSelf:"center"}}>
                    <Text style={{fontWeight: 600}} >Already a user or not a Worker?
                        <Link to='/signin'
                            action={StackActions.replace('SignIn')}
                         style={styles.link}>Login</Link>
                    </Text>
                 </View>
            </View>
        </View>
    )
}

export default Register

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
