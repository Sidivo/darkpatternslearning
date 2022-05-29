import React from 'react'
import '../css-components/AllCategories-Quizes.css'
import Example5 from '../images/example5.png'

function NaggingBody() {
  return (

    <div id='sides'>
      <h1 className='BodyH1'>Kategorija - kibimas</h1>
      <div className='BodyText1'>
        <text>
          Apgaulingų šablonų kategorija - kibimas (angl. Nagging).
          Ją apibūdinti galima kaip dažnai pasikartojantį sutrukdymą vartotojo sąveikos metu,
          kai vartotojo atliekamas veiksmas yra vis pertraukiamas verčiant atlikti kitus veiksmus,
          kurie nėra tiesiogiai susiję.
          Nors pagal Harry Brignull (apgaulingo dizaino ekspertas) apgaulingų šablonų sąrašą nėra išskirti tipai,
          kurie tiktų šiai kategorijai, tačiau vis tiek svarbu apie ją žinoti dėl jos dažnumo internetinėje aplinkoje.
        </text>
      </div>
      <div className='BodyText2'>
        <text>
          Šiai kategorijai nėra išskirtų pagrindinių tipų, <br></br>
          tačiau žemiau pateiktas vienas iš pavyzdžių.
        </text>
      </div>
      <div id='naggingMiddle'>
        <div>
          <h1 className='example1'>Pavyzdys:</h1>
        </div>
        <div>
          <img src={Example5} alt='example5' />
        </div>
        <div>
          <h1 className='exampleExplanation1'>,,Instagram” programėlės iššokantis langas, reikalaujantis įvertinimo </h1>
        </div>
        <div>
          <h1 className='example1'>Paaiškinimas:</h1>
        </div>
        <div className='naggingTexts'>
          <text>Vienas iš labiausiai populiariausių būdų panaudoti šios kategorijos apgaulingus šablonus
            yra pasinaudojant iššokančių langų (angl. pop-ups) pagalba.
            Pavaizduotame ,,Instagram” iššokančio lango pavyzdyje matosi tik
            du pasirinkimai: įvertinti programėlę arba tai padaryti vėliau,
            tačiau niekur nėra pasirinkimo, kad daugiau nebeatsirastų šis langas,
            kurį periodiškai naudojantis programėle galima vis pamatyti.
          </text>
        </div>
      </div>
    </div>
  )
}

export default NaggingBody