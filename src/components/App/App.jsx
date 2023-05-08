import ContactForm from 'components/ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'components/redux/operationsContacts';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Loading....</p>}
      <ContactsList b />
    </div>
  );
};
export default App;
