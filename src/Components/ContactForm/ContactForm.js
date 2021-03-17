import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {CSSTransition} from 'react-transition-group'
import contactOperations from '../../Redux/Phonebook/contacts-operations';

import s from "./ContactForm.module.css"
import Alert from '../Alert/Alert'
import alertTransition from '../Transition/alertTransition.module.css';
import contactsSelectors from '../../Redux/Phonebook/contacts-selector';


function ContactForm  () {
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [massage, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

     const dispatch = useDispatch();
     const contacts = useSelector(contactsSelectors.getAllContacts);

  
    const toggleAlert = message => {
        setShowAlert(true);
        setMessage(message);
    setTimeout(() => setShowAlert(false), 1500);
  };

    const handleChangeName = ({ target }) => {
        setName(target.value);
    } 
    
     const handleChangeNumber = ({ target }) => {
        setNumber(target.value);
    } 
    
    const handleFormSubmit = (event) => {
        event.preventDefault()
       
        if (!name || !number) {
            toggleAlert('Some field is empty');
            return; 
        }

        if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
            toggleAlert('Contact is already exist');
            setName('');
            setNumber('');
            return;
         }
         
        dispatch(contactOperations.addContact(name, number));
        setName('');
        setNumber('');
        
    }
        return (<>
            <CSSTransition
          in={showAlert}
          timeout={250}
          classNames={alertTransition}
                unmountOnExit>
          <Alert massage={massage}/>
        </CSSTransition>
            <form className={s.form}
            onSubmit={handleFormSubmit}>
            <label className={s.label}>
                Name
            <input
                    className={s.input}
                    text='text' name='name'
                    placeholder="Enter name"
                    value={name}
                    onChange={handleChangeName} />
            </label>
            <label className={s.label}>
                Phone
            <input
                    className={s.input}
                    text='tel' name='phone'
                    placeholder="Enter phone number"
                    value={number}
                    onChange={handleChangeNumber} />
                </label>
            <button className={s.button} type="submit">Add contact</button>
            </form>
        </>)
        
    }

export default ContactForm;