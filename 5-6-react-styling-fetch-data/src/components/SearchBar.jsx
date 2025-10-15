import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-4">
      <InputGroup>
        <InputGroup.Text aria-hidden>🔍</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search users by name..."
          aria-label="Search users"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </InputGroup>
    </div>
  )
}

export default SearchBar
