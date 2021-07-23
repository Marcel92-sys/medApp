import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const E_File = ({}) => {
    const [name, setName] = useState("Marcel Shedrack")
    return (
        <View>
             <Text style={styles.title}>Encounter File for :
                <Text style={{borderWidth:0.5, fontSize:15, paddingRight:10, paddingLeft:10}}>
                {name} 

                </Text>
             </Text>
             <View>
                 <Text style={{alignSelf:'center'}}>Encounter File for</Text>
             </View>
        </View>
    )
}

export default E_File

const styles = StyleSheet.create({
    title: {
        fontWeight:'500',
        alignSelf:'center',
        padding:10,
        width:"80%",
        fontSize:20
        
    }
})
