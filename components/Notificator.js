import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Notificator = ({message, error, closeNotifier}) => {
    return (
        <View>
            <View style={{alignItems:'center', backgroundColor:'#3EB489', marginVertical:30,padding:20,borderRadius:10}}>
                {/* <Text>{message}</Text> */}
                {(!message && error) ?
                                <View>
                                    <Text style={{ 
                                        borderColor:'red',
                                        backgroundColor:'white',
                                        textAlign:'center',
                                        borderWidth:1.5,
                                        borderRadius:3,
                                        padding: 10,
                                        marginBottom:10,
                                        color:'red', 
                                        fontWeight:'bold'}} > {error} </Text>
                            
                                </View>
                                : null
                            }
                            
                            { (!error && message) ?
                                <View>
                                    <Text style={{
                                        // borderColor:'green',
                                        // borderWidth:1.5,
                                        borderRadius:3,
                                        padding: 10,
                                        marginBottom:10,
                                        backgroundColor:'#3EB489',
                                        color:'white', 
                                        fontWeight:'bold'}} > {message} </Text>
                            
                                </View>
                            : null
                            }
                <TouchableOpacity onPress={closeNotifier}>
                    <Text style={{color:'white', fontWeight:'bold'}}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Notificator

const styles = StyleSheet.create({})
