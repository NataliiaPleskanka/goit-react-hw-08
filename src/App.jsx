import { useEffect, useState } from "react";

import css from "./App.module.css";

import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (window.localStorage.getItem("saved-contacts") !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });
  const [filter, setFilter] = useState("");

  const deleteContact = (index) => {
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== index);
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const inputHandler = (evt) => {
    setFilter(evt.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((contacts) => {
      return [...contacts, newContact];
    });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={inputHandler} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
