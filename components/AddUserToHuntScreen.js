import React from 'react';
import {AppRegistry,View,TouchableHighlight,ScrollView,Text,TextInput,Image,StyleSheet,Platform} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"flex-start",
        paddingTop:25,
        backgroundColor:'pink'
    },
    userImageContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
    usersHuntedImage:{
        width: 120, height: 120, 
        borderRadius:120,
    },
    text:{
        fontSize:22,
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
    button: {
        height:50,
        borderColor:'#1ed760',
        borderWidth:2,
        backgroundColor:'#1ed760',
        margin:20,
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
    }
    render(){
        return (       
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.userImageContainer}>
                        <Image 
                            style={styles.usersHuntedImage} 
                            source={{uri:"file:///storage/emulated/0/Pictures/IMG_20180629_160152.jpg"}}
                            //source={{uri:this.state.userImagePath}}
                            >
                        </Image>
                    </View>
                    <Text style={styles.text}>Comentario</Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.text}>Le dicen</Text>
                    <TextInput style={styles.input}/>
                    <TouchableHighlight
                        style={[styles.button]}>
                        <Text style={styles.buttonText}>
                            Agregar
                        </Text>
                    </TouchableHighlight>

                </View>
            </ScrollView>
        )
    }

}


AppRegistry.registerComponent("WhoIs",()=>AddUserToHuntScreen);

