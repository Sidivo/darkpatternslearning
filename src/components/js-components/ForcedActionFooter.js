import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useNavigate } from 'react-router-dom'

function ForcedActionFooter() {

  let navigate = useNavigate()

  function handleClickObstructionQuiz() {
    navigate("/forcedactionquiz")
  }

  return (
    <div id='sides'>
      <div className='obstructionFooterH1div'>
        <h1 className='obstructionFooterH1'>Išbandyti savo jėgas kaip supratote pateiktą informaciją apie priverstinio veiksmo kategorijai priklausančius tipus galite čia:</h1>
      </div>
      <div>
        <div className='goToObstructionTestButtonDiv'>
          <button className='goToObstructionTestButton' onClick={handleClickObstructionQuiz}>Priverstinio veiksmo kategorijos testas</button>
        </div>
      </div>


    </div>
  )
}

export default ForcedActionFooter