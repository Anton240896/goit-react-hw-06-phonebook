import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';
import { Button, LabelStyled } from './contactForm.styled';
import { HiPhoneOutgoing } from 'react-icons/hi';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// /*======== FORMIK =======*/
const PhoneBookSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'The name is too short!')
    .max(25, 'The name is too long!')
    .required('Name is required!'),
  number: Yup.string()
    .min(2, 'The number is too short!')
    .max(20, 'The number is too long!')
    .required('Phone number is required!'),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhoneBookSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        if (
          !contacts.find(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          )
        ) {
          dispatch(addContact(values));
        } else {
          console.log(`${values.name} is already in contacts`);
        }
      }}
    >
      {() => (
        <Form>
          <HiPhoneOutgoing size={100} />
          <LabelStyled htmlFor="name">Contacts</LabelStyled>
          <Field name="name" type="text" placeholder="Enter name..." />

          <LabelStyled htmlFor="number">Phone</LabelStyled>
          <Field name="number" type="text" placeholder="Enter number..." />

          <Button type="submit">Add contact</Button>
        </Form>
      )}
    </Formik>
  );
};

//solution 2

// export const ContactForm = () => {
//   const dispatch = useDispatch();

//   // const [name, setName] = useState('');
//   // const [number, setNumber] = useState('');

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.target;
//     const contactBook = {
//       name,
//       number,
//       id: nanoid(),
//     };
//     dispatch(addContact(contactBook));
//     form.reset();

//     return (
//       <form onSubmit={handleSubmit}>
//         <HiPhoneOutgoing size={100} />
//         <LabelStyled>
//           Name
//           <Input type="text" name="text" placeholder="Enter task text..." />
//         </LabelStyled>

//         <LabelStyled>
//           Phone
//           <Input type="text" name="text" placeholder="Enter task text..." />
//         </LabelStyled>
//         <Button type="submit">Add contact</Button>
//       </form>
//     );
//   };
// };
// solution 1 with library Formic
