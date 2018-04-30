import { LOG_IN } from '../actions/auth';

export default function(state = { logged: false }, action){
    switch(action.type){
        case LOG_IN:
            return action.payload;
        default:
            return state;
    }
}