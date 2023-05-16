import React from 'react'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css'


const LoginForm = ({ handleSubmit, error, captcha }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, { type: 'password' })}
            {createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'Remember me')}

            {captcha && <img src={captcha} />}
            {captcha && createField('Symbols from image', 'captcha', [required], Input, {})}

            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const LoginPageContainer = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />

    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return ({
        captcha: state.auth.captcha,
        isAuth: state.auth.isAuth
    })
}

export default connect(mapStateToProps, { login })(LoginPageContainer)