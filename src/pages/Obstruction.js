import React from 'react'
import '../components/css-components/AllCategories-Quizes.css';
import ObstructionBody from '../components/js-components/ObstructionBody'
import ObstructionHeader from '../components/js-components/ObstructionHeader'
import ObstructionFooter from '../components/js-components/ObstructionFooter'

function Obstruction() {
  return (
    <div>
      <ObstructionHeader />
      <ObstructionBody />
      <ObstructionFooter />
    </div>
  )
}

export default Obstruction