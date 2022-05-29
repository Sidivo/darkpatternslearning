import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useNavigate } from 'react-router-dom';

function ForcedActionQuizHeader() {
  let navigate = useNavigate()

  function handleClickBack() {
    navigate("/forcedaction")
  }


  return (

    <div id="boxes">
      <div id="leftbox">
      </div>
      <div id="middlebox">
        <h1 className='ObstructionName'>Priverstinio veiksmo kategorijos testas</h1>
      </div>
      <div id="rightbox">
        <button className='CustomButtonObstruction' onClick={handleClickBack}>Grįžti atgal</button>
      </div>
    </div>
  )
}

export default ForcedActionQuizHeader