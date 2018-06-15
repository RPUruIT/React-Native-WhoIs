import React from 'react';
import {AppRegistry,View,StyleSheet} from 'react-native';

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
})

export default class MyCamera extends React.Component{

    render(){
        return (
            <View style={styles.container}>
                <Camera ref={(cam)=>{this.camera=cam}} 
                        style={styles.view} 
                        aspect={Camera.constants.Aspect.fill}></Camera>
            </View>
        )
    }
}

AppRegistry.registerComponent("WhoIs",()=>MyCamera);

