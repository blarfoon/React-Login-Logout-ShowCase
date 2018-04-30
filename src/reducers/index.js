import { combineReducers } from 'redux';
import LoginReducer from './reducer_auth';

const rootReducer = combineReducers({
  userState: LoginReducer
});

export default rootReducer;
