import moment from 'moment'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const EncounterItem = ({item}) => {
    
    const [displayDetails, setdisplayDetails] = useState(false)
    
    const handleClick = () => setdisplayDetails(!displayDetails) 

    const handleBgColor = displayDetails ? "white" : null
    return (
        <View style={{justifyContent:'center',alignItems:'center'}} >
            <TouchableOpacity onPress={handleClick} style={{marginVertical:10,padding:10,borderRadius:5, backgroundColor:handleBgColor}} >
                    <Text>Date: {moment(item?.date).fromNow()}</Text>
                    <Text>Examined By: Dr {item?.heldBy.name + " " +item?.heldBy.surname}</Text>
                    <Text>Visit Type: {item?.visitType}</Text>
                    {displayDetails && 
                    <View>
                        <Text>Temperature: {item?.temperature}</Text>
                        <Text>Blood Pressure: {item?.bloodPressure}</Text>
                        <Text>Respiratory Rate: {item?.respiratoryRate}</Text>
                        <Text>Complaints: {item?.complaint}</Text>
                        <Text>Diagnosis: {item?.diagnosis}</Text>
                        <Text>Treatment Plan: {item?.treatmentPlan}</Text>
                        <Pressable onPress={handleClick}>
                            <Text style={{color:'blue'}}>ShowLess</Text>
                        
                        </Pressable>
                    </View>
                }
            </TouchableOpacity>
        </View>
    )
}

export default EncounterItem

const styles = StyleSheet.create({})
