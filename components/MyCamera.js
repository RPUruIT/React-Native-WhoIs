import React from 'react';
import {AppRegistry,View,Text,StyleSheet} from 'react-native';
import {PropTypes} from 'prop-types';
import Camera from 'react-native-camera';

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

    constructor(props,context){
        super(props,context);
    }

    takePicture=async function(){
        try {
            await this.camera.capture()
                .then((data) => 
                {   this.props.onPicture(data.path)
                })
                .catch(err => console.error(err));
        } catch (error) {
            
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Camera ref={(cam)=>{this.camera=cam}} 
                        style={styles.view}
                        captureTarget={Camera.constants.CaptureTarget.disk}
                        //captureTarget={Camera.constants.CaptureTarget. cameraRoll}
                        //aspect={Camera.constant.Aspect.fill}
                        //type={Camera.constants.Type.front}

                        //sin captureQuality, Camera se tranca
                        captureQuality={Camera.constants.CaptureQuality.medium}
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

MyCamera.PropTypes={
    onPicture:PropTypes.func.isRequired
}

