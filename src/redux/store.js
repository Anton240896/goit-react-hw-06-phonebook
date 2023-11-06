import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/*======== REDUX-PERSIST STORE =======*/
const persistConfig = {
  key: 'root',
  storage,
};
const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

/*======== REDUX-TOOLKIT & PERSIST STORE =======*/
export const store = configureStore({
  reducer: {
    contactsKey: persistedContactReducer,
    filterKey: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// /*======== REDUX =======*/
// import { addContact, deleteContact } from '.redux/contactSlice';
// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// // const initialState = {
// //   contacts: [],
// //   filter: '',
// // };
// /*======== ROOT REDUCER =======*/
// // const rootReducer = combineReducers({
// //   contacts: contactReducer,
// //   filter: filterReducer,
// // });

// // /*======== CONNECTIONS DEVTOOLS TO REDUX =======*/
// // const enhancer = devToolsEnhancer();
