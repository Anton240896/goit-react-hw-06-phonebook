import { ContactContainer, ContactName } from './contact.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactContainer>
      <ContactName key={id}>
        {name}: {number}
      </ContactName>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ContactContainer>
  );
};

console.log();
