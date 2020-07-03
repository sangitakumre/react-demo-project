import axios from 'axios'
import { AUTH_LOGIN, AUTH_ERROR } from './types'

export const login = data =>{
    return async dispatch =>{
        try{
            console.log('action creator is login called')
          const res = await axios.post('/', data);
          console.log('res', res)
         
          console.log('action creator is dispatch called')
         dispatch({
              type:AUTH_LOGIN,
              logged:res.data.isLogged,
              message:res.data.message
          });

          localStorage.setItem('isLgged', res.data.isLogged)

        }
        catch(err){
            console.log('err', err)

            dispatch({
                type:AUTH_ERROR,
                payload:'Invalid Details'
            })
        }
    }
}
