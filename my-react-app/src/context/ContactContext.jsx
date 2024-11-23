import { createContext } from "react";

export const ContactContext = createContext({
    contacts: [{
        contactId: 0,
        name: '',
        email: ''

    }],
    setContacts: () => [{}]
})

export const SelectContactContext = createContext({
    selectContact: { 
        contactId: '',
        name: '', 
        email: ''},
    setSelectContacts: () =>{}
})

