import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactList, handleDelate }) => {
  return (
    <ul className={css.container}>
      {contactList.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} handleDelate={handleDelate} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
