import React from 'react'
import '../css-components/Categories.css'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'

function CategoriesHeader() {

  const [{ user }, dispatch] = useStateValue();

  let navigate = useNavigate()

  function handleClickLogout() {
    if (user) {
      auth.signOut();
      navigate("/")
    }
  }

  function handleClickRegister() {
    navigate("/account")
  }


  return (

    <div id="boxes">
      <div id="leftbox">
      </div>
      <div id="middlebox">
        <h1 className='HomepageName'>Apgaulingų šablonų kategorijos</h1>
      </div>
      <div id="rightbox">
        <button className='CustomButton' onClick={handleClickRegister}>Testų istorija</button>
        <button className='CustomButton' onClick={handleClickLogout}>Atsijungti</button>
      </div>
    </div>
  )
}

export default CategoriesHeader