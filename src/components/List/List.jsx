import React from "react"
import { ContactList, ContactItem, ContactData, ContactDelete } from "./List.styled"

const List = ({ id, contacts, onDeleteContact }) =>
(<ContactList>
    {contacts.map(({ id, name, number }) =>(
        <ContactItem key = { id }>
            <ContactData>{ name }: &nbsp; &nbsp; &nbsp;{ number }</ContactData>
            <ContactDelete onClick = {() => onDeleteContact(id)}>&#215;</ContactDelete>
        </ContactItem>
    ))}
</ContactList>)

export default List;