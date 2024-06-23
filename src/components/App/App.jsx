import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

const getContacts = () => {
  const saveContacts = localStorage.getItem("contacts");
  if (saveContacts !== null) {
    return JSON.parse(saveContacts);
  }
  return []
};


const App = () => {
  const [contactList, setContactList] = useState(getContacts);
  const [inputValue, setInputValue] = useState("");

  const handleInput = ({ target }) => {
    setInputValue(target.value);
  };

  const handleAddContact = (newContact) => {
    setContactList([
      ...contactList,
      {
        ...newContact,
        id: nanoid(),
      },
    ]);
  };

  const handleDelate = (id) => {
    const contacts = contactList.filter((contact) => contact.id !== id);
    setContactList(contacts);
  };

    useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contactList));
    }, [contactList]);


  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox inputValue={inputValue} handleInput={handleInput} />
      <ContactList contactList={filteredContacts} handleDelate={handleDelate} />
    </div>
  );
};

export default App;
