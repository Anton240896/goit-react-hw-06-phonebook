import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import { addContact, deleteContact } from '.redux/contactSlice';
// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

/*======== REDUX-TOOLKIT STORE =======*/
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

/*======== REDUX =======*/
// const initialState = {
//   contacts: [],
//   filter: '',
// };
/*======== ROOT REDUCER =======*/
// const rootReducer = combineReducers({
//   contacts: contactReducer,
//   filter: filterReducer,
// });

// /*======== CONNECTIONS DEVTOOLS TO REDUX =======*/
// const enhancer = devToolsEnhancer();
