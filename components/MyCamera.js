import React from 'react';
import {AppRegistry,View,Text,StyleSheet} from 'react-native';

import Camera from "react-native-camera"

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:"row",
    },
    view:{
      flex:1,
      justifyContent:"flex-end",
      alignItems:"center"
    },
    capture:{
        flex: 0,
        backgroundColor:'white',
        borderRadius:10,
        color:'#1ed760',
        padding:15,
        margin:45
    }
})

export default class MyCamera extends React.Component{

    takePicture(){
        try {
            const options = {
                /*audio: false,
                mode: Camera.constants.CaptureMode.still,
                target: Camera.constants.CaptureTarget.disk*/
              };
            this.camera.capture()
                .then((data) => console.log(data))
                .catch(err => console.error(err));
        } catch (error) {
            
        }
        
    }

    render(){
        return (
            <View style={styles.container}>
                <Camera ref={(cam)=>{this.camera=cam}} 
                        style={styles.view} 
                        aspect={Camera.constants.Aspect.fill}
                        //type={Camera.constants.Type.front}
                        captureQuality={Camera.constants.CaptureQuality.medium}
                        //captureQuality={Camera.constants.CaptureQuality["1080p"]}
                        >
                        <Text 
                            style={styles.capture}
                            onPress={this.takePicture.bind(this)}>
                            WHISKY!!
                        </Text>
                </Camera>
            </View>
        )
    }
}

AppRegistry.registerComponent("WhoIs",()=>MyCamera);

