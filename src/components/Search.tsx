import React from 'react'
import { Form } from 'react-bootstrap'
import { useState } from 'react'


interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({
  onSearch

}) => {
  const [query, setQuery] = useState("")
  const [display, setDisplay] = useState(false)


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDisplay(true)
    onSearch(query)
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Search </Form.Label>
          <Form.Control
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Looking for somethin specific?'
            value={query}
          />
        </Form.Group>
        {display && <p>Searching results for {query}...</p>}
      </Form>

    </>
  )
}


export default Search