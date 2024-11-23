import { useContext } from "react";
import { ContactContext, SelectContactContext } from "../context/ContactContext";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

function Contacts (){
    const {contacts, setContacts} = useContext(ContactContext);
    const {selectContact, setSelectContact} = useContext(SelectContactContext);


    const handleSelectContact = (contact) => {
        setSelectContact(contact);
    }

    return(
        <Container>
            <Row>
                <Col>
                <h1>Contacts</h1>
                <ul>
                    {contacts.map((contact, index) => (
                        <Card bg='success' text='light' className='text-center px-2 my-1' key={index}><Card.Title>Contact ID:{contact.contactId}</Card.Title> <Card.Body><Button variant='info' onClick={()=>handleSelectContact(contact)}>Select Contact</Button></Card.Body></Card>
                    ))}
                </ul>
                {/* <ul>{setContacts.map(contacts=><li key={contacts.contactId}><Card onClick={setSelectedContact}>{contacts.contactId}<br/>{contacts.name}<br/>{contacts.email}</Card></li>)}</ul> */}
                <h3>Selected Contact</h3>
                <p>Contact ID: {selectContact.contactId}<br/> Name: {selectContact.name}<br/> Email: {selectContact.email}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts

