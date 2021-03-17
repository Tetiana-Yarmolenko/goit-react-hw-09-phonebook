import { useSelector, useDispatch} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import s from "./Filter.module.css";

import * as contactActions from '../../Redux/Phonebook/contacts-actions';
import contactsSelectors from '../../Redux/Phonebook/contacts-selector';
import  fadeTransition from '../Transition/fadeTransition.module.css'

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(contactsSelectors.getFilter);
   
    return (
    //     <CSSTransition
    //     in={items.length > 0}
    //     timeout={250}
    //     classNames={fadeTransition}
    //     unmountOnExit
    //   >
         <label className={s.filter}>
        Find contacts by name
        <input
        className={s.input}
        type='text'
        value={value}
        onChange={(e)=> dispatch(contactActions.changeFilter(e.target.value))}
        placeholder='Enter name for Search'/>
            </label>
        // </CSSTransition >
        )
}

export default Filter