import React from "react"
import { nanoid } from 'nanoid'

const List = ({ contacts }) =>
(<ul>
    {contacts.map(({ name, number }) =>(
        <li key={nanoid()}>
            { name }: { number }
        </li>
    ))}
</ul>)

export default List;