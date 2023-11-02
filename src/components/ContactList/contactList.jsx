// import { useSelector } from 'react-redux';

import { Contact } from 'components/Contact/contact';
import { ContactListStyled } from './contactList.styled';

export const ContactList = ({ contactsBook, deleteContact }) => {
  return (
    <ContactListStyled>
      {contactsBook.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          phone={number}
          deleteContact={deleteContact}
        />
      ))}
    </ContactListStyled>
  );
};

/*======== REDUX =======*/
// export const ContactList = () => {
//   const contacts = useSelector(state => state.contacts.contacts);
//   const filter = useSelector(state => state.filter.filter);

//   const filterContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <ContactListStyled>
//       {filterContacts.map(({ id, name, number }) => (
//         <Contact key={id} name={name} phone={number} />
//       ))}
//     </ContactListStyled>
//   );
// };
