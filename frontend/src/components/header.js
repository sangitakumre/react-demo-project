import React, {Component} from 'react'
import {NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

import * as actions from '../actions/login/index'
import PropTypes from 'prop-types';

class Header extends Component{
    render(){
        
        return(
            
            this.props.isAuthenticated ?(
                <div className="col-md-3 col-lg-3 navList noPadding">
                <nav className="navbar">
                <ul>
                    <li>
                        <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/team">Team</NavLink>
                    </li>
                 </ul>
            </nav> 
            </div>)
            : null
            
            

        );
    }
}

Header.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state){
    return{
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps,actions)(Header)