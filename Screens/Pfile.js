import React, { useState } from 'react'
import { ListView } from 'react-native'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'

const Pfile = () => {
    const [user, setUser] = useState()
    const [userDetail, setUserDetail] = useState([])


    return (
        <View>
            <Text>Patient's file</Text>
            <View>
                <ScrollView>
                    <Text>{user}'s File</Text>
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>
                                
                            </ListItem.Title>
                            <ListItem.Subtitle>

                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                </ScrollView>
            </View>
        </View>
    )
}

export default Pfile

const styles = StyleSheet.create({})
