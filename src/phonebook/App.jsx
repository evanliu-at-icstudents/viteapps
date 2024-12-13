import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import React from 'react';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);

  // Regex for validation
  const nameRegex = /^[A-Z][a-z]*\s[A-Z][a-z]*$/;
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

  const addPerson = (event) => {
    event.preventDefault();

    // Validate input before adding
    if (!nameRegex.test(newName)) {
      alert('Invalid name format. Please use "Firstname Lastname" with capitalized first letters.');
      return;
    }
    if (!phoneRegex.test(newNumber)) {
      alert('Invalid phone number format. Please use "XXX-XXX-XXXX".');
      return;
    }

    const duplicate = persons.some((person) => person.number === newNumber);
    if (duplicate) {
      alert(`${newNumber} is already added to the phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setNewName(value);
    setIsNameValid(nameRegex.test(value)); // Validate the name
  };

  const handleNumberChange = (event) => {
    const value = event.target.value;
    setNewNumber(value);
    setIsNumberValid(phoneRegex.test(value)); // Validate the phone number
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const personsToShow = filter
    ? persons.filter((person) =>
        (person.name.toLowerCase() + person.number).includes(filter.toLowerCase())
      )
    : persons;

  return (
    <>
      <h1>Phonebook</h1>
      <Filter value={filter} onChange={handleFilterChange} />

      <h2>Add a New Contact</h2>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numberValue={newNumber}
        onNumberChange={handleNumberChange}
      />
      {!isNameValid && (
        <p style={{ color: 'red' }}>Invalid name. Use "Firstname Lastname" format.</p>
      )}
      {!isNumberValid && (
        <p style={{ color: 'red' }}>Invalid number. Use "XXX-XXX-XXXX" format.</p>
      )}

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
      <a href="/">Back to Main</a>
    </>
  );
};

export default App;
