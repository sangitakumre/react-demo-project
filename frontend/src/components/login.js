import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import {connect} from 'react-redux'
import { compose } from 'redux'

import CustomInput from './customInput'
import * as actions from '../actions/login/index'

class Login extends Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    async onSubmit(formData){
        //console.log('hi working')
        console.log('data', formData)
        await this.props.login(formData);
        if(this.props.isAuthenticated){
            this.props.history.push('./dashboard')
        }
        //console.log(ab)
    }
    render(){
        const { handleSubmit } = this.props
        return(
            <div className="login-container">

                {this.props.isAuthenticated === false && this.props.message == "error"? 
                    <div className="errorHandle">Invalid Data</div>
                        : null
                        }

               <form onSubmit = { handleSubmit(this.onSubmit) }>
                   <fieldset>
                       <Field
                        name="username"
                        type="text"
                        id="username"
                        label="Username"
                        placeholder="Username"
                        component={ CustomInput }/>
                    </fieldset>
                    <fieldset>
                       <Field
                        name="password"
                        type="password"
                        id="password"
                        label="Password"
                        placeholder="Password"
                        component={ CustomInput } />
                    </fieldset>

                    
                    <button type="submit" className="btn btn-primary loginBtn">Log In</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        isAuthenticated: state.auth.isAuthenticated,
        message:state.auth.message
    }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form:'login' })
)(Login)