import { Component } from "react"
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts/Contacts"
import List from "./List/List"
import { Filter } from "./Filter/Filter"
import { Notification } from "./Notification/Notification"
import { Wrapper, Title, SubTitle } from "./App.styled"


export class App extends Component {
  state = {
    contacts: [],
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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
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
        {this.state.contacts.length > 0 ? (
          <List contacts = { visibleContacts } onDeleteContact = {this.deleteContact}/>
        ) : (<Notification message = "You have no contacts" />)}
      </Wrapper>
    )
  }
}