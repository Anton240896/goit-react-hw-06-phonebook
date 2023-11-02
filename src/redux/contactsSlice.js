import { createSlice } from '@reduxjs/toolkit';

/*======== REDUX-TOOLKIT STORE =======*/
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

/*======== REDUX =======*/
// export const addContacts = (name, phone) => ({
//   type: 'contact/addContacts',
//   payload: {
//     name,
//     phone,
//     id: nanoid(),
//   },
// });

// export const deleteContacts = id => ({
//   type: 'contact/deleteContacts',
//   payload: id,
// });

// export const contactReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contact/addContacts':
//       return {
//         ...state,
//         contacts: [...state.contacts.action.payload],
//       };

//     case 'contact/deleteContacts':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };
