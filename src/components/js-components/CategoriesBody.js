import React from 'react'
import '../css-components/Categories.css'
import { useNavigate } from 'react-router-dom'

function CategoriesBody() {

   let navigate = useNavigate()

   function handleClickObstruction() {
      navigate("/obstruction")
   }

   function handleClickInterfaceInterference() {
      navigate("/interfaceinterference")
   }

   function handleClickSneaking() {
      navigate("/sneaking")
   }

   function handleClickForcedAction() {
      navigate("/forcedaction")
   }

   function handleClickNagging() {
      navigate("/nagging")
   }

   return (

      <div className='customContent'>
         <h1 className='CustomHeader1'>Sveiki prisijungę prie apgaulingų šablonų grėsmės susipažinimo puslapio!</h1>
         <h1 className='CustomHeader2'>Kas yra apgaulingų šablonų kategorijos?</h1>
         <text>Apgaulingi šablonai turi vartotojų sąsajas, kurios pasižymi joms tinkančiomis savybėmis,
            tačiau panašumų galima įžvelgti apgaulingų šablonų kūrėjų tiksluose bei atitinkamai skirstyti į kategorijas.
            Kategorizavimas būtent ir palengvina vartotojams greičiau pažinti apgaules programėlėse,
            socialiniuose bei elektroninės komercijos puslapiuose, nes yra aiškiai suprantami šių pinklių kūrėjų ketinimai.</text>

         <h1 className='CustomHeader3'>Pasirinkite kategoriją, apie kurią norėtumėte sužinoti daugiau:</h1>
         <div className='divCategoriesButton1'>
            <button className='categoriesButton' onClick={handleClickNagging}>Kibimas</button>
            <button className='categoriesButton' onClick={handleClickObstruction}>Kliūtis</button>
         </div>
         <div className='divCategoriesButton2'>
            <button className='categoriesButton' onClick={handleClickSneaking}>Sėlinimas</button>
            <button className='categoriesButton' onClick={handleClickInterfaceInterference}>Sąsajos trukdžiai</button>
         </div>
         <div className='divCategoriesButton3'>
            <button className='categoriesButton' onClick={handleClickForcedAction}>Priverstinis veiksmas</button>
         </div>
      </div>
   )
}

export default CategoriesBody