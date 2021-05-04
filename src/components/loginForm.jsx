import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { login } from '../services/authService';

class LoginForm extends Form {
    state = {
        data: { email: "", password: ""},
        errors: {}
    }

    schema = {
        email: Joi.string().email().min(5).max(255).required().label("email"),
        password: Joi.string().min(5).max(255).required().label("Password")
    };

    doSubmit = () => {
        // Call the server
        console.log("Submitted");
    }

    render(){
        return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('email', 'Email')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderButton('Login')}
            </form>
        </div>
        );
    }
}
 
export default LoginForm;