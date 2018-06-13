import {createStore} from 'redux';

const defaultState={
    usersToHunt:[
        
    ]
}

function usersToHuntStore(state=defaultState,action){
    switch(action.type){
        case 'INIT':{
            return Object.assign({},state,{usersToHunt:action.users});
        }
        case 'ADD_USERTOHUNT':
                return Object.assign({},state,{
                    usersToHunt:state.usersToHunt.concat([action.user])
                })
        default:
                return state;
    }
}

export default createStore(usersToHuntStore);