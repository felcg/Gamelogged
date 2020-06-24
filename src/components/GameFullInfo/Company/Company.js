import React, { useState, useEffect } from 'react'
import gameService from '../../../services/games'

const Company = ({ id }) => {
  const [company, setCompany] = useState([])
  const getCompany = async () => {
    const returnedCompany = await gameService.getCompany(id)
    setCompany(returnedCompany[0])
  }

  useEffect(() => {
    getCompany()
  }, [])
  return (
    <>
      <p>{company.name}</p>
    </>
  )
}

export default Company
