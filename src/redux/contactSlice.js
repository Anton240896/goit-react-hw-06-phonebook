import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

/*======== REDUX-TOOLKIT STORE =======*/
const contactsinitialState = [
  { id: 'id-2', name: 'Cristiano Ronaldo', number: '443-89-12' },
  { id: 'id-3', name: 'Lionel Messi', number: '645-17-79' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsinitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contacts) {
        return {
          payload: {
            ...contacts,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

// /*======== REDUX =======*/
// // export const addContacts = (name, phone) => ({
// //   type: 'contact/addContacts',
// //   payload: {
// //     name,
// //     phone,
// //     id: nanoid(),
// //   },
// // });

// // export const deleteContacts = id => ({
// //   type: 'contact/deleteContacts',
// //   payload: id,
// // });

// // export const contactReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case 'contact/addContacts':
// //       return {
// //         ...state,
// //         contacts: [...state.contacts.action.payload],
// //       };

// //     case 'contact/deleteContacts':
// //       return {
// //         ...state,
// //         contacts: state.contacts.filter(
// //           contact => contact.id !== action.payload
// //         ),
// //       };
// //     default:
// //       return state;
// //   }
// // };
