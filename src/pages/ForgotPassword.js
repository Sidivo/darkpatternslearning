import React from 'react'
import '../components/css-components/ForgotPassword.css'
import ForgotPasswordHeader from '../components/js-components/ForgotPasswordHeader'
import ForgotPasswordForm from '../components/js-components/ForgotPasswordForm'

function ForgotPassword() {
  return (
    <div className="forgotpassword">
      <ForgotPasswordHeader />
      <ForgotPasswordForm />
    </div>
  )
}

export default ForgotPassword