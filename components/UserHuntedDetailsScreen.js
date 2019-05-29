import React from 'react';
import {AppRegistry,AsyncStorage,View,ScrollView,Text,Image,StyleSheet,Platform} from 'react-native';

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
        marginTop:20,
        width: 160, height: 160, 
        borderRadius:120,
    },
    text:{
        fontSize:22,
        fontFamily:Platform.OS==="ios"?"Avenir-Heavy":"OpenSans-Regular"
    },
    input:{
        borderWidth:Platform.OS==='ios'?1:0,
        borderColor:'#D7D7D7',
        height:50,
        marginLeft:10,
        marginRight:10,
        padding:15,
        borderRadius:3
    }
});

export default class UserHuntedDetailsScreen extends React.Component{

    constructor(props,context){
        super(props,context);
        this.state=this.props.navigation.state.params;
    }
    render(){
        return (       
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.userImageContainer}>
                        <Text style={styles.text}>{this.state.name}</Text>
                        <Image 
                            style={styles.usersHuntedImage} 
                            source={{uri:this.state.fileImagePath}}
                            >
                        </Image>
                    </View>
                    <Text style={styles.text}>Comentario</Text>
                    <Text style={styles.input}>{this.state.comments}</Text>
                    <Text style={styles.text}>Le dicen</Text>
                    <Text style={styles.input}>{this.state.nickname}</Text>
                </View>
            </ScrollView>
        )
    }

}


AppRegistry.registerComponent("WhoIs",()=>UserHuntedDetailsScreen);

