import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useNavigate } from 'react-router-dom'

function NaggingFooter() {

  let navigate = useNavigate()

  function handleClickONaggingQuiz() {
    navigate("/naggingquiz")
  }

  return (
    <div id='sides'>

      <h1 className='obstructionFooterH1'>Išbandyti savo jėgas kaip supratote pateiktą informaciją apie kibimo kategoriją galite čia:</h1>

      <div>
        <div className='goToObstructionTestButtonDiv'>
          <button className='goToObstructionTestButton' onClick={handleClickONaggingQuiz}>Kibimo kategorijos testas</button>
        </div>
      </div>


    </div>
  )
}

export default NaggingFooter