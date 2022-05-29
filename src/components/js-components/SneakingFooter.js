import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useNavigate } from 'react-router-dom'

function SneakingFooter() {

  let navigate = useNavigate()

  function handleClickSneakingQuiz() {
    navigate("/sneakingquiz")
  }

  return (
    <div id='sides'>
      <div className='obstructionFooterH1div'></div>
      <h1 className='obstructionFooterH1'>Išbandyti savo jėgas kaip supratote pateiktą informaciją apie sėlinimo kategorijai priklausančius tipus galite čia:</h1>
      <div />
      <div>
        <div className='goToObstructionTestButtonDiv'>
          <button className='goToObstructionTestButton' onClick={handleClickSneakingQuiz}>Sėlinimo kategorijos testas</button>
        </div>
      </div>
    </div>
  )
}

export default SneakingFooter