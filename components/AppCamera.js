import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,Modal, Image, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function AppCamera({photo, setPhoto}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null)
  // const [photo, setPhoto] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  let data;
  const snap = async() => {
    if(camera) {
         data = await camera.takePictureAsync();
         console.log("data", data.uri)
        setPhoto(data.uri)
    }
  }

  const handleFlip = () => {
            setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
                            }

  const handleNewImage = () => {
    setPhoto(null)
  }
  return (
    <View style={styles.container}>
        
              <View 
                style={{height:"40%",width:'70%'}}>       
                 <Camera style={{aspectRatio:1}} type={type} 
                  ref={(ref) =>setCamera(ref) } 
                  
                >
                    <View style={{justifyContent:'space-between', backgroundColor:'green'}}>
                        <TouchableOpacity
                            onPress={handleFlip}>
                            <Text style={styles.text}>FLIP</Text>
                        </TouchableOpacity>

                    
                        <TouchableOpacity onPress={snap} style={{position:'absolute',left:"40%",bottom:0,alignItems:'center'}}>
                            <Text style={styles.text}>SNAP</Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity onPress={handleNewImage} style={{position:'absolute',right:"0%",bottom:0,alignItems:'flex-end'}}>
                            <Text style={styles.text}>NEW </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
             </View>
   
                            
           
            <View style={{height:"20%", width:"40%"}}>

                {photo && 
                    <>
                    <Text>Here's it</Text>

                    <Image source={{uri: photo}} style={{flex:1, height:"30%", width:"30%"}} />

                    </>
                  }
            </View>
               
                   

    </View>
  );
}

const styles = StyleSheet.create({
    container: {flex: 1,},
    text: {
        color:'white'
    }
})
