import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import { useNavigate } from 'react-router-dom'

function InterfaceInterferenceFooter() {

  let navigate = useNavigate()

  function handleClickInterfaceInterferenceQuiz() {
    navigate("/interfaceinterferencequiz")
  }

  return (
    <div id='sides'>
      <div className='obstructionFooterH1div'>
        <h1 className='obstructionFooterH1'>Išbandyti savo jėgas kaip supratote pateiktą informaciją apie sąsajos trukdžių kategorijai priklausančius tipus galite čia:</h1>
      </div>
      <div>
        <div className='goToObstructionTestButtonDiv'>
          <button className='goToObstructionTestButton' onClick={handleClickInterfaceInterferenceQuiz}>Sąsajos trukdžių kategorijos testas</button>
        </div>
      </div>
    </div>
  )
}

export default InterfaceInterferenceFooter