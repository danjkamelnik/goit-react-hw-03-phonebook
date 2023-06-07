import { Component } from "react";
import { nanoid } from 'nanoid'
import { Form, Label, Input, Button } from './Contacts.styled'

export class Contacts extends Component {
  state = {
    name: '',
    number: ''
  }

  inputId = nanoid();

  handleInputChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value})
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault()
    this.props.onSubmit(this.state.name, this.state.number)
    this.setState({name: '', number: ''})
  }

  render() {

    const { name, number } = this.state;
    const { handleFormSubmit, handleInputChange } = this;

    return (
      <Form onSubmit = { handleFormSubmit }>
        <Label htmlFor = { this.inputId }>Name
          <Input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id = { this.inputId }
            value = { name }
            onChange = { handleInputChange }
            required
            placeholder="John Doe"
          />
        </Label>
        <Label htmlFor = { this.inputId }>Number
          <Input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id = { this.inputId }
            value = { number }
            onChange = { handleInputChange }
            required
            placeholder="000-00-00"
          />
        </Label>
        <Button type='submit'>Add new contact</Button>
      </Form>
    )
  }
}