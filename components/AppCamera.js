// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text,Modal, View, TouchableOpacity } from 'react-native';
// import { Camera } from 'expo-camera';

// export default function AppCamera() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={styles.container}>
        
//             <Modal style={{height:"40%",width:'30%'}} >
                
//                 <Camera style={styles.camera} type={type}>
//                     <View style={styles.buttonContainer}>
//                         <TouchableOpacity
//                             onPress={() => {
//                                 setType(
//                                 type === Camera.Constants.Type.back
//                                     ? Camera.Constants.Type.front
//                                     : Camera.Constants.Type.back
//                                 );
//                             }}>
//                             <Text style={styles.text}> Flip </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </Camera>
//             </Modal>
           


//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {flex: 1,}
// })
