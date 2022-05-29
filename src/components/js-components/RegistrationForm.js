import React from 'react'
import '../css-components/Registration.css'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useState } from 'react'

function RegistrationForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tempPassword, setTempPassword] = useState('');

  const handleClickRegister = e => {
    e.preventDefault();
    if (email) {
      if (password === tempPassword) {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            handleClickGoToLogIn();
            alert("Sėkmingai prisiregistravote, prašome prisijungti");
          })
          .catch(error => alert(error.message))
      }
      else alert("Slaptažodžiai nesutampa")
    }
    else alert("Įveskite elektroninį paštą")
  }


  let navigate = useNavigate()

  function handleClickBack() {
    navigate("/")
  }

  function handleClickGoToLogIn() {
    navigate("/login")
  }

  return (
    <div className='registrationContainer'>
      <form>
        <h5>Įveskite elektroninį paštą</h5>
        <input type='text' value={(email)} onChange={e => setEmail(e.target.value)} />

        <h5>Įveskite norimą slaptažodį</h5>
        <input type='password' value={(password)} onChange={e => setPassword(e.target.value)} />

        <h5>Pakartokite slaptažodį</h5>
        <input type='password' value={(tempPassword)} onChange={e => setTempPassword(e.target.value)} />

        <div className='divRegistrationButton1'>
          <button className='registrationButton1' type='submit' onClick={handleClickRegister}>Registruotis</button>
        </div>

        <div className='divRegistrationButton2'>
          <button className='registrationButton2' onClick={handleClickBack}>Grįžti į pradinį puslapį</button>
        </div>

      </form>
    </div>
  )
}

export default RegistrationForm