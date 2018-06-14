import React from 'react';
import {AppRegistry,Platform,Text,View,ListView,TouchableHighlight, StyleSheet} from 'react-native';
import {PropTypes} from 'prop-types';
import SearchBar from 'react-native-searchbar';
import renderIf from 'render-if'

import UserToHuntRow from './UserToHuntRow'
import MainHeaderList from './MainHeaderList';

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#1ed760",
        flex:1,
        justifyContent:"flex-start",
        paddingTop:Platform.OS==='ios'?25:0,
    },
    usersToHuntList:{
        paddingTop:20,
    },
    button: {
        height:50,
        borderColor:'#1ed760',
        borderWidth:2,
        backgroundColor:'#1ed760',
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

export default class UsersToHuntList extends React.Component{
    constructor(props,context){
        super(props,context);
        const ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=> r1 !== r2
        });
        this.state={
            dataSource:ds.cloneWithRows(props.usersToHunt),
            searching:false,
        }
        this.setUsersToHunt = this.setUsersToHunt.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setUsersToHunt(nextProps.usersToHunt)
    }

    setUsersToHunt(usersToHunt){
        const dataSource = this.state.dataSource.cloneWithRows(usersToHunt);
        this.setState(previousState => {
            return { 
                searching: previousState.searching,
                dataSource:dataSource
            };
        });
    }
    renderRow(userToHunt){
        return(
            <UserToHuntRow 
                onRowDetails={this.props.onRowDetails} 
                userToHunt={userToHunt}/>
        )
    }
    onSearch(){
        this.setState(previousState => {
            return { searching: true,
                    dataSource:previousState.dataSource
                };
        });
        this.searchBar.show();
    }
    handleSearchResults(results) {
        this.setUsersToHunt(results);
    }
    onSearchBack(){
        this.setState(previousState => {
            return { searching: false,
                    dataSource:previousState.dataSource
                };
        });
        this.searchBar.hide();
    }
    onSearchClean(){
        this.setUsersToHunt(this.props.usersToHunt);
    }
    render(){
        return(
            <View style={styles.container}>
                <SearchBar
                    ref={(ref) => this.searchBar = ref}
                    data={this.props.usersToHunt}
                    handleResults={this.handleSearchResults.bind(this)}
                    onBack={this.onSearchBack.bind(this)}
                    onX={this.onSearchClean.bind(this)}
                    allDataOnEmptySearch={true}
                />
                {renderIf(!this.state.searching)(
                    <MainHeaderList 
                        ref={(ref) => this.headerList = ref}
                        onSearch={this.onSearch.bind(this)}
                    />
                )}

                <ListView
                    style={styles.usersToHuntList}
                    key={this.props.usersToHunt}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}/>

            </View>
        );
    }
}

/*<TouchableHighlight
        onPress={this.props.onAdd} 
        style={styles.button}>
        <Text style={styles.buttonText}>Add One</Text>
</TouchableHighlight>*/

UsersToHuntList.PropTypes = {
    onRowDetails:PropTypes.func.isRequired,
    onAdd:PropTypes.func.isRequired,
    usersToHunt: PropTypes.arrayOf(PropTypes.object).isRequired,
}

AppRegistry.registerComponent("WhoIs",()=>UsersToHuntList);
