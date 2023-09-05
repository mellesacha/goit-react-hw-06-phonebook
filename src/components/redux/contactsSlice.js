import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsSlice = createSlice({
    name: 'contacts', 
    initialState: initialContacts,
    reducers: {
        addContact(state, action) {
            state.initialContacts.push(action.payload)
        },
        deleteContact(state, action) {
            state.initialContacts = state.initialContacts.filter(contact => contact.id !== action.payload)
        }
    },
    prepare({id, name, number}) {
        return {
            payload: {
                id,
                name, 
                number,
            }
        }
    }
});

const contactsReducer = contactsSlice.reducer;

export const {addContact, deleteContact} = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);