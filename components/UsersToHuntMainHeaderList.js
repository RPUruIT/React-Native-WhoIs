import React from 'react';
import {PropTypes} from 'prop-types';
import {AppRegistry,StyleSheet,View,Platform,TouchableOpacity,Text} from 'react-native'
import usersToHuntStore from '../usersToHuntStore'

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#F8FAF8'
    },
    title:{
        fontSize:30,
        fontFamily:Platform.OS==="ios"?"Avenir-Heavy":"Pacifico-Regular"
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
    searchContainer:{
        padding:10,
        backgroundColor:"#1ed760",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        width:70,
    },
    search:{
        color:"white",
    },
    containerScore:{
        padding:10,
        backgroundColor:'transparent',
        flex:1,
        flexDirection:'column',
        alignItems:'flex-end'   
    },
    label:{
        fontSize:20,
        fontFamily:Platform.OS==="ios"?"Avenir-Heavy":"OpenSans-Regular"
    }
    
});

export default class UsersToHuntMainHeaderList extends React.Component{
    constructor(props,context){
        super(props,context); 
        if(!this.state)
            this.state=this.getScore();
        usersToHuntStore.subscribe(()=>{  
            this.setScore();
        });
    }
    setScore(){ 
        this.setState(this.getScore());  
    }
    getScore(){
        var users = usersToHuntStore.getState();
        var usersHuntedCount=users.usersHunted.length;
        var totalUsers=usersHuntedCount+users.usersToHunt.length;

        return {score:usersHuntedCount+"/"+totalUsers,
        color:this.getColor(usersHuntedCount,totalUsers)}
    }

    getColor(hunted,total){
        var color="red";
        var relation=hunted/total;
        color=relation>=0.9?"green":(relation>=0.2?"yellow":"red");
        return color;
    }

    scoreStyle(){
        return {
            color:this.state.color
        }
    }
    render(){
        return(
            <View style={[styles.container,styles.shadow]}>
                <TouchableOpacity onPress={this.props.onSearch} activeOpacity={0.7}>
                    <View style={styles.searchContainer}>
                        <Icon name="search" size={30} color="white"></Icon>
                        <Text style={styles.search}>Buscar</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>Who Is</Text>
                <View style={styles.containerScore}>
                    <Text style={[this.scoreStyle(),styles.label]}>{this.state.score}</Text>
                </View>
            </View>
        )
    }

}

UsersToHuntMainHeaderList.PropTypes = {
    onSearch:PropTypes.func.isRequired
}

AppRegistry.registerComponent("WhoIs",()=>UsersToHuntMainHeaderList);