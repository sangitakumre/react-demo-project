import React, { Component } from 'react'

class CustomInput extends Component{
    render(){
        const {input: {value, onChange}} = this.props
        return(
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input 
                    type={this.props.type} 
                    name= {this.props.name}
                    id={this.props.id}
                    value={value}
                    placeholder={this.props.placeholder}
                    onChange={onChange}
                />
              </div>
        )
    }
}

export default CustomInput