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

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await login(data.email, data.password);
            
        } catch (ex) {
            if (ex.response && ex.response.status === 400){
                const errors = {...this.state.errors};
                errors.email = ex.response.data;
                this.setState( { errors })
            }
        }
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