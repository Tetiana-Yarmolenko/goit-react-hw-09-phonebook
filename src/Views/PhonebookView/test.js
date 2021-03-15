import { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import s from "./PhonebookView.module.css";

import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactList from "../../Components/ContactList/ContactList";
import Filter from "../../Components/Filter/Filter";
import Loader from '../../Components/Loader/Loader';

import titleTransition from "../../Components/Transition/titleAppear.module.css";
import contactOperations from "../../Redux/Phonebook/contacts-operations";
import contactsSelectors from "../../Redux/Phonebook/contacts-selector";

class PhonebookView extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
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
        {this.props.isLoading && (
          <Loader/>
        )}
        <ContactList />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(contactOperations.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
