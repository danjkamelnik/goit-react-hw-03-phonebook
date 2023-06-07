import React from "react"
import { Label, Input } from './Filter.styled'

export const Filter = ({ value, onChange }) => (
    <Label>Search
        <Input type='text' value = { value } onChange = { onChange } placeholder="Find contacts by name"/>
    </Label>
)