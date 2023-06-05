import { Component } from "react";
import { nanoid } from 'nanoid'

export class Form extends Component {
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
    this.props.onSubmit(this.state.name)
    this.setState({name: '', number: ''})
  }

  render() {

    const { name, number } = this.state;
    const { handleFormSubmit, handleInputChange } = this;

    return (
      <form onSubmit={handleFormSubmit}>
        <h1>Phonebook</h1>
        <label htmlFor={this.inputId}>Name
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.inputId}
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor={this.inputId}>Number
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.inputId}
            value={number}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type='submit'>Add new contact</button>
      </form>
    )
  }
}