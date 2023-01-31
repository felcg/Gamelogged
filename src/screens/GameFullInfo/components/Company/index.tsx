import React, { useState, useEffect } from 'react'
import gameService from '../../../services/games'

export const Company = ({ id }: { id: string | number }) => {
  const [company, setCompany] = useState<any>()
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
