import React from 'react';
import {PropTypes} from 'prop-types';
import {AppRegistry,StyleSheet,View,TouchableOpacity,Text} from 'react-native'
import usersToHuntStore from '../usersToHuntStore'

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

const styles = StyleSheet.create({
    container: {
        flexWrap:'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        backgroundColor:'#b3b7b6'
    },
    searchContainer:{
        padding:10,
        backgroundColor:"#666",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        width:70,
    },
    search:{
        color:"#FAFAFA",
    },
    containerScore:{
        padding:10,
        backgroundColor:'transparent',
        flex:1,
        alignItems:'flex-end'   
    },
    
});

export default class UsersToHuntMainHeaderList extends React.Component{
    constructor(props,context){
        super(props,context); 
        this.state={score:"0/0",color:this.getColor(0,0)};
        usersToHuntStore.subscribe(()=>{  
            this.setScore();
        });
        
    }

    setScore(){
        var users = usersToHuntStore.getState();
        var usersHuntedCount=users.usersHunted.length;
        var totalUsers=usersHuntedCount+users.usersToHunt.length;
        this.setState(
            {
                score:usersHuntedCount+"/"+totalUsers,
                color:this.getColor(usersHuntedCount,totalUsers)
            }
        )
    }

    getColor(hunted,total){
        var color="red";
        var relation=hunted/total;
        color=relation>=0.9?"green":(relation>=0.2?"yellow":"red");
        return color;
    }

    scoreStyle(){
        return {
            color:this.state.color,
            fontSize:10
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onSearch} >
                    <View style={styles.searchContainer}>
                        <Icon name="search" size={30} color="#FAFAFA"></Icon>
                        <Text style={styles.search}>Buscar</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.containerScore}>
                    <Text style={this.scoreStyle()}>URUITERS {this.state.score}</Text>
                </View>
            </View>
        )
    }

}

UsersToHuntMainHeaderList.PropTypes = {
    onSearch:PropTypes.func.isRequired
}

AppRegistry.registerComponent("WhoIs",()=>UsersToHuntMainHeaderList);