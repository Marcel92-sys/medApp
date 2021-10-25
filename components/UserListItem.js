import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { ListItem } from 'react-native-elements'

const UserListItem = ({id, name, surname, enterChat}) => {
    return (
        <View>
            <ListItem key={id} onPress={()=> enterChat(id,name,surname)} >
                <ListItem.Content>
                    <ListItem.Title>
                    </ListItem.Title>
                    <Text>
                        {name}{' '} {surname}
                        </Text>
                    
                        <ListItem.Subtitle>
                            {Date.now()}
                        </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    )
}

export default UserListItem

const styles = StyleSheet.create({})
