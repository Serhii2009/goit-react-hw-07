import { createSelector } from "@reduxjs/toolkit";

export const selectCards = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectStatusFilter = (state) => state.filters.name;

export const selectVisibleCard = createSelector(
  [selectCards, selectStatusFilter],
  (items, filter) => {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
