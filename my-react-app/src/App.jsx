import { useState } from 'react'
import { Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {ContactContext, SelectContactContext } from './context/ContactContext';
import Contacts from './components/Contacts';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';


function App() {
  const [contacts, setContacts] = useState(
    [{
      contactId: 1,
      name: 'John Smith', 
      email: 'j@example.com'
  }, {
      contactId: 2,
      name: 'Jane Doe', 
      email: 'doe@example.com'
  },{
      contactId: 3,
      name: 'Saul Goodman', 
      email: 'justicemattersmost@example.com'
  }])

  const [selectContact, setSelectContact] = useState({
    contactId: '',
    name: '',
    email: ''
  })



  return (
    <>
      <ContactContext.Provider value={{contacts, setContacts }}>
        <SelectContactContext.Provider  value={{selectContact, setSelectContact}}>
            <Routes>
              <Route path='/' element = {<Contacts/>}/>
              <Route path='/product-list' element ={<ProductList/>}/>
              <Route path='/product-form' element={<NewProductForm/>}/>
            </Routes>
        </SelectContactContext.Provider>
      </ContactContext.Provider>
    </>
  )
}

export default App
