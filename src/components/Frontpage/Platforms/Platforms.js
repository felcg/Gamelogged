import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { platformChange } from '../../../reducers/platformReducer'
import { sortChange } from '../../../reducers/sortReducer'
import platforms from './platformList'
import './Platforms.scss'

const Platforms = ({
  platform, name,
}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const changePlatform = (e) => {
    const option = document.getElementById('platformSelect').selectedOptions[0].text
    dispatch(platformChange(e.target.value))
    dispatch(sortChange('nosort'))
    history.push(`/platforms/${option}`)
  }
  return (
    <>
      <select id="platformSelect" value={platform} onChange={(e) => changePlatform(e)}>
        <option defaultValue label="all" value="all">{name}</option>
        {platforms.map((p) => (
          <option className="platformOption" key={p.slug} value={p.slug}>{p.name}
          </option>
        ))}
      </select>
    </>

  )
}

export default Platforms
