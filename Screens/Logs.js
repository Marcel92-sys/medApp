import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const Logs = () => {
    return (
        <View>

            <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:10,marginRight:10}}>
                <View>
                    
                    <Text style={styles.tableHead}>Created E-Files</Text>
                    <ScrollView>
                        <TouchableOpacity>
                            <Text>Mbaekwe Laraba</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View >
                    <Text style={styles.tableHead}>Recieved E-Files</Text>
                    <ScrollView>
                        {/* loop throught list*/}
                        <TouchableOpacity>

                         <Text>Chioma Eze</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </View>
        </View>
    )
}

export default Logs

const styles = StyleSheet.create({
   tableHead: {fontWeight:'bold',}
})
