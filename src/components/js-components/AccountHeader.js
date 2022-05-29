import React from 'react'
import '../css-components/Account.css'
import { useNavigate } from 'react-router-dom';

function AccountHeader() {

  let navigate = useNavigate()

  function handleClickBack() {
    navigate("/categories")
  }

  return (

    <div id="boxes">
      <div id="leftbox">
      </div>
      <div id="middlebox">
        <h1 className='accountName'>Paskyros atliktų testų istorija</h1>
      </div>
      <div id="rightbox">
        <button className='customButtonAccount' onClick={handleClickBack}>Grįžti atgal</button>
      </div>
    </div>
  )
}
export default AccountHeader
