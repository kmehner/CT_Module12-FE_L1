import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [contacts, setContacts] = useState([{contactId: null, name: '', email: ''}])


  return (
    <>
      <UserContexxt.Provider value={{contacts, setContacts }}>
        <Router>
          <Routes>
            <Route path='/' element = {<Contacts/>}/>
          </Routes>
        </Router>
      </UserContexxt.Provider>
    </>
  )
}

export default App
