import React from 'react';
import {PropTypes} from 'prop-types';
import {AppRegistry,StyleSheet,View,TouchableOpacity,Text} from 'react-native'

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

const styles = StyleSheet.create({
    container: {
        flexWrap:'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        backgroundColor:'gray'
    },
    searchContainer:{
        padding:10,
        backgroundColor:"#666",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        width:70,
    },
    search:{
        color:"#FAFAFA",
    },
    containerScore:{
        padding:10,
        backgroundColor:'transparent',
        flex:1,
        alignItems:'flex-end'   
    },
    score:{
        color:"#FAFAFA",
        fontSize:17
    }
});

export default class MainHeaderList extends React.Component{
    constructor(props,context){
        super(props,context); 

    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onSearch} >
                    <View style={styles.searchContainer}>
                        <Icon name="search" size={30} color="#FAFAFA"></Icon>
                        <Text style={styles.search}>Buscar</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.containerScore}>
                    <Text style={styles.score}>Uruiters 10/10</Text>
                </View>
            </View>
        )
    }

}

MainHeaderList.PropTypes = {
    onSearch:PropTypes.func.isRequired
}

AppRegistry.registerComponent("WhoIs",()=>MainHeaderList);