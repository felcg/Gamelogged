/* eslint-disable react/jsx-indent-props */
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import './Verify.scss'

const Verify = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const email = params.get('email')

  return (
    <div className="verify__success">
      <p>The account linked to email {email} has been verified.</p>

      <Link to="/">
        <Button>BACK TO HOME</Button>
      </Link>
    </div>
  )
}

export default Verify
