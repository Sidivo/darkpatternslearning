import React from 'react'
import '../css-components/Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../../firebase'

function LoginForm() {

  let navigate = useNavigate()

  function handleClickBack() {
    navigate("/")
  }

  function handleClickForgotPassword() {
    navigate("/forgotpassword")
  }

  function handleClickRegistration() {
    navigate("/registration")
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickLogin = e => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate("/categories")
      })
      .catch(error => alert(error.message))
  }


  return (
    <div className='loginContainer'>
      <form>
        <h5>Elektroninis paštas</h5>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
        <h5>Slaptažodis</h5>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        <div className='divloginButton1'>
          <button className='loginButton1' type='submit' onClick={handleClickLogin}>Prisijungti</button>
        </div>
        <div className='divloginButton2'>
          <button className='loginButton2' onClick={handleClickForgotPassword}>Pamiršote slaptažodį?</button>
        </div>
        <div className='divloginButton3'>
          <button className='loginButton3' onClick={handleClickBack}>Grįžti į pradinį puslapį</button>
        </div>
        <div className='divloginButton4'>
          <button className='loginButton4' onClick={handleClickRegistration}>Naujas narys?</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm