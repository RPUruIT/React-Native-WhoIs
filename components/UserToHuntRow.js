import React from 'react';
import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {PropTypes} from 'prop-types';
import RNFetchBlob from 'react-native-fetch-blob';


const Blob = RNFetchBlob.polyfill.Blob
const savedImage = ""
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
        this.state={
            userImage:savedImage
        }
    }

    componentWillMount(){
        //Blob.build(
            /*RNFetchBlob.wrap("assets-library://asset/asset.JPG?id=12A1659D-E4BF-4B81-A9F2-EA86A66FBCFF&ext=JPG"))
            .then((blob) => {
                //this.state.userImage=blob;
            })*/
        /*var uri="assets-library://asset/asset.JPG?id=9CCCA6F6-8428-49EB-9E3E-9266FEBC4731&ext=JPG";
        RNFetchBlob.fs.readFile(uri, 'base64')
        .then((data) => {
            let shareOptions = {
                title: "React Native Share Example",
                message: "Check out this photo!",
                url: `data:image/jpg;base64,${data}`,
                subject: "Check out this photo!"
            }
            let base64Image = 'data:image/jpeg;base64,'+data;
            this.state = {userImage:base64Image};
            console.log(this.state.userImage)
        });*/
    }

    render(){
        return(
            <TouchableOpacity onPress={this.props.onRowDetails}>
                <View style={styles.container}>
                        <Image 
                            style={{width: 50, height: 50}} 
                            //source={require('../assets/imgs/user.png')}
                            //source={requiere('file://assets-library://asset/asset.JPG?id=12A1659D-E4BF-4B81-A9F2-EA86A66FBCFF&ext=JPG')}
                            source={{uri: this.state.userImage}}
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
    userToHunt:PropTypes.shape({
        name:PropTypes.string.isRequired
    }).isRequired,
}

AppRegistry.registerComponent("WhoIs",()=>UserToHuntRow);