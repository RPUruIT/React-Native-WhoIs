import React from 'react';
import {AppRegistry,Text,View,TouchableHighlight, StyleSheet} from 'react-native';
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
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    usersHuntedImage:{
        width: 160, height: 160, 
        borderRadius:120,
    },
    label:{
        fontSize:22
    },

});

export default class UserHuntedPopup extends React.Component{
    constructor(props,context){
        super();
    }
    componentWillReceiveProps(nextProps){
        
    }
    render(){
        return(
        <View style={styles.userImageContainer}>
                <Text>holaa</Text>
        </View>
        )
    }
}

AppRegistry.registerComponent("WhoIs",()=>UserHuntedPopup);
/*            <Text style={styles.label}>{this.state.name}</Text>
            <Image 
                style={styles.usersHuntedImage} 
                source={{uri:this.state.fileImagePath}}
                >
            </Image>*/