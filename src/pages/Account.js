import React from 'react'
import '../components/css-components/Account.css'
import AccountForm from '../components/js-components/AccountForm'
import AccountHeader from '../components/js-components/AccountHeader'

function Account() {
  return (
    <div>
      <AccountHeader />
      <AccountForm />
    </div>
  )
}

export default Account