import { useContext, useState } from "react";
import ContactContext from "../context/ContactContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

function Contacts {
    const [selectedContact, setSelectedContact] = useState('');
    const {setContacts} = useContext(contactsContext)
    const navigate = useNavigate();

    const handleSelect = (e) => {
        e.onClick = setSelectedContact{e};
    }

    return(
        <Container>
            <Row>
                <Col>
                <h1>Contacts</h1>
                tContacts.map<Card>

                </Card>
                </Col>
            </Row>
        </Container>
    )
}

