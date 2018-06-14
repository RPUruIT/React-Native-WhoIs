import React from 'react';
import {AppRegistry,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './components/HomeScreen'
//import AddTaskScreen from './components/AddTaskScreen'
//import DetailsScreen from './components/DetailsScreen'

const RootStack = createStackNavigator({
  Home: HomeScreen,
  //AddTask:AddTaskScreen,
  //Details:DetailsScreen,
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}


