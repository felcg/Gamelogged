import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Company = ({ id }) => {
  const [company, setCompany] = useState([])
  const getCompany = async () => {
    const baseUrl = 'http://localhost:3001/api/'
    const request = await axios.get(`${baseUrl}companies/${id}`)
    const returnedCompany = request.data
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
