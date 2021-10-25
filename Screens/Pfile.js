import React, { useEffect, useState } from 'react'
import { ListView } from 'react-native'
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { useSelector } from 'react-redux'
import EncounterItem from '../components/EncounterItem'
import { getPatient } from '../helpers/apiCalls'

const Pfile = () => {
    const [user, setUser] = useState(null)
    const [userDetail, setUserDetail] = useState([])


    const loginUser = useSelector((state )=> state.authState)
    const {userInfo, } = loginUser

    console.log("user", user)
    useEffect(() => {
            const getUser = () => {
                getPatient({patId:userInfo.id}).then(res =>{

                    // console.log("user from backend on pFile", res)
                    setUser(res)
                }
                    )
                    .catch(e => console.log("error: ", e))
            }

            getUser()
    }, [])
    return (
        <View style={styles.container}>
            <Text>{userInfo?.name +" "+ userInfo?.surname}'s File</Text>
            <ScrollView contentContainerStyle={{width:'100%',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', justifyContent:'space-around'}} >
                    <Text>State: {user?.state}</Text>
                    <Text> LGA: {user?.lga}</Text>
                    <Text>Ward: {user?.ward}</Text>
                    
                </View>
                
                <View>
                    <Text>Age: {user?.age}</Text>
                    <Text>Gender: {user?.gender}</Text>
                    <Text>Height: {user?.height}</Text>
                    <Text>Weight: {user?.weight}</Text>
                    <Text>BMI: {user?.bmi}</Text>
                </View>
                {user?.encounters.map((item) => 
                    <EncounterItem key={item._id} item={item} />
                )}
            </ScrollView>
         </View>
    )
}

export default Pfile

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#3EB489',
    alignItems: 'center',
    marginTop:10,
    marginHorizontal:10,
    justifyContent: 'center',
    
  },
})
