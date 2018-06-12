import React from 'react';
import {AppRegistry,Text,Button,StyleSheet} from 'react-native';

import TaskList from './TaskList'
import store from '../todoStore'

const styles = StyleSheet.create({
    navBar: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
    },
    navTitle: {
      color: 'orange',
    }
  })

export default class HomeScreen extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state=store.getState();

        store.subscribe(()=>{
          this.setState(store.getState())
        });
    }
    static navigationOptions = {
        headerTitle: <Text>WHO IS</Text>,
        headerRight: (
          <Button
            onPress={() => alert('Who is who?')}
            title="Info"
            color="orange"
          />
        )
    }
    onRowDetails(){
      
    }
    onAdd(){
      /*this.props.navigation.addListener('willFocus',
          ()=>{
            alert(JSON.stringify(this.props.navigation.state.params))}
      );*/
       /*
      this.state.todos.push({task:task});
      this.setState({todos:this.state.todos});
      */
      this.props.navigation.navigate("AddTask")
    }
    render(){
        return (<TaskList 
            onAdd={this.onAdd.bind(this)}
            onRowDetails={this.onRowDetails.bind(this)}
            todos={this.state.todos}/>)
    }
    
}

AppRegistry.registerComponent("WhoIs",()=>HomeScreen);