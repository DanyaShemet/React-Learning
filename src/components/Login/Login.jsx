import React from 'react'
import classes from './Login.module.css'
import {reduxForm, Field} from 'redux-form';
import { Input } from '../common/FormsControls/FormControls';
import {maxLengthCreator, requiredField} from '../../utils/validator/validators'
import { connect } from 'react-redux';
import { logIn, logOut } from '../../redux/authReducer';
import {Redirect} from 'react-router-dom'

const maxLength = maxLengthCreator(10)

const LoginForm = (props) =>{
    return(
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} placeholder={"Email"} name={"email"}  validate={[requiredField]}/>
            </div>
            <div>
                <Field  component={Input}  placeholder={"Password"} name={"password"}  type={"password"} validate={[requiredField]}/>
            </div>
            <div>
                <Field type="checkbox" component={Input} name={"rememberMe"}/> Remember me
            </div>
            { props.error && <div className={classes.errorFormSumm}>
                {props.error}
            </div>}
            <button>Login</button>
        </form>  
    )
}

const ReduxLoginForm = reduxForm({ form: 'login'})(LoginForm)

const Login = (props) =>{

    const onSubmit = (formData) =>{
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }
    
    if(props.isAuth){
        return <Redirect to="/profile" /> 
    }

    return(
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {
    logIn, logOut
})(Login);