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
        this.state = usersToHuntStore.getState();

        usersToHuntStore.subscribe(()=>{
          this.setState(usersToHuntStore.getState())
        });
    }

    componentWillMount = async () => {
      const response = await fetch('http://172.20.3.161/users')
      const users = await response.json();
      AsyncStorage.getAllKeys((err, keys) => { 
          AsyncStorage.multiGet(keys, (err, usersOnDB) => {

            let usersCaptured = new Array();
            usersOnDB.map((result, i, user) => {
              let userValue = user[i][1];
              usersCaptured.push(JSON.parse(userValue));
            });

            let usersNotCaptured = new Array();
            users.forEach(user => {
              if(!keys.includes(user._id)){
                var userNotCaptured = {
                                        id:user._id,
                                        name:user.name,
                                        fileImagePath:"file:///storage/emulated/0/Pictures/IMG_20180629_160152.jpg",
                                        comments:"",
                                        nickname:""
                                      };
                usersNotCaptured.push(userNotCaptured);
              }
              else{
                console.log(user._id)
              }
            });

            var usersToList=usersCaptured.concat(usersNotCaptured);
            usersToHuntStore.dispatch({
              type:'INIT',
              usersToList
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
      console.log(userToHunt)
      this.props.navigation.navigate("TakePicture",userToHunt)
    }
    render(){
        return (
          <UsersToHuntList 
          onRowDetails={this.onRowDetails.bind(this)}
          usersToHunt={this.state.usersToHunt}/>
        )
    }
}
          
AppRegistry.registerComponent("WhoIs",()=>HomeScreen);