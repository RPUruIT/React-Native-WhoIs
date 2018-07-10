import React from 'react';
import {AppRegistry,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './components/HomeScreen'
import TakePictureScreen from './components/TakePictureScreen'
import AddUserToHuntScreen from './components/AddUserToHuntScreen'
import UserHuntedDetailsScreen from './components/UserHuntedDetailsScreen'

const RootStack = createStackNavigator({
  Home: HomeScreen,
  AddUserToHunt:AddUserToHuntScreen,
  UserHuntedDetails:UserHuntedDetailsScreen,
  TakePicture:TakePictureScreen
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}


