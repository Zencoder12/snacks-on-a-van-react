import React from 'react';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';

const LoginRegister = () => {
    return (
        <React.Fragment>
            <div id="sed-bg" className="container row gy-sm-1 gy-md-4 mt-3 mb-3 p-5 mx-auto">
                <div className="container col-sm-6">
                    <div>
                        <LoginForm />
                    </div>
                </div>
                <div className="container col-sm-6">
                    <div>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </React.Fragment>
      );
}
 
export default LoginRegister;