import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact(state, actions) {
      state.items = state.items.filter((item) => item.id !== actions.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = (state) => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
