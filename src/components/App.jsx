import React from 'react';

import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/ContactList/contactList';
import { Filter } from 'components/Filter/filter';
import {
  ContactFilter,
  Container,
  PhonebookName,
  Contacts,
  Main,
} from './App.styled';

import { VscNotebook } from 'react-icons/vsc';

/*======== REDUX =======*/
export const App = () => {
  return (
    <Main>
      <section>
        <VscNotebook size={400} style={{ marginTop: '60px' }} />
        <Container>
          <PhonebookName>Phonebook</PhonebookName>
          <ContactForm />

          <ContactFilter>
            <Contacts>Contacts</Contacts>
            <Filter />
          </ContactFilter>

          <ContactList />
        </Container>
      </section>
    </Main>
  );
};

/*======== REACT =======*/

//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(localStorage.getItem('contacts')) || [];
//   });
//   const [filter, setFilter] = useState('');

/*  ========= ADDING TO LOCAL STORAGE ========*/

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

/*  ======== FUNCTION ARE LAUNCHED ⬇️ (ADD CONTACT) =========*/

// const addContact = data => {
//   setContacts(prevState => [...prevState, { ...data, id: nanoid() }]);
// };

/*  ========= ON FILTER ==========*/

// const onFilter = evt => {
//   setFilter(evt.currentTarget.value);
// };

/*======== DELETE CONTACTS BY USING BUTTON ========*/

// const deleteContact = deleteId => {
//   setContacts(prevState =>
//     prevState.filter(contact => contact.id !== deleteId)
//   );
// };

/*========== FILTERS CONTACTS ==========*/

// const filterElem = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );
