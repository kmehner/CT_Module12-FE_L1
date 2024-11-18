import React from "react";

const ContactContext = React.createContext({
    contacts: [{contactId: 1, name: 'John Smith', email: 'john@example.com'}, {contactId: 2, name: 'Jane Doe', email: 'jane@example.com'}, {contactId: 3, name: 'Saul Goodman', email: 'bettercallsaul@example.com'}],
    setContacts: () => [{}]

    selectContacts: {},
    setSelectContacts: () =>{}
})

export default ContactContext;