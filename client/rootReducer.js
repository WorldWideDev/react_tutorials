import {combineReducers} from 'redux';
import flashMessages from './reducers/flashMessages'

//takes state and action, and returns new state
export default combineReducers({
    flashMessages
})
