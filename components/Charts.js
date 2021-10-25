import React, { useEffect, useState } from 'react'
import { StyleSheet,Dimensions, Text, View } from 'react-native'
import { PieChart } from 'react-native-chart-kit';
import instance from '../helpers/axios';

const screenWidth = Dimensions.get("window").width;

const Charts = ({males, females, ageOne, ageTwo, ageThree, ageFour}) => {


    useEffect(() => {


        const getFemales = async() => {
          const response = await instance.get('/patients/search?gender=female')
            // setFemales(response.data.length)
        }
            getFemales();

        const ageRangeOne = async() => {
            const res = await instance.get('/patients/search?age=0 - 29')
            // setAgeOne(res.data.length)
        }
        ageRangeOne();
        const ageRangeTwo = async() => {
            const res = await instance.get('/patients/search?age=30 - 59')
                // setAgeTwo(res.data.length)
        }
        ageRangeTwo();

        const ageRangeThree = async() => {
            const res = await instance.get('/patients/search?age=60 - 89')
            // setAgeThree(res.data.length)
        }
        ageRangeThree();

        const ageRangeFour = async() => {
            const res = await instance.get('/patients/search?age=0 - 29')
            // setAgeFour(res.data.length)
        }
        ageRangeFour();

    }, [])

    let gender;
    let bmiRanges;
    let ageRanges;

      const data = [
         gender = [
{
        name:"male",
        size:males,
        color:"red"
    },{
   name:"female",
        size:females,
        color:"blue"
    }
          ],
          bmiRanges=[
            {
        name:"male",
        size:males,
        color:"red"
    },{
   name:"female",
        size:females,
        color:"blue"
    }
          ],
          ageRanges=[
                {name:"Ages: 0 - 29",size:ageOne,color:"red"},
                {name:" Ages: 30 - 59",size:ageTwo,color:"blue"},
                {name: "Ages: 60 - 89", size:ageThree,color:"yellow"},
                {name:'Ages: 90 and above', size:ageFour, color:"green"}
          ]
       ];

    const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,

  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
    return (
        <View>
              <View style={{width:'100%'}}>
                        <PieChart 
                            data={data[0]}
                            width={screenWidth}
                            height={220}
                            chartConfig={chartConfig}
                            accessor={"size"}
                            backgroundColor={'transparent'}
                            paddingLeft={"4"}

                            center={[0,0]}
                            absolute

                        />
                        <PieChart 
                            data={data[2]}
                            width={screenWidth}
                            height={220}
                            chartConfig={chartConfig}
                            accessor={"size"}
                            backgroundColor={'transparent'}
                            paddingLeft={"4"}
                            center={[0,0]}
                            absolute

                        />
                    </View>
        </View>
    )
}

export default Charts

const styles = StyleSheet.create({})
