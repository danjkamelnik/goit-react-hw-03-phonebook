import React from "react"
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled'

export const Filter = ({ value, onChange }) => (
    <Label>Search
        <Input type='text' value = { value } onChange = { onChange } placeholder="Find contacts by name"/>
    </Label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
  };