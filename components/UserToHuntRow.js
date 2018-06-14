import React from 'react';
import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {PropTypes} from 'prop-types';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderWidth:1,
      borderColor:"#E7E7E7",
      padding:20,
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      margin:10
    },
    label:{
        fontSize:20,
        fontWeight:'300',
    }
  });

export default class UserToHuntRow extends React.Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onRowDetails}>
                <View style={styles.container}>
                        <Image 
                            style={{width: 50, height: 50}} 
                            source={require('../assets/imgs/Alien-512.png')}></Image>
                        <Text style={styles.label}>{this.props.userToHunt.name}</Text>
                </View>
             </TouchableOpacity>
        );
    }
}

UserToHuntRow.PropTypes={
    onRowDetails:PropTypes.func.isRequired,
    userToHunt:PropTypes.shape({
        name:PropTypes.string.isRequired
    }).isRequired,
}

AppRegistry.registerComponent("WhoIs",()=>UserToHuntRow);