import React from 'react';
import {AppRegistry,Text,View,Image, StyleSheet} from 'react-native';
import {PropTypes} from 'prop-types';

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"flex-start",
        paddingTop:25,
        padding:10,
        backgroundColor:'white'
    },
    userImageContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    userHuntedImage:{
        marginTop:20,
        width: 200, height: 220
    },
    label:{
        fontSize:22
    },

});

export default class UserHuntedPopup extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={ 
            name: props.userHunted.name,
            fileImagePath:props.userHunted.fileImagePath
        };
    }

    render(){
        return(
        <View style={styles.userImageContainer}>
           <Text style={styles.label}>{this.state.name}</Text>
           <Image 
                style={styles.userHuntedImage} 
                source={{uri:this.state.fileImagePath}}/>
        </View>
        )
    }
}

AppRegistry.registerComponent("WhoIs",()=>UserHuntedPopup);
/*
*/