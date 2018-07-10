import React from 'react';
import {AppRegistry,AsyncStorage,Text,Button,StyleSheet} from 'react-native';

import usersToHuntStore from '../usersToHuntStore'

import UsersToHuntList from './UsersToHuntList'

const styles = StyleSheet.create({
    navBar: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    },
    navTitle: {
      color: 'orange',
    }
  })

console.disableYellowBox = true;//in order to dismiss warning

export default class HomeScreen extends React.Component{
    constructor(props,context){
        super(props,context);

        this.state=this.getUsersToList();

        usersToHuntStore.subscribe(()=>{      
          this.setState(this.getUsersToList())
        });
    }

    getUsersToList(){
        var users = usersToHuntStore.getState();
        var usersToList=users.usersHunted.concat(users.usersToHunt); 
        return {users:usersToList};
    }

    componentWillMount = async () => {
      const response = await fetch('http://172.20.3.161/users')
      const users = await response.json();
      AsyncStorage.getAllKeys((err, keys) => { 
          AsyncStorage.multiGet(keys, (err, usersOnDB) => {

            let usersHunted = new Array();
            usersOnDB.map((result, i, user) => {
              let userValue = user[i][1];
              usersHunted.push(JSON.parse(userValue));
            });

            let usersToHunt = new Array();
            users.forEach(user => {
              if(!keys.includes(user._id)){
                var userNotCaptured = {
                                        id:user._id,
                                        name:user.name,
                                        fileImagePath:"",
                                        comments:"",
                                        nickname:""
                                      };
                usersToHunt.push(userNotCaptured);
              }
            });
            
            usersToHuntStore.dispatch({
              type:'INIT',
              users:{
                usersHunted:usersHunted,
                usersToHunt:usersToHunt
              }
            })

          });
        }
      );
    }

    static navigationOptions = {
        header: null
        /*headerTitle: <Text>WHO IS</Text>,
        headerRight: (
          <Button
            onPress={() => alert('Who is who?')}
            title="Info"
            color="#1ed760"
          />
        )*/
    }
    onRowDetails(userToHunt){
      if(userToHunt.fileImagePath=="")
        this.props.navigation.navigate("TakePicture",userToHunt)
      else
        this.props.navigation.navigate("UserHuntedDetails",userToHunt)
    }
    render(){
        return (
          <UsersToHuntList 
          onRowDetails={this.onRowDetails.bind(this)}
          usersToHunt={this.state.users}/>
        )
    }
}
          
AppRegistry.registerComponent("WhoIs",()=>HomeScreen);