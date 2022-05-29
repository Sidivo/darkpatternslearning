import React from 'react'
import '../css-components/ForgotPassword.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../../firebase'

function ForgotPasswordForm() {

  const [email, setEmail] = useState('');

  let navigate = useNavigate()


  const handleClickForgotPassword = e => {
    e.preventDefault()
    auth
      .sendPasswordResetEmail(email)
      .then(auth => {
        navigate("/login")
      })
      .catch(error => alert(error.message))
  }

  function handleClickBack() {
    navigate("/")
  }

  return (
    <div className='forgotPasswordContainer'>
      <div className='forgotPasswordDiv'>
        <text>Slaptažodžio atkūrimui reikalingas jūsų elektroninis paštas. Teisingai jį suvedę, gausite laišką, kuriame bus nuoroda į naujo slaptažodžio sukūrimą.</text>
      </div>
      <form>
        <h5>Įveskite elektroninį paštą</h5>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
        <div className='divForgotPasswordButton1'>
          <button className='forgotPasswordButton1' onClick={handleClickForgotPassword}>Siųsti laišką</button>
        </div>
        <div className='divForgotPasswordButton2'>
          <button className='forgotPasswordButton2' onClick={handleClickBack}>Grįžti į pradinį puslapį</button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPasswordForm