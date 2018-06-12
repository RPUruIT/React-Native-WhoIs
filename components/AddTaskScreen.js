import React from 'react';
import {AppRegistry,Text,Button} from 'react-native';
import TaskForm from './TaskForm'

import store from '../todoStore'

export default class AddTaskScreen extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            
        }
    }
    static navigationOptions = {
        headerTitle: <Text>Nueva Task</Text>,
        headerRight: (
          <Button
            onPress={() => alert('Who is who?')}
            title="Info"
            color="orange"
          />
        )
    }
    onAdd(task){
        store.dispatch({
            type:'ADD_TODO',
            task,
        })
        this.props.navigation.goBack();
    }
    onCancel(){
        this.props.navigation.goBack();
    }
    render(){
        return <TaskForm onAdd={this.onAdd.bind(this)}
                         onCancel={this.onCancel.bind(this)}
                         task={this.props.navigation.getParam()}/>
    }
}

AppRegistry.registerComponent("WhoIs",()=>AddTaskScreen);