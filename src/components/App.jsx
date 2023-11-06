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
