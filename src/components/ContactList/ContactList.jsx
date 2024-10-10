import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contactsSlice";
import { getFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((item) => (
        <li className={css.item} key={item.id}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
  );
}
export default ContactList;
