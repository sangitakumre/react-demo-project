import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import Index from '../components/index'

import Login from '../components/login'
import Dashboard from '../components/dashboard'
import Team from '../components/team'
import About from '../components/about'
import reducer from '../reducer'
import '../App.scss'

const App = () =>{
    return(
        <Provider store={createStore(reducer, {}, applyMiddleware(reduxThunk))}>
            <BrowserRouter>
            <Index>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/team" component={Team}/>
            </Index>
            </BrowserRouter>
        </Provider>
    )
    
}
export default App


