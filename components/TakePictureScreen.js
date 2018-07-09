import React from 'react';
import {AppRegistry,StyleSheet} from 'react-native';

import MyCamera from './MyCamera'


import {NavigationActions} from 'react-navigation';


export default class TakePictureScreen extends React.Component {

    constructor(props,context){
      super(props,context);
      this.state = {userToHunt:this.props.navigation.state.params};
    }

    onPicture(path){
        
        if(path){
          this.props.navigation.replace('AddUserToHunt',
                                        {userToHunt:this.state.userToHunt,
                                        userImagePath:path})
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
  