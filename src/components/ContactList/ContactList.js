import React, { Component } from 'react';
import './ContactList.scss';

const ContactList = ({ contacts, filter, deleteContact }) => {
  return (
    <ul className="contacts__list">
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => {
          return (
            <li className="contacts__item" key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" className="btn" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
