import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/operationsContacts';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import css from './ContactList.module.css';

const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => {
      const filter = state.filter.trim().toLowerCase();
      return state.contacts.items.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    });



    const deleteConts = id => {
        dispatch(deleteContact(id));
      };


  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <ContactsItem key={contact.id} contact={contact} onDelete={deleteConts} />
      ))}
    </ul>
  );
};


export default ContactsList;