import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth'
import teamReducer from './teamReducer'

export default combineReducers({
    form:formReducer,
    auth:authReducer,
    team:teamReducer
});