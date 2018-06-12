import React from 'react';
import {AppRegistry,Text,View,StyleSheet,TouchableHighlight} from 'react-native';
import {PropTypes} from 'prop-types';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderWidth:1,
      borderColor:"#E7E7E7",
      padding:20,
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      margin:10
    },
    label:{
        fontSize:20,
        fontWeight:'300',
    }
  });

export default class TaskRow extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight
                        onPress={this.props.onRowDetails}>
                        <Text style={styles.label}>{this.props.todo.task}</Text>
               </TouchableHighlight>
            </View>
        );
    }
}

TaskRow.PropTypes={
    onRowDetails:PropTypes.func.isRequired,
    todo:PropTypes.shape({
        task:PropTypes.string.isRequired
    }).isRequired,
}

AppRegistry.registerComponent("WhoIs",()=>TaskRow);