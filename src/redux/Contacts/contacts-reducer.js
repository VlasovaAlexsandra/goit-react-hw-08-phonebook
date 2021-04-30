import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux"
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError
} from './contacts-actions'

const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload)

})

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,

    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false
})

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
})

export default combineReducers({ items, filter, loading })