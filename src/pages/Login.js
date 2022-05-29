
import "../components/css-components/Login.css";
import LoginHeader from '../components/js-components/LoginHeader'
import LoginForm from '../components/js-components/LoginForm'
import React from 'react'

function Login() {

  return (
    <div className='login'>
      <LoginHeader />
      <LoginForm />
    </div>
  )
}

export default Login