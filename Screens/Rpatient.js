import React, {useState, useEffect} from 'react'
import { StyleSheet,TouchableOpacity, Text, View,KeyboardAvoidingView  } from 'react-native'
import { Button,Input } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
// import CameraComponent from '../components/CameraComponent';


const Rpatient = ({navigation}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('Select your gender')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [ward, setWard] = useState('')
    const [lga, setLga] = useState('')
    const [state, setState] = useState('')



    return (
        <View style={styles.container}>
            
            <Text>New Patient Registeration Form</Text>
                 
            <KeyboardAvoidingView style={{padding: 10, borderColor:'grey',width:"70%", borderWidth:1.5}}>
                     <Input
                        label="Name"
                    // style={{height: 40,borderColor:'black', marginBottom:.5, borderWidth:0.5}}
                        placeholder="Enter name"
                        onChangeText={(text) => setName(text)}
                        value={name}
                />
                <Input
                    label="Surname"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter surname"
                    onChangeText={(text) => setSurname(text)}
                    value={surname}
                />
                
                <Input
                    label="Password"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                
                <Input
                    label="Repeat Password"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter Password again"
                    onChangeText={(text) => setRePassword(text)}
                    value={rePassword}
                />
                
                <Input
                    label="Age"
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
                        <Picker.Item label='Select a gender' value='#' />
                        <Picker.Item label='Male' value='male' />
                        <Picker.Item label='female' value='female' />
                    </Picker>
                </View>
                
                <Input
                    label="Height"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter height"
                    onChangeText={(text) => setHeight(text)}
                    value={height}
                />
                
                <Input
                    label="Weight"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter weight"
                    onChangeText={(text) => setWeight(text)}
                    value={weight}
                />

                <Input
                    label="Ward"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter ward"
                    onChangeText={(text) => setWard(text)}
                    value={ward}
                />
                
                <Input
                    label="LGA"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter lga"
                    onChangeText={(text) => setLga(text)}
                    value={lga}
                />
                
                <Input
                    label="State"
                    // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                    placeholder="Enter state"
                    onChangeText={(text) => setState(text)}
                    value={state}
                />
                <Button style={{width:"20%", alignSelf:"center"}} title="Take Picture" />
                {/* <CameraComponent /> */}
            
            </KeyboardAvoidingView>

            <Button title='Register' onPress={() => navigation.navigate('SignIn')} />
        </View>
    )
}

export default Rpatient

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
