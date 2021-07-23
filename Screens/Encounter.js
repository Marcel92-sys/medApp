import { Picker } from '@react-native-picker/picker';
import React,{useState, useEffect} from 'react'
import { StyleSheet,TextInput, Text, View,KeyboardAvoidingView, Modal  } from 'react-native'
import { Button,Input } from 'react-native-elements';
import socket from '../helpers/socket';

const Encounter = ({navigation}) => {
    
    const [visitType, setVisitType] = useState('First Time Visit')
    
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


   //  watching for bmi creation  

        useEffect(() => {
            // setUsernameSelected(true)
            // socket.auth = {name:"message"}
            socket.connect();
            // console.log("here's the entered message %s", message);
            // socket.on("connect_error", (err) => {
            //     if (err.message === "invalid name"){
            //         setUsernameSelected(false);
            //     }
            // })


        //   function destroyed() {
        //     socket.off("connect_error")
        //     }
        }, [])


    // handling saving of Encounter file
    const handleSave = () => {
        
    }

    // generates a bmi
   const createBmi = (a, b) =>{
        if (!a && !b) {
            return ("Enter BMI")
        }
        return parseFloat(a/b)
    }

    const  bmi =  createBmi(weight, height)
   
    const handleRegister = async (e) => {
       e.preventDefault();

      
    }

    const handleSend = () => {
        setShowModal(true)
    }


    let encounter = {visitType, height, weight,bmi,temp,bp,rRate,complaints,diagnosis,treatPlan} 
    const sendEncounter = () => {
        
        socket.emit("send-encounter", encounter)
    }

   
    return (
        <View style={styles.container}>
            <Text style={{fontSize:30}}>Encounter Form</Text>
             <KeyboardAvoidingView style={{padding: 10,width:'70%', borderColor:'grey', borderWidth:1.5}}>
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
                
            </KeyboardAvoidingView>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => {
                        console.log('Modal has been closed.');
                    }}>
                    {/*All views of Modal*/}
                    {/*Animation can be slide, slide, none*/}
                    <View style={styles.modal}>
                        <Text style={styles.textModal}>Modal is open!</Text>
                        <Button
                        title="Click To Close Modal"
                        onPress={() => {
                            setShowModal(!showModal);
                        }}
                        />
                    </View>
                </Modal>

            <View style={{flexDirection:'row', marginTop:2, justifyContent:'space-around'}}>
            <Button title='Save' onPress={() => navigation.navigate('SignIn')} />
            <Button title='Send' type={'outline'} onPress={handleSend} />

            </View>

            
        </View>
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
