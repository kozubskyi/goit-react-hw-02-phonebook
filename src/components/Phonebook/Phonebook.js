import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import './Phonebook.scss';

class Phonebook extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  changeFilterInputValue = event => {
    console.log(this.state.contacts);
    this.setState({ filter: event.target.value });
  };

  handleFormSubmit = data => this.setState({ contacts: [...this.state.contacts, data] });

  deleteContact = contactId =>
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== contactId) }));

  render() {
    return (
      <>
        <h1 className="main-title">Phonebook</h1>
        <ContactForm handleFormSubmit={this.handleFormSubmit} contacts={this.state.contacts} />
        <h2 className="title__contacts">Contacts</h2>
        <Filter filter={this.state.filter} changeFilterInputValue={this.changeFilterInputValue} />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} deleteContact={this.deleteContact} />
      </>
    );
  }
}

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  filter: PropTypes.string.isRequired,
};

export default Phonebook;
