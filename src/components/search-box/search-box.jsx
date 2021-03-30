import React from 'react'
import { Input } from '@material-ui/core'

export const SearchBox = ({ placeholder, handleChange }) => (
  <Input
    onChange={handleChange}
    className="input-text"
    variant="filled"
    type="search"
    color="primary"
    label="Monsters..."
    placeholder={placeholder}
  ></Input>
)
