import '../components/css-components/Registration.css'
import RegistrationHeader from '../components/js-components/RegistrationHeader'
import RegistrationForm from '../components/js-components/RegistrationForm'
import React from 'react';


function Registration() {
  return (
    <div className='registration'>
      <RegistrationHeader />
      <RegistrationForm />
    </div>
  )
}

export default Registration