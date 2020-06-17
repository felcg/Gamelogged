import React from 'react'

const Select = ({
  value, onChange, collection, name,
}) => (
  <select value={value} onChange={onChange}>
    <option defaultValue value="">{name}</option>
    {collection.map((mode) => (
      <option key={mode} value={mode}>{mode}</option>
    ))}
  </select>
)

export default Select
