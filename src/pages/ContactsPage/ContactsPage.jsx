// import css from "./ContactsPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";

import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";

function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error("We're sorry! An error occurred. Please try again later.");
    }
    dispatch(fetchContacts());
  }, [dispatch, isError]);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  return (
    <div>
      <div></div>
      <div>
        <div>
          <div>
            <h1>PhoneBook</h1>
            {isLoading && <Loader />}
          </div>
        </div>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}

export default ContactsPage;
