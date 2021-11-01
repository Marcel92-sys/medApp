import React, {useState, useEffect} from 'react'
import { StyleSheet,Button,ScrollView,TouchableOpacity, Text, View,KeyboardAvoidingView  } from 'react-native'
import { Input } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import AppCamera from '../components/AppCamera';
import { Modal } from 'react-native';
import instance from '../helpers/axios';
import Notificator from '../components/Notificator';
// import CameraComponent from '../components/CameraComponent';


const Rpatient = ({navigation}) => {
    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [password, setPassword] = useState(null)
    const [rePassword, setRePassword] = useState(null)
    const [age, setAge] = useState(null)
    const [gender, setGender] = useState('Select your gender')
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [ward, setWard] = useState(null)
    const [lga, setLga] = useState(null)
    const [state, setState] = useState(null)
    const [iUri, setIUri] = useState(false)
    const [photo, setPhoto] = useState(null)

    const [message, setMessage] =useState(null)

    
   const [openNotificator, setOpenNotificator] = useState(false)

   const closeNotifier = () => setOpenNotificator(!openNotificator)


const handleImage = () => {
setIUri(!iUri)
}

let details = {
    name:name, surname:surname, password:password,
    rePassword:rePassword, age:age, gender:gender,
    height:height, weight:weight, ward:ward,
    lga:lga,state:state,photo:photo
}

const handleRegister = async() => {
    
    const res = await instance.post('patients/signup', details)
    
    setOpenNotificator(true)
        setMessage(res.data)
}


      const scrollBehavior = Platform.OS === "ios" ? "padding" : "height"

    return (
        < KeyboardAvoidingView behavior={scrollBehavior} style={styles.container}>
            
            <View style={{padding: 10,width:"100%",borderRadius:5,backgroundColor: '#3EB489',}}>
                { message ? 
                    // <Text style={{width:"70%", color:"green"}}>{message}</Text>
                    <Notificator message={message} closeNotifier={closeNotifier} />
                    :
                    
                
                <ScrollView showsVerticalScrollIndicator={false} >
                        <Text>New Patient Registeration Form</Text>
                        <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label="Name"
                        placeholder="Enter name"
                        onChangeText={(text) => setName(text)}
                        value={name}
                        />      
                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label="Surname"
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter surname"
                        onChangeText={(text) => setSurname(text)}
                        value={surname}
                        />
                    
                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label="Password"
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        />
                    
                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label="Repeat Password"
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter Password again"
                        onChangeText={(text) => setRePassword(text)}
                        value={rePassword}
                        />
                    
                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label="Age"
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter Age"
                        onChangeText={(text) => setAge(text)}
                        value={age}
                        />
                    <View>
                        <Text style={{fontWeight:'bold', color:'grey', paddingLeft:10}}>Gender </Text>
                        <Picker
                        
                        style={{height:40, margin:12, padding:5, borderWidth:1, borderColor:'grey'}}
                        selectedValue={gender}
                        prompt="Gender"
                        onValueChange={(itemValue, itemIndex) => 
                            setGender(itemValue)}
                            >
                            <Picker.Item label='' value='' />
                            <Picker.Item label='Male' value='male' />
                            <Picker.Item label='female' value='female' />
                        </Picker>
                    </View>
                    
                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label="Height"
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter height in numbers"
                        onChangeText={(text) => setHeight(text)}
                        value={height}
                        />
                    
                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label="Weight"
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter weight in numbers"
                        onChangeText={(text) => setWeight(text)}
                        value={weight}
                        />

                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label="Ward"
                        style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter ward"
                        onChangeText={(text) => setWard(text)}
                        value={ward}
                        />
                    
                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label="LGA"
                        style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter lga"
                        onChangeText={(text) => setLga(text)}
                        value={lga}
                        />
                    
                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        label="State"
                        style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter state"
                        onChangeText={(text) => setState(text)}
                        value={state}
                        />
                    {/* <View   style={{width:"50%",marginBottom:10, alignSelf:'center'}}>

                    <Button color="red"  onPress={handleImage} title={iUri? "Close Camera":"Add Picture"} />
                    </View>
                    {iUri &&
                        <View style={{height:'40%', width:'70%',alignSelf:'center'}}>
                            <AppCamera photo={photo} setPhoto={setPhoto} /> 
                        </View>
                    } */}
                <Button containerStyle={{marginVertical:20}} title='Register' 
                    onPress={ handleRegister}
                    disabled={!state} 
                />
                </ScrollView> 
                
                }
                </View>
                </KeyboardAvoidingView >
    )
}

export default Rpatient

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin:10,
        // justifyContent: 'center'
    },
    input: {width:'100%',color:'white'},
    label:{color:'white',width:'100%'},
   
})
