import React from 'react'
import classes from './Login.module.css'
import {reduxForm, Field} from 'redux-form';



const LoginForm = (props) =>{
    return(
        <form action="" onSubmit={props.handleSubmit}>
            <div>
               
                <Field component={"input"} placeholder={"Login"} name={"login"}/>
            </div>
            <div>
                <Field  component={"input"}  placeholder={"Password"} name={"password"}/>
            </div>
            <div>
                <Field type="checkbox" component={"input"} name={"rememberMe"}/> Remember me
            </div>
            <button>Login</button>
        </form>
          
    )
}

const ReduxLoginForm = reduxForm({ form: 'login'})(LoginForm)

const Login = (props) =>{

    const onSubmit = (formData) =>{
        console.log(formData);
    }
    
    return(
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;