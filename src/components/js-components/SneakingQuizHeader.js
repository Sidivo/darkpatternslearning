import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useNavigate } from 'react-router-dom';

function SneakingQuizHeader() {
  let navigate = useNavigate()

  function handleClickBack() {
    navigate("/sneaking")
  }


  return (

    <div id="boxes">
      <div id="leftbox">
      </div>
      <div id="middlebox">
        <h1 className='ObstructionName'>Sėlinimo kategorijos testas</h1>
      </div>
      <div id="rightbox">
        <button className='CustomButtonObstruction' onClick={handleClickBack}>Grįžti atgal</button>
      </div>
    </div>
  )
}

export default SneakingQuizHeader