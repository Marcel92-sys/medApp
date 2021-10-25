import { StyleSheet, Text,ScrollView , View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React,{useState, useEffect} from 'react'
import { Button,Input } from 'react-native-elements';
import instance from '../helpers/axios';


const Search = () => {
    const [age, setAge] =useState('')
    const [bmi, setBmi] =useState('')
    const [gender, setGender] =useState('')
    const [searchResult, setSearchResult] = useState([])
    const [searched, setSearched] = useState(false)

    const ageSearch = async() => {
        const res = await instance.get(`/patients/search?age=${age}`)
        setSearched(true)
        setSearchResult(res.data)
        setAge('')

    }

    const genderSearch = async() => {
        const res = await instance.get(`/patients/search?gender=${gender}`)
         setSearched(true)
        setSearchResult(res.data)
        setGender('')
    }

    const bmiSearch = async () => {
        const res = await instance.get(`/patients/search?bmi=${bmi}`)
        setSearched(true)
        setSearchResult(res.data)
        setBmi('')
        
    }

    return (
        <View style={{backgroundColor:'#3EB489',padding:5,borderRadius:5, width:'90%'}} >
            <View style={styles.search}>
                {/* <Text style={styles.text}>Search by Age :</Text> */}
                <Picker style={[styles.input,{color:'red'}]} selectedValue={age} onValueChange={(itemValue, itemIndex) => setAge(itemValue)} >
                    <Picker.Item  label='Search by Age' value={null} />
                    <Picker.Item label='0 - 29' value='0 - 29' />
                    <Picker.Item label='30 - 59' value='30 - 59' />
                    <Picker.Item label='60 - 89' value='60 - 89' />
                    <Picker.Item label='90 and above' value='90 and above' />
                </Picker>
                <Button title="Search"  onPress={ageSearch}  />
            </View>
                <View style={styles.search}>
                   <Text style={styles.text}>Search by BMI :</Text>
                    <Picker style={styles.input} selectedValue={bmi} onValueChange={(itemValue, itemIndex) => setBmi(itemValue)} >
                        
                        <Picker.Item  label='Pick a range' value={null} />
                        
                        <Picker.Item label='below 18.5' value='below 18.5' />
                        <Picker.Item label='18.5 - 24.9' value='18.5 - 24.9' />
                        <Picker.Item label='25.0 - 29.9' value='25.0 - 29.9' />
                        <Picker.Item label='30.0 and above' value='30.0 and above' />
                    </Picker>
                    <Button title="Search" onPress={bmiSearch} />
               </View>
                <View style={styles.search}>
                   <Text style={styles.text}>Search by Gender :</Text>
                    <Picker style={styles.input} selectedValue={gender} onValueChange={(itemValue, itemIndex) => setGender(itemValue)} >
                        
                        <Picker.Item  label='Pick a range' value={null} />
                        
                        <Picker.Item label='male' value='male' />
                        <Picker.Item label='female' value='female' />  
                    </Picker>
                    <Button title="Search" onPress={genderSearch} />
               </View>
               {
                   searched && 
                   <>

                    <Text style={{fontWeight:'bold'}}>Search Results</Text>

                    <View style={{width:"70%", marginLeft:10}}>
                        { searchResult.map((result) => (
                            

                            <ScrollView key={result._id}>

                                <Text >
                                    {result.name}
                                </Text>
                            </ScrollView>
                            ))}
                            
                    
                    </View>

                   </>
               }

                
               

        </View>
                        )
    
}

export default Search

const styles = StyleSheet.create({
    text:{fontWeight:'bold',width:'30%'},
  input: {
      height:40,
      margin:12,
      padding:5,
      borderWidth:1,
      borderColor:'black'

  },
  search: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    //   marginLeft:30,
     

  }

})
