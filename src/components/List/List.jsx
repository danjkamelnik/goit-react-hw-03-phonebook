import React from "react"
import PropTypes from 'prop-types';
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

List.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })
      ),
      onDeleteContact: PropTypes.func.isRequired,
    };