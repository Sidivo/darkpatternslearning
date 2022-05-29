import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useNavigate } from 'react-router-dom'

function ObstructionFooter() {

  let navigate = useNavigate()

  function handleClickObstructionQuiz() {
    navigate("/obstructionquiz")
  }

  return (
    <div id='sides'>
      <div className='obstructionFooterH1div'>
        <h1 className='obstructionFooterH1'>Išbandyti savo jėgas kaip supratote pateiktą informaciją apie kliūties kategorijai priklausančius tipus galite čia:</h1>
      </div>
      <div>
        <div className='goToObstructionTestButtonDiv'>
          <button className='goToObstructionTestButton' onClick={handleClickObstructionQuiz}>Kliūties kategorijos testas</button>
        </div>
      </div>
    </div>
  )
}

export default ObstructionFooter