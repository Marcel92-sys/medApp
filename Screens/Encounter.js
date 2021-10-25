import { Picker } from '@react-native-picker/picker';
import React,{useState, useEffect} from 'react'
import { StyleSheet,TextInput, Text, View,KeyboardAvoidingView,ScrollView, Modal  } from 'react-native'
import { Button,Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import instance from '../helpers/axios';
import socket from '../helpers/socket';
import { getPatients } from '../redux/patients/patientsListSlice';

const Encounter = ({navigation}) => {
    const [eFor, setEFor] = useState('Marcel')
    const [visitType, setVisitType] = useState('First Time Visit')
    const [eBy, setEBy] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    // const [bmi, setBmi] = useState(0)
   const [bp, setBp] = useState()
   const [temp, setTemp] = useState('')
   const [rRate, setRRate] = useState('')
   const [complaints, setComplaints] = useState('')
   const [diagnosis, setDiagnosis] = useState('')
   const [treatPlan, setTreatPlan] = useState('')

   const [showModal, setShowModal] = useState(false)

   const [listedPatients, setListedPatients] = useState([])

   const dispatch = useDispatch();
   const worker = useSelector(state => state.authState)
   let {userInfo, loading, error} = worker;

   
//    get all Patients

useEffect(() => {
    dispatch(getPatients())
},[])
      const patients = useSelector(state => state.patientsList)
      let {patientsList} = patients
    console.log("patientsList", patientsList)
    // handling saving of Encounter file
  
    const handleSave = async (e) => {
       e.preventDefault();
    //    const res = await instance.patch(`/${user?._id}/encounter/${}`)

      
    }
    // generates a bmi
   const createBmi = (a, b) =>{
        if (!a && !b) {
            return ("Enter BMI")
        }
        return parseFloat(a/b)
    }

    const  bmi =  createBmi(weight, height)
   

    const handleSend = () => {

        return (
            <>
            </>
        )
        setShowModal(true)
    }


    let encounter = {visitType, height, weight,bmi,temp,bp,rRate,complaints,diagnosis,treatPlan} 
    
    const sendEncounter = () => {        
        socket.emit("send-encounter", encounter)
    }
   
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={{fontWeight:'bold', color:'#3EB489'}}>Encounter Form for <Text>{eFor}</Text></Text>
             <ScrollView style={{padding: 10,width:'85%',backgroundColor: '#3EB489', borderRadius:5}}>
                 <View>
                    <Text style={styles.text}>Patient name</Text>
                       <Picker style={styles.input} selectedValue={eFor} onValueChange={(itemValue, itemIndex) => setEFor(itemValue)} >
                           <Picker.Item  label='Select a patient' value={null} />
                            {patientsList.map((patient, i)=>
                            <Picker.Item key={i} label={patient.name +" "+ patient.surname} value={patient.name +" "+ patient.surname} />
                            )}
                        </Picker>
                </View>
               <View>
                    <Text style={styles.text}>Visit Type</Text>
                    <TextInput
                        style={styles.input}
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter visitType"
                        onChangeText={(text) => setVisitType(text)}
                        value={visitType}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Height :</Text>
                    <TextInput
                        style={styles.input}
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter height"
                        onChangeText={(text) => setHeight(text)}
                        value={height}
                    />  
                </View>
                <View>
                   <Text style={styles.text}>Weight :</Text>
                    <TextInput
                        style={styles.input}
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter weight"
                        onChangeText={(text) => setWeight(text)}
                        value={weight}
                    />
               </View>
               
               <View>
                   <Text style={styles.text}>BMI :</Text>
                    {/* <Text style={styles.input}>{bmi}</Text> */}
                    
                    <TextInput
                        style={styles.input}
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter bmi"
                        // onChangeText={() => setBmi(weight/height)}
                        value={bmi}
                    />
               </View>
                
                
                
               <View>
                   <Text style={styles.text}>Temperature :</Text>
                    <TextInput
                        style={styles.input}
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter temperature"
                        onChangeText={(text) => setTemp(text)}
                        value={temp}
                    />
               </View>
                
                
               <View>
                   <Text style={styles.text}>Blood Pressure :</Text>
                    <TextInput
                        style={styles.input}
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter bp"
                        onChangeText={(text) => setBp(text)}
                        value={bp}
                    />
               </View>
                
                
               <View>
                   <Text style={styles.text}>Respiratory Rate :</Text>
                    <TextInput
                        style={styles.input}
                        // style={{height: 40,borderColor:'black', borderWidth:0.5}}
                        placeholder="Enter respiratory Rate"
                        onChangeText={(text) => setRRate(text)}
                        value={rRate}
                    />
               </View>
               
               <View>
                   <Text style={styles.text}>Complaints :</Text>
                    <TextInput
                        multiline={true}
                        style={styles.textArea}
                        placeholder="Enter complaints"
                        onChangeText={(text) => setComplaints(text)}
                        value={complaints}
                    />
               </View>
               
               
               <View>
                   <Text style={styles.text}>Diagnosis :</Text>
                    <Picker style={styles.input} selectedValue={diagnosis} onValueChange={(itemValue, itemIndex) => setDiagnosis(itemValue)} >
                        
                        <Picker.Item  label='Select a diagnosis mode' value={null} />
                    
                        <Picker.Item label='Hypertension' value='Hypertension' />
                        <Picker.Item label='Pneumonia' value='Pneumonia' />
                        <Picker.Item label='Malaria' value='Malaria' />
                        <Picker.Item label='Diabetes' value='Diabetes' />
                    </Picker>
               </View>

               <View>
                    <Text style={styles.text}>Treatment Plan :</Text>
                
                    <TextInput
                    multiline={true}
                    style={styles.textArea}
                    placeholder="Enter treatment Plan"
                    onChangeText={(text) => setTreatPlan(text)}
                    value={treatPlan}
                    />
               </View>
               
                 <View>
                    <Text style={styles.text}>Encounter By: {userInfo?.name}</Text>
                
                    
               </View>
              
                <View style={{flexDirection:'row', marginTop:2, justifyContent:'space-around'}}>
                <Button title='Save' onPress={handleSave} />
                <Button title='Send' type={'outline'} onPress={handleSend} />

                </View>
            </ScrollView>

               

            
        </KeyboardAvoidingView>
    )
}

export default Encounter

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
      height:40,
      margin:12,
      padding:5,
      borderWidth:1,
      borderColor:'grey'

  },
  text:{fontWeight:'bold'},
  textArea: {
      height:100,
      margin:12,
      padding:5,
      borderWidth:1,
      borderColor:'grey'
    }, modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  textModal: {
    color: '#3f2949',
    marginTop: 10,
  },
})
