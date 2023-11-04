import { ContactContainer, ContactName } from './contact.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <ContactContainer>
      <ContactName>
        {name}: {phone}
      </ContactName>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ContactContainer>
  );
};
