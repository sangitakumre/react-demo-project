import { AUTH_LOGIN, AUTH_ERROR } from '../actions/login/types'

const initialState = {
    isAuthenticated:false,
    message: '',
    errorMessage:''
}

export default (state = initialState, action) =>{
    switch(action.type){
        case AUTH_LOGIN:
            console.log('auth reduceer is login called')
            return{
                ...state,
                message:action.message,
                isAuthenticated: action.logged,
                errorMessage: ''
            }
        case AUTH_ERROR:
            console.log('auth reduceer is login error')
            return{
                isAuthenticated:false,
               errorMessage: action.payload
            }
        default:
            return state
    }
}