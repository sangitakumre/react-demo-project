import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker';
import App from './components/app'
import Login from './components/login'
import Dashboard from './components/dashboard'
import Team from './components/team'
import About from './components/about'
import reducer from './reducer'
import './App.scss'


ReactDOM.render(
  <Provider store={createStore(reducer, {}, applyMiddleware(reduxThunk))}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/team" component={Team}/>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
