import React from "react"
import { nanoid } from 'nanoid'



const List = ({ contacts }) =>
(<ul>
    {contacts.map(({ name }) =>(
        <li key={nanoid()}>
            {name}
        </li>
    ))}
</ul>)
export default List;