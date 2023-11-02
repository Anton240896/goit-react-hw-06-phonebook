// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';

// import { Button, LabelStyled, FormStyled } from './contactForm.styled';
// import { HiPhoneOutgoing } from 'react-icons/hi';
// // import { Formik, Form, Field } from 'formik';
// // import * as Yup from 'yup';

// //solution 1

// export const ContactsForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.target;
//     dispatch(addContact(form.elements.text.value));
//     form.reset();
//   };
/*======== RENDER =======*/

//   return (
//     <FormStyled onSubmit={handleSubmit}>
//       <HiPhoneOutgoing size={100} />

//       <LabelStyled>
//         Name
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter contacts..."
//           required
//         />
//       </LabelStyled>

//       <LabelStyled>
//         Phone
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Enter contacts..."
//           required
//         />
//       </LabelStyled>
//       <Button type="submit">Add contact</Button>
//     </FormStyled>
//   );
// };

// // solution 2 with library Formic

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

// export const ContactForm = () => {
//   /*======== RENDER =======*/
//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         number: '',
//       }}
//       validationSchema={PhoneBookSchema}
//       onSubmit={(values, actions) => {

//         }
//       }
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

import React from 'react';
import { Button, LabelStyled } from './contactForm.styled';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { HiPhoneOutgoing } from 'react-icons/hi';

//solution 1

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInput = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   submitForm = evt => {
//     evt.preventDefault();
//     const { addContact } = this.props;
//     const newContact = this.state;

//     const keys = Object.keys(newContact);
//     keys.forEach(item => {
//       newContact[item] = newContact[item].trim();
//     });

//     const isExistingContact = addContact(newContact);
//     if (isExistingContact) {
//       return;
//     }

//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({
//       name: '',
//       phone: '',
//     });
//   };

//   render() {
//     const { name, phone } = this.state;
//     return (
//       <Form onSubmit={this.submitForm}>
//         <Label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleInput}
//             required
//           />
//         </Label>
//         <Label>
//           Phone
//           <input
//             type="tel"
//             name="phone"
//             value={phone}
//             onChange={this.handleInput}
//             required
//           />
//         </Label>
//         <button type="submit">Add contact</button>
//       </Form>
//     );
//   }
// }

// solution 2 with library Formic

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

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhoneBookSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
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
