import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { v4 as uuid } from "uuid";
import React, { useState, useEffect } from "react";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";
import api from "../api/contacts";
function App() {
  // const [contacts, setContacts] = useState(localStorage.getItem("contacts") ? JSON.parse(localStorage.getItem("contacts")) : []);
  const [contacts, setContacts] = useState([]);
  const [searchterm, setsearchterm] = useState("");
  const [searchresults, setsearchresults] = useState([]);

  //fetch data
  const retrievecontacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  // const addcontacthandler = (contact) => {
  //   setContacts([...contacts, {id:uuid(),...contact}]);
  // };
  const addcontacthandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);

    setContacts([...contacts, response.data]);
  };

  const deletecontacthandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newcontactlist = contacts.filter((contact) => {
      console.log(contact.id);
      return contact.id !== id;
    });
    setContacts(newcontactlist);
  };
  // const editcontacthandler = (contact) => {
  //   const newcontactlist = contacts.map((c) => {
  //     if (c.id === contact.id) {
  //       return contact;
  //     }
  //     return c;
  //   });
  //   setContacts(newcontactlist);
  // };

  const editcontacthandler =async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id===id?{...response.data}:contact;
      })
      
      );
    }

   
  
 

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  useEffect(() => {
    const getAllContacts = async () => {
      const allcontacts = await retrievecontacts();
      if (allcontacts) setContacts(allcontacts);
    };
    getAllContacts();
  }, []);

const searchhandler=(searchterm)=>{
  setsearchterm(searchterm);
  if(searchterm!==""){
    const newcontactlist=contacts.filter((contact)=>{

      return Object.values(contact).join(" ").toLowerCase().includes(searchterm.toLowerCase());
    });
    setsearchresults(newcontactlist);
  }
  else{
    setsearchresults(contacts);
  }
  }
  //using functionalities for setting upp contacts
  return (
    <div className="ui container">
      <Router>
        <Header term={searchterm} 
              searchkeyterm={searchhandler}/>
        <Routes>
          <Route
            path="/add"
            element={<AddContact addcontacthandler={addcontacthandler} />}
          />

          <Route
            path="/"
            element={
              <ContactList 
                deletecontacthandler={deletecontacthandler}
                contacts={searchterm.length<1?contacts:searchresults}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route
            path="/edit"
            element={<EditContact editcontacthandler={editcontacthandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;