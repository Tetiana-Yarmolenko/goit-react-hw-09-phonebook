import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import fadeTransition from '../Transition/fadeTransition.module.css'
import contactsSelectors from '../../Redux/Phonebook/contacts-selector';
import contactsOperations from '../../Redux/Phonebook/contacts-operations';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  
  return (
    < TransitionGroup component="ul" className={s.list}>
      {contacts.length > 0 ?
       (contacts.map(({ name, number, id }) => (
        <CSSTransition key={id} timeout={250} classNames={fadeTransition}>
          <li  className={s.item}>
          {name}: {number}
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}>
            Delete
          </button>
        </li>
        </CSSTransition>))
      ):(<CSSTransition
          key={1}
          timeout={700}
          classNames="message-empty"
          unmountOnExit
        >
          <p>Contact list empty for now</p>
        </CSSTransition>)}
    </ TransitionGroup>);
}

export default ContactList;