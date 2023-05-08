import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operationsContacts';

const onPending = state => {
    state.isLoading = true;
  };
  
  const onRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  
  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    extraReducers: {
      [fetchContacts.pending]: onPending,
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      [fetchContacts.rejected]: onRejected,
      [addContact.pending]: onPending,
      [addContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      },
      [addContact.rejected]: onRejected,
      [deleteContact.pending]: onPending,
      [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      },
      [deleteContact.rejected]: onRejected,
    },
  });
  export const contactsReducer = contactsSlice.reducer;