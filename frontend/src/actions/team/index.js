import axios from 'axios'
import { TEAM_DATA_FETCH, TEAM_ERROR_FETCH, TEAM_DATA_REQUEST } from './types'

export const teamFetchRequest = () =>{
    return{
      type:TEAM_DATA_REQUEST
    }
  }
  export const teamFetchSuccess = team => {
    return{
      type:TEAM_DATA_FETCH,
      payload:team
    }  
  }
  
  export const teamFetchError = error => {
    return{
      type:TEAM_ERROR_FETCH,
      payload:error
    }  
  }
  
  export const fetchTeam = () => {
    return (dispatch) =>{
      dispatch(teamFetchRequest)
      axios.get('/team')
      .then(response => {
        const team = response.data  
        //console.log(teamList)
        dispatch(teamFetchSuccess(team))
      })
      .catch(err =>{
        const error = err.message
        dispatch(teamFetchError(error))
      })
    }
  }
