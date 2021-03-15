import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
  
  });

export default { getLoading, getAllContacts, getFilter, getVisibleContacts };

