import { Contact } from 'components/Contact/contact';
import { ContactListStyled } from './contactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ContactListStyled>
      {filterContacts().map(({ name, number, id }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactListStyled>
  );
};

// import { Contact } from 'components/Contact/contact';
// import { ContactListStyled } from './contactList.styled';

// export const ContactList = ({ contactsBook, deleteContact }) => {
//   return (
//     // <ContactListStyled>
//     //   {contactsBook.map(({ id, name, number }) => (
//     //     <Contact
//     //       key={id}
//     //       id={id}
//     //       name={name}
//     //       phone={number}
//     //       deleteContact={deleteContact}
//     //     />
//     //   ))}
//     // </ContactListStyled>
//   );
// };

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
