import React from 'react';
import {AppRegistry,Text,View,ListView,TouchableHighlight, StyleSheet} from 'react-native';
import {PropTypes} from 'prop-types';

import TaskRow from './TaskRow'

const styles = StyleSheet.create({
    container: {
        paddingTop:40,
        backgroundColor:"#F7F7F7",
        flex:1,
        justifyContent:"flex-start"

    },
    button: {
        height:50,
        borderColor:'orange',
        borderWidth:2,
        backgroundColor:'orange',
        margin:20,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#FAFAFA',
        fontSize:20,
        fontWeight:'600'    
    }
});

export default class TaskList extends React.Component{
    constructor(props,context){
        super(props,context);
        const ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=> r1 !== r2
        });

        this.state={
            dataSource:ds.cloneWithRows(props.todos)
        }
    }

    componentWillReceiveProps(nextProps){
        const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
        this.setState({dataSource})
    }

    renderRow(todo){
        return(
            <TaskRow onRowDetails={this.props.onRowDetails} todo={todo}/>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <ListView 
                    key={this.props.todos}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}/>
                    <TouchableHighlight
                            onPress={this.props.onAdd} 
                            style={styles.button}>
                        <Text style={styles.buttonText}>Add One</Text>
                    </TouchableHighlight>
            </View>
        );
    }
}

TaskList.PropTypes = {
    onRowDetails:PropTypes.func.isRequired,
    onAdd:PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

AppRegistry.registerComponent("WhoIs",()=>TaskList);
