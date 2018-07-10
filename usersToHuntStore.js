import {createStore} from 'redux';

const defaultState={
    usersHunted:[

    ],
    usersToHunt:[
        
    ]
}

function usersCompare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
}

function usersToHuntStore(state=defaultState,action){
    switch(action.type){
        case 'INIT':{
            var users = action.users;

            users.usersHunted.sort(usersCompare);
            users.usersToHunt.sort(usersCompare);

            state=users; 
            return state;
        }
        case 'USER_HUNTED':{
            var index = state.usersToHunt.findIndex(x=>x.id==action.userToHunt.id);
            
            state.usersToHunt.splice(index,1);
            state.usersHunted.push(action.userToHunt);
            state.usersHunted.sort(usersCompare);
            state.usersToHunt.sort(usersCompare);

            return state;
        }
        default:
            return state;
    }
}

export default createStore(usersToHuntStore);