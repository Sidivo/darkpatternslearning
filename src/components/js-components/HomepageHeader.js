import React from 'react'
import '../css-components/HomepageHeader.css'
import { useNavigate } from 'react-router-dom';

function HomepageHeader() {

  let navigate = useNavigate()

  function handleClickLogin() {
    navigate("/login")
  }

  function handleClickRegister() {
    navigate("/registration")
  }
  return (

    <div id="boxes">
      <div id="leftbox">
      </div>
      <div id="middlebox">
        <h1 className='HomepageName'>Apgaulingų šablonų prevencija</h1>
      </div>
      <div id="rightbox">
        <button className='CustomButton' onClick={handleClickLogin}>Prisijungti</button>
        <button className='CustomButton' onClick={handleClickRegister}>Registruotis</button>
      </div>
    </div>
  )
}

export default HomepageHeader