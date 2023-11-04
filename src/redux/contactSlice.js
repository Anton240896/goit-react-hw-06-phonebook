import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

/*======== REDUX-TOOLKIT STORE =======*/
const contactsinitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsinitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
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
