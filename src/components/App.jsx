import { Component } from "react"
import { nanoid } from 'nanoid'
import { Form } from "components/Form/Form"
import List from "./List/List"

export class App extends Component {
  state = {
    contacts: []
  }

  conctactId = nanoid();

  addNewContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }

    this.setState(prevstate => ({
      contacts: [contact, ...prevstate.contacts]
    }))
  }

  render() {
    const { contacts } = this.state
    return(
      <>
        <Form onSubmit={ this.addNewContact }/>
        <List contacts={ contacts }/>
      </>
      )
  }
}