import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EncounterItem = ({item}) => {

    return (
        <View >
            <View style={{marginVertical:10}} >
                    <Text>Date: {item?.date}</Text>
                    <Text>Visit Type: {item?.visitType}</Text>
                    <Text>Temperature: {item?.temperature}</Text>
                    <Text>Blood Pressure: {item?.bloodPressure}</Text>
                    <Text>Respiratory Rate: {item?.respiratoryRate}</Text>
                    <Text>Complaints: {item?.complaint}</Text>
                    <Text>Diagnosis: {item?.diagnosis}</Text>
                    <Text>Treatment Plan: {item?.treatmentPlan}</Text>
                    
                    <Text>Examined By: {item?.heldBy}</Text>
                </View>
        </View>
    )
}

export default EncounterItem

const styles = StyleSheet.create({})
