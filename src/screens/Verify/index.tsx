/* eslint-disable react/jsx-indent-props */
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import './styles.scss'

export const Verify = () => {
  const { email } = useParams()

  return (
    <div className="verify__success">
      <p>The account linked to email {email} has been verified.</p>

      <Link to="/">
        <Button>BACK TO HOME</Button>
      </Link>
    </div>
  )
}
