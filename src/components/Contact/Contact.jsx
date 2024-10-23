import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";

const Contact = ({ contactData }) => {
  const dispatch = useDispatch();

  const { contact, id } = contactData || {};

  if (!contact) {
    return <div>No contact information available</div>;
  }

  return (
    <>
      <div>
        <h2 className={css.title}>
          <FaUser className={css.icon} size="14" /> {contact.name}
        </h2>
        <p className={css.phone}>
          <FaPhone className={css.icon} size="14" />
          {contact.number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
