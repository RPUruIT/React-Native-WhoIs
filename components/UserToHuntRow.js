import React from 'react';
import {AppRegistry,Platform,View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {PropTypes} from 'prop-types';

import RNFetchBlob from 'react-native-fetch-blob';
import renderIf from 'render-if'
import LinearGradient from 'react-native-linear-gradient';


//const savedImage = "file:///storage/emulated/0/Pictures/IMG_20180629_160152.jpg"
//android
//"file:///storage/emulated/0/DCIM/IMG_20180620_160637.jpg"
//ios
//"/var/mobile/Containers/Data/Application/079B2916-D8EF-48AE-9949-BB8BED3512C0/Documents/A5B59F2F-3DFA-4815-9F6B-419731A4A833.jpg"/

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#6ED542',
      padding:15,
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      margin:10,
      borderRadius:10,
    },
    detailContainer:{
        flex:1,
        justifyContent:'flex-end',
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    labelName:{
        fontSize:20,
        fontWeight:'300',
        color:"white",
        fontFamily:Platform.OS==="ios"?"Avenir-Heavy":"OpenSans-Regular"
    },
    labelNickName:{
        fontSize:15,
        color:"#f8f8f8",
        fontFamily:Platform.OS==="ios"?"Avenir-Heavy":"OpenSans-Regular"
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
    getColor(){
        if(this.props.userToHunt.fileImagePath.length==0)
            return["grey","grey"]
        else
            return ['#1ed760','#9AEE77'];
    }
    render(){
        return(
            <TouchableOpacity onPress={this.rowDetails} activeOpacity={0.7}>
                <LinearGradient 
                            style={[styles.container,styles.shadow]}
                            start={{x: 0.5, y: 0}} end={{x: 1, y: 0}} 
                	        colors={this.getColor()}>
                        <View style={styles.detailContainer}>
                            <Text style={styles.labelName}>
                                {this.props.userToHunt.name}
                            </Text>
                            <Text style={styles.labelNickName}>
                                {this.props.userToHunt.nickname}
                            </Text>
                        </View>
                        {renderIf(this.props.userToHunt.fileImagePath.length==0)(
                            <Image 
                            style={{width: 60, height: 60, borderRadius:60}} 
                            source={require('../assets/imgs/user.png')}
                            />
                        )
                        }
                         {renderIf(this.props.userToHunt.fileImagePath.length>0)(
                             <TouchableOpacity onPress={()=>this.props.onImageTapped(this.props.userToHunt)} activeOpacity={0.7}>
                                <Image 
                                style={{width: 60, height: 60, borderRadius:60}} 
                                source={{uri:this.props.userToHunt.fileImagePath}}
                                />
                            </TouchableOpacity>
                        )
                        }
                 </LinearGradient>
               
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