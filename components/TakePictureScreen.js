import React from 'react';
import {AppRegistry,StyleSheet} from 'react-native';

import MyCamera from './MyCamera'

export default class TakePictureScreen extends React.Component {
    render() {
      return (
        <MyCamera />
      );
    }
}

AppRegistry.registerComponent("WhoIs",()=>TakePictureScreen);
  