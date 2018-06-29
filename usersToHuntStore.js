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
        case 'USER_HUNTED':
                return action.user;
        default:
                return state;
    }
}

export default createStore(usersToHuntStore);