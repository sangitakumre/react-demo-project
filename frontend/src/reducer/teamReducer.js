import { TEAM_DATA_FETCH, TEAM_ERROR_FETCH, TEAM_DATA_REQUEST } from '../actions/team/types'


const initialstate = {
    loading:false,
    team: [],
    error:''
}

export default (state = initialstate, action) =>{
    switch(action.type){
        case TEAM_DATA_REQUEST: {
            return{
                ...state,
                loading: true
            }
        }
        case TEAM_DATA_FETCH: {
            return{
                loading:false,
                team:action.payload,
                error:''
            }
        }
        case TEAM_ERROR_FETCH:{
            return{
                loading:false,
                team:[],
                error:action.payload
            }
        }
        default:
            return state
            
    }
}