import React from 'react';
import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {PropTypes} from 'prop-types';
import RNFetchBlob from 'react-native-fetch-blob';


//const savedImage = "file:///storage/emulated/0/Pictures/IMG_20180629_160152.jpg"
//android
//"file:///storage/emulated/0/DCIM/IMG_20180620_160637.jpg"
//ios
//"/var/mobile/Containers/Data/Application/079B2916-D8EF-48AE-9949-BB8BED3512C0/Documents/A5B59F2F-3DFA-4815-9F6B-419731A4A833.jpg"/

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

    constructor(props,context){
        super(props,context);
        this.rowDetails=this.rowDetails.bind(this);
    }
    rowDetails(){
        this.props.onRowDetails(this.props.userToHunt)
    }
    render(){
        return(
            <TouchableOpacity onPress={this.rowDetails}>
                <View style={styles.container}>
                        <Image 
                            style={{width: 60, height: 60, borderRadius:60}} 
                            //source={require('../assets/imgs/user.png')}
                            //source={{uri:savedImage}}
                            source={{uri:this.props.userToHunt.fileImagePath}}
                            ></Image>
                        <Text style={styles.label}>
                            {this.props.userToHunt.name}
                        </Text>
                </View>
             </TouchableOpacity>
        );
    }
}

UserToHuntRow.PropTypes={
    onRowDetails:PropTypes.func.isRequired,
    /*userToHunt:PropTypes.shape({
        name:PropTypes.string.isRequired
    }).isRequired,*/
}

AppRegistry.registerComponent("WhoIs",()=>UserToHuntRow);