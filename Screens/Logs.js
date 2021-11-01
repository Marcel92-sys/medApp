import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import EncounterItem from '../components/EncounterItem'
import { getEncountersByMe } from '../helpers/apiCalls'

const Logs = ({navigation}) => {

    const [note, setNote] = useState(false)
    const launchEncounter = () => setNote(true);
    
    const [file, setFile] = useState([])

    const loginUser = useSelector((state )=> state.authState)
    const {userInfo, status, error} = loginUser

    console.log("userInfo", userInfo)

    const handleToEncounter = (encounter) => {
        navigation.navigate('Note', encounter)
        setNote(false)
    }



    // get all encounters by user

    useEffect(() => {
        const getEncounters = () =>{
            getEncountersByMe({wkId: userInfo?.user?.id}).then(result => {
                console.log("resutl:", result)
                setFile(result)
            })
        }
        getEncounters()
    }, [userInfo])

    return (
        <View style={{backgroundColor:'#3EB489', marginTop:10,marginHorizontal:10,flex:1}}>
            {!note ?
                <>  
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10,marginHorizontal:10,backgroundColor:'#3EB489'}}>
                    <View>
                        <Text style={styles.tableHead}>Created E-Files</Text>
                        <Text>{file.length}</Text>
                    </View>
                    <View >
                        <Text style={styles.tableHead}>Recieved E-Files</Text>
                            <TouchableOpacity>
                            <Text>Chioma Eze</Text>
                            </TouchableOpacity>
                    </View>

                </View>
                <View style={{marginTop:20, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.tableHead}>Encounters By Me</Text>
                    <ScrollView>
                        
                        {/* <TouchableOpacity onPress={launchEncounter}>
                            <Text >first encounter</Text>
                        </TouchableOpacity>       */}
                         {file?.map((item) => 
                     <EncounterItem key={item._id} item={item}  />
                 )} 
                    </ScrollView>
                </View>
            </>
            :
            <View style={{alignItems:'center', backgroundColor:'white', marginVertical:30,padding:20,borderRadius:10}}>
                <Text>You sure wanna check that Out?</Text>
                <TouchableOpacity onPress={() =>setNote(false)}>
                    <Text>X</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=> handleToEncounter({encounter:"first"})}>
                    <Text >GO</Text>
                </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default Logs

const styles = StyleSheet.create({
   tableHead: {fontWeight:'bold',}
})
