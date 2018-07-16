import React from 'react';
import {AppRegistry,AsyncStorage,View,TouchableHighlight,ScrollView,Text,TextInput,Image,StyleSheet,Platform} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import usersToHuntStore from '../usersToHuntStore'

const styles = StyleSheet.create({
    scrollView:{
        flex:1,
        backgroundColor:'#FFF'
    },
    container: {
        flex:1,
        justifyContent:"flex-start",
        paddingTop:25,
        padding:10
    },
    userImageContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    usersHuntedImage:{
        width: 120, height: 120, 
        borderRadius:120,
    },
    text:{
        fontSize:22
    },
    input:{
        borderWidth:Platform.OS==='ios'?1:0,
        borderColor:'#D7D7D7',
        height:50,
        marginLeft:10,
        marginRight:10,
        padding:15,
        borderRadius:3
    },
    touchableButton:{
        borderRadius:10,
        margin:20
    },
    button: {
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#FAFAFA',
        fontSize:20,
        fontWeight:'600'    
    }
});

export default class AddUserToHuntScreen extends React.Component{

    constructor(props,context){
        super(props,context);
        this.state=this.props.navigation.state.params;
        this.captureUser=this.captureUser.bind(this);
    }

    captureUser(){
        let userToHunt = this.state.userToHunt;
        userToHunt.fileImagePath = this.state.userImagePath;
        console.log("va a salvar"+JSON.stringify(userToHunt))
        console.log(this.state.userToHunt.comments)
        let storeData= async()=>{
            await AsyncStorage.setItem(
                userToHunt.id,
                JSON.stringify(userToHunt),
                ()=>{
                    usersToHuntStore.dispatch({
                    type:'USER_HUNTED',
                    userToHunt
                    })
                    this.props.navigation.pop();
                    console.log("guarda bien")
                },
                ()=>{
                    console.log("error al guardar")
                }
            );
            
        }
        storeData();
    }

    render(){
        return (       
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.userImageContainer}>
                        <Text style={styles.text}>{this.state.userToHunt.name}</Text>
                        <Image 
                            style={styles.usersHuntedImage} 
                            //source={{uri:"file:///storage/emulated/0/Pictures/IMG_20180629_160152.jpg"}}
                            source={{uri:this.state.userImagePath}}
                            >
                        </Image>
                    </View>
                    <Text style={styles.text}>Comentario</Text>
                    <TextInput style={styles.input}
                    onChangeText={(text) => this.state.userToHunt.comments=text}/>
                    <Text style={styles.text}>Le dicen</Text>
                    <TextInput style={styles.input}
                     onChangeText={(text) =>this.state.userToHunt.nickname=text}/>
                    <TouchableHighlight
                        onPress={this.captureUser}
                        style={[styles.touchableButton]}>
                        <LinearGradient 
                            style={[styles.button]}
                	        colors={['#5d6664','#1ed760']}>
                            <Text style={styles.buttonText}>
                                Agregar
                            </Text>
                        </LinearGradient>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }

}


AppRegistry.registerComponent("WhoIs",()=>AddUserToHuntScreen);

