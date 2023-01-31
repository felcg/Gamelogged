import React from 'react'

export const Select = ({ value, onChange, collection, name }) => (
  <select name={name} value={value} onChange={onChange}>
    <option defaultValue value="nofilter">
      {name}
    </option>
    {collection.map((mode) => (
      <option key={mode} value={mode}>
        {mode}
      </option>
    ))}
  </select>
)
