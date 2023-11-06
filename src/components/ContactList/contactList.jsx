import { Contact } from 'components/Contact/contact';
import { ContactListStyled } from './contactList.styled';
import { getFilters, getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilters);

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
