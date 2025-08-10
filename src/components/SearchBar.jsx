import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
      <label>Search</label>
      <input
        placeholder="Search title or description..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}