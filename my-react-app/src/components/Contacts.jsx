import { useContext, useState } from "react";
import ContactContext from "../context/ContactContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

function Contacts (){
    const [selectedContact, setSelectedContact] = useState('');
    const {setContacts} = useContext(ContactContext)
    const navigate = useNavigate();

    const handleSelect = (e) => {
        e.onClick = setSelectedContact(e);
    }

    return(
        <Container>
            <Row>
                <Col>
                <h1>Contacts</h1>
                <ul>{setContacts.map(contacts=><li key={contacts.contactId}><Card onClick={handleSelect}>{contacts.contactId}<br/>{contacts.name}<br/>{contacts.email}</Card></li>)}</ul>
                <h3>Selected Contact</h3>
                <p>Contact ID: {selectedContact.contactId}<br/> Name: {selectedContact.name}<br/> Email: {selectedContact.email}</p>
                </Col>
            </Row>
        </Container>
    )
}

