import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useNavigate } from 'react-router-dom';

function NaggingQuizHeader() {
  let navigate = useNavigate()

  function handleClickBack() {
    navigate("/nagging")
  }


  return (

    <div id="boxes">
      <div id="leftbox">
      </div>
      <div id="middlebox">
        <h1 className='ObstructionName'>Kibimo kategorijos testas</h1>
      </div>
      <div id="rightbox">
        <button className='CustomButtonObstruction' onClick={handleClickBack}>Grįžti atgal</button>
      </div>
    </div>
  )
}

export default NaggingQuizHeader