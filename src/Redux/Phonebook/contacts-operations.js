import axios from 'axios';
import {
    getContactRequest,
    getContactSuccess,
    getContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './contacts-actions';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const getContacts = () => async dispatch => {
    dispatch(getContactRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(getContactSuccess(data));
    } catch (error) {
        dispatch(getContactError(error.message));
    }
}


const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};


const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error.message)));
}


export default { getContacts, addContact, deleteContact };