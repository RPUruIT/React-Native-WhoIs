import React from 'react';
import {AppRegistry,Platform,Text,View,ListView,TouchableHighlight, StyleSheet} from 'react-native';
import {PropTypes} from 'prop-types';

import SearchBar from 'react-native-searchbar';
import LinearGradient from 'react-native-linear-gradient';
import renderIf from 'render-if'

import UserToHuntRow from './UserToHuntRow'
import UsersToHuntMainHeaderList from './UsersToHuntMainHeaderList';
import UserHuntedPopup from './UserHuntedPopup';


import PopupDialog from 'react-native-popup-dialog';

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"flex-start",
        paddingTop:Platform.OS==='ios'?25:0,
    },
    popup:{
        flex:1,
        height:200,width:200
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

    getListViewStyle(){
        
        if(this.state.searching)
            return {paddingTop:60}
        else
            return {paddingTop:20}
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
    changeStatusSearching(searching){
        this.setState(previousState => {
            return { searching: searching,
                    dataSource:previousState.dataSource
                };
        });
    }
    renderRow(userToHunt){
        return(
            <UserToHuntRow 
                onRowDetails={this.props.onRowDetails} 
                userToHunt={userToHunt}
                onImageTapped={this.onImageTapped.bind(this)}/>
        )
    }
    onSearch(){
        this.changeStatusSearching(true);
        this.searchBar.show();
    }
    handleSearchResults(results) {
        this.setUsersToHunt(results);
    }
    onSearchBack(){
        this.changeStatusSearching(false);
        this.setUsersToHunt(this.props.usersToHunt);
        this.searchBar.hide();
    }
    onSearchClean(){
        this.setUsersToHunt(this.props.usersToHunt);
    }

    onImageTapped(userToHunt){
        this.popupDialog.show();
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
                    <UsersToHuntMainHeaderList 
                        onSearch={this.onSearch.bind(this)}
                    />
                )}
                <ListView
                    style={this.getListViewStyle()}
                    key={this.props.usersToHunt}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}/>
                <PopupDialog ref={(ref) => { this.popupDialog = ref; }}> 
                    <UserHuntedPopup style={styles.popup}/> 
                </PopupDialog>
                
            </View>

        );
    }
}

UsersToHuntList.PropTypes = {
    onRowDetails:PropTypes.func.isRequired,
    usersToHunt: PropTypes.arrayOf(PropTypes.object).isRequired,
}

AppRegistry.registerComponent("WhoIs",()=>UsersToHuntList);
