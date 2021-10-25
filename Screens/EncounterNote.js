import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EncounterNote = ({navigation, route}) => {
    const encounterItem = route.params

    return (
        <View>
            <Text>Encounter Notes</Text>
            <View>
                <Text>{encounterItem.encounter}</Text>
            </View>
        </View>
    )
}

export default EncounterNote

const styles = StyleSheet.create({})
