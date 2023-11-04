import React from 'react';

import { ContactsForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/ContactList/contactList';
import { Filter } from 'components/Filter/filter';
import {
  ContactFilter,
  Container,
  PhonebookName,
  Contacts,
  Main,
  SectionAll,
} from './App.styled';

import { VscNotebook } from 'react-icons/vsc';

/*======== REDUX =======*/
export const App = () => {
  return (
    <Main>
      <SectionAll>
        <VscNotebook size={400} style={{}} />
        <Container>
          <PhonebookName>Phonebook</PhonebookName>
          <ContactsForm />

          <ContactFilter>
            <Contacts>Contacts</Contacts>
            <Filter />
          </ContactFilter>

          <ContactList />
        </Container>
      </SectionAll>
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
