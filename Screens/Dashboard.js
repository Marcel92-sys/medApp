import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Charts from '../components/Charts';
import Search from '../components/Search';
import { clearJWT, isAuthenticated } from '../helpers/authHelpers';

// import { ScreenWidth } from 'react-native-elements/dist/helpers';

const Dashboard = ({navigation}) => {
    const [males, setMales] = useState([]);
    const [females, setFemales] = useState(0);
    const [ageOne, setAgeOne] = useState(0);
    const [ageTwo, setAgeTwo] = useState(0);    
    const [ageThree, setAgeThree] = useState(0);    
    const [ageFour, setAgeFour] = useState(0);

    const [healthW, setHealthW] = useState(true)
    // const [userInfo, setUserInfo] =useState()
    const dispatch = useDispatch()

    // accessing user state
    const loginUser = useSelector((state )=> state.authState)
    const {userInfo, status, error} = loginUser

    const patients = useSelector((state )=> state.patientsList)
    const {patientsList} = patients
    
    
    
    // useEffect(() =>{
    //   const jwt = ( ) => {  isAuthenticated()
    //     .then(value => setUserInfo( value))
    //     .catch(e => console.log("error", e))
    //   }
    //     jwt()
    
    // },[])
    
    console.log("login user store state", loginUser)
    // accessing malePatients 

    const handleLogOut = ()=> {
        clearJWT().then(() =>
            navigation.replace("SignIn")
        )
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            title: "Ok_Medical",
            // headerStyle: {backgroundColor:"white"},
            headerTitleStyle:{color:'white'},
            headerTintColor:'white',
            headerRight: () => (
                <View style={{marginRight:20}}>
                    <TouchableOpacity onPress={handleLogOut} >
                        <Text style={{color:'white'}} >LogOut</Text>
                    </TouchableOpacity>
                </View>
            ),
        })

    },)

    return (
        <View style={styles.container}>
                <Text  >Hello 
                    {userInfo ?
                    <Text style={{fontWeight:'bold'}}>
                        {''} {userInfo?.name}{' '}{userInfo?.surname}
                    </Text>

                    : "User"
                    }
                </Text>
                {/* <View style={{}}> */}
                    {/* <Charts 
                    males={males}
                    females={females}
                    ageOne={ageOne}
                    ageTwo={ageTwo}
                    ageThree={ageThree}
                    ageFour={ageFour}
                    /> */}
                {/* </View> */}
                {/* <View style={{ }}> */}
                    <Search />   
                {/* </View> */}

                <View style={{ marginTop:10}}  >
                        {   (!userInfo?.bmi ) ? 
                    ( 
                    <>
                        <View style={{marginBottom:15, flexDirection:'row'}} >
                            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Rpatient')}>
                                    <Text style={styles.text}>Register new Patient</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Logs')}>
                                <Text style={styles.text}>Check Logs</Text>
                            </TouchableOpacity>
                        
                        </View>
                        <View style={{marginBottom:15, flexDirection:'row'}} >
                            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Encounter')}>
                                    <Text style={styles.text}>Perform an Encounter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Chats')}>
                                <Text style={styles.text}>Go to Chats</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                    ) :
                        (
                    <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:5}} >
                        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Chats')}>
                            <Text style={styles.text}>Chat a Patient</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Pfile')}>
                            <Text style={styles.text}>View File</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Chats')}>
                            <Text style={styles.text}>Chat a HealthWorker</Text>
                        </TouchableOpacity>
                    </View>)
                        } 
                </View>
            </View>
    )
}
export default Dashboard

const styles = StyleSheet.create({
    box: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
   container: {
        flex: 1,
        margin:10,
        alignItems: 'center',
        backgroundColor: '#3EB489',
        borderRadius:3
    },
    button: {
        backgroundColor:'white',
        borderRadius:3,
        marginLeft:5 
    },
    text: {
        padding:10, 
        color:'#3EB489', 
        fontWeight:'500',

    },
  


})
