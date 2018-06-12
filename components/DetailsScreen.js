import React from 'react';
import {AppRegistry,Text} from 'react-native';

export default class DetailsScreen extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
        
        }
    }
    render(){
        return (<Text>Maui</Text>)
    }
    
}

AppRegistry.registerComponent("WhoIs",()=>DetailsScreen);