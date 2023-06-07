import { Component } from "react"
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts/Contacts"
import List from "./List/List"
import { Filter } from "./Filter/Filter"
import { Wrapper, Title, SubTitle } from "./App.styled"


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  conctactId = nanoid();

  addNewContact = ( name, number ) => {
    const contact = {
      id: nanoid(),
      name,
      number
      
    }

    if (this.state.contacts.find(contact => name === contact.name)) {
      return alert(`${name} is already in contacts.`)
    }

    this.setState(prevstate => ({
      contacts: [contact, ...prevstate.contacts]
    }))
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  handleChangleFinder = (evt) => {
    this.setState({filter: evt.target.value})
  }

  render() {
    const { filter } = this.state

    const normalizedFilter = this.state.filter.toLocaleLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter))

    return(
      <Wrapper>
        <Title>Phonebook</Title>
        <Contacts onSubmit = { this.addNewContact }/>
        <SubTitle>Contacts</SubTitle>
        <Filter value = { filter } onChange = { this.handleChangleFinder }/>
        <List contacts = { visibleContacts } onDeleteContact = {this.deleteContact}/>
      </Wrapper>
    )
  }
}