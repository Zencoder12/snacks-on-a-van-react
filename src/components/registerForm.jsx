import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { login } from '../services/authService';

class registerForm extends Form {
    state = {
        data: { email: "", password: "", firstName: "", lastName: "", phone: ""},
        errors: {}
    }

    schema = {
        firstName: Joi.string().min(2).max(50).required(),
        lastName: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        phone: Joi.string().min(5).max(25).required(),
        password: Joi.string().min(5).max(1024).required(),
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            const { data: jwt } = await login(data.email, data.password);
            localStorage.setItem('token', jwt);
            window.location = '/';
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
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('firstName', 'First Name:')}
                {this.renderInput('lastName', 'Last Name:')}
                {this.renderInput('email', 'Email:')}
                {this.renderInput('phone', 'Phone:')}
                {this.renderInput('password', 'Password:', 'password')}
                {this.renderButton('Create User')}
            </form>
        </div>
        );
    }
}
 
export default registerForm;