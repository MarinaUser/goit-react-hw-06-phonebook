import { createSlice } from '@reduxjs/toolkit';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { setFilter, addContacts, deleteContacts } =
  ContactsSlice.actions;