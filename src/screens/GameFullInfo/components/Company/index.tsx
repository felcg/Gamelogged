import React, { useState, useEffect } from 'react'
import { getCompany } from 'src/services'

export const Company = ({ id }: { id: string | number }) => {
  const [company, setCompany] = useState<any>()
  const getCompanyFromService = async () => {
    const returnedCompany = await getCompany(id)
    setCompany(returnedCompany[0])
  }

  useEffect(() => {
    getCompanyFromService()
  }, [])
  return (
    <>
      <p>{company.name}</p>
    </>
  )
}
