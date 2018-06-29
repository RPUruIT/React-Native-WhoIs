import React from 'react';
import {AppRegistry,Text,Button,StyleSheet} from 'react-native';

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
      usersToHuntStore.dispatch({
        type:'INIT',
        users
      })
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
    onRowDetails(){
      this.props.navigation.navigate("TakePicture")
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