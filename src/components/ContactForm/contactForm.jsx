import React from 'react';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { Button, LabelStyled, Input } from './contactForm.styled';
import { HiPhoneOutgoing } from 'react-icons/hi';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

//solution 1

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.text.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <HiPhoneOutgoing size={100} />
      <LabelStyled>
        Name
        <Input type="text" name="text" placeholder="Enter task text..." />
      </LabelStyled>

      <LabelStyled>
        Phone
        <Input type="text" name="text" placeholder="Enter task text..." />
      </LabelStyled>
      <Button type="submit">Add contact</Button>
    </form>
  );
};

// solution 2 with library Formic

// const PhoneBookSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(1, 'The name is too short!')
//     .max(25, 'The name is too long!')
//     .required('Name is required!'),
//   number: Yup.string()
//     .min(2, 'The number is too short!')
//     .max(20, 'The number is too long!')
//     .required('Phone number is required!'),
// });

// export const ContactForm = ({ onAdd }) => {
//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         number: '',
//       }}
//       validationSchema={PhoneBookSchema}
//       onSubmit={(values, actions) => {
//         onAdd(values);
//         actions.resetForm();
//       }}
//     >
//       {() => (
//         <Form>
//           <HiPhoneOutgoing size={100} />
//           <LabelStyled htmlFor="name">Contacts</LabelStyled>
//           <Field name="name" type="text" placeholder="Enter name..." />

//           <LabelStyled htmlFor="number">Phone</LabelStyled>
//           <Field name="number" type="text" placeholder="Enter number..." />

//           <Button type="submit">Add contact</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };
