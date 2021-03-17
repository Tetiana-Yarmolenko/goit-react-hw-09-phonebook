import React, { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { CSSTransition } from "react-transition-group";
import s from "./PhonebookView.module.css";

import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactList from "../../Components/ContactList/ContactList";
import Filter from "../../Components/Filter/Filter";
import Loader from '../../Components/Loader/Loader';

import titleTransition from "../../Components/Transition/titleAppear.module.css";
import contactOperations from "../../Redux/Phonebook/contacts-operations";
import contactsSelectors from "../../Redux/Phonebook/contacts-selector";

function PhonebookView () {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors. getLoading)

   useEffect(() => {
    dispatch(contactOperations.getContacts());
  }, [dispatch]);
   
    return (
      <div className={s.container}>
        <CSSTransition
          in
          timeout={500}
          classNames={titleTransition}
          appear
          unmountOnExit
        >
          <h1 className={s.title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2 className={s.contacts}>Contacts</h2>
      
        <Filter />
        {isLoading && (<Loader/>)}
        <ContactList />
      </div>
    );
  }

export default PhonebookView;
