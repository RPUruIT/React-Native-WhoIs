import React from 'react';
import {AppRegistry,StyleSheet} from 'react-native';

import MyCamera from './MyCamera'


import {NavigationActions} from 'react-navigation';


export default class TakePictureScreen extends React.Component {

    onPicture(path){
        console.log(path);
        if(path){
          this.props.navigation.replace('AddUserToHunt',{userImagePath:path})
        }
        else{
          this.props.navigation.goBack();
        }
    }

    render() {
      return (
        <MyCamera onPicture={this.onPicture.bind(this)}/>
      );
    }
}

AppRegistry.registerComponent("WhoIs",()=>TakePictureScreen);
  