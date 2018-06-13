import React from 'react';
import {AppRegistry} from 'react-native'
import SearchBar from 'react-native-searchbar';

const items = [
    1337,
    'janeway',
    {
      lots: 'of',
      different: {
        types: 0,
        data: false,
        that: {
          can: {
            be: {
              quite: {
                complex: {
                  hidden: [ 'gold!' ],
                },
              },
            },
          },
        },
      },
    },
    [ 4, 2, 'tree' ],
  ];

export default class Search extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={}
    }
      
    _handleResults(results) {

    }
    
    render(){
        return (
            <SearchBar
                ref={(ref) => this.searchBar = ref}
                data={items}
                handleResults={this._handleResults}
                showOnLoad
            />
        )
    }

}

AppRegistry.registerComponent("WhoIs",()=>Search);