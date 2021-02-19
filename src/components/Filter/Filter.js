import React from 'react';
import './Filter.scss';

const Filter = ({ filter, changeFilterInputValue }) => {
  return (
    <>
      <label className="find-contacts__label" htmlFor="find-contacts-form__filter">
        Find contacts by name
      </label>
      <input
        type="search"
        id="find-contacts-form__filter"
        name="filter"
        className="find-contacts__input"
        value={filter}
        onChange={changeFilterInputValue}
        required
        autoComplete="off"
        autoFocus
      ></input>
    </>
  );
};

export default Filter;
