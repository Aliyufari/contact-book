import ContactList from "./components/ContactList"
import Header from "./components/Header"
import { useState } from "react"
import Modal from "./components/Modal"
import DeletePromt from "./components/DeletePromt"

const App = () => {
  const [contactList, setContactList] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    return contacts;
  });
  const [deleteContact, setDeleteContact] = useState({show: false, id: null});
  const [modalInfo, setModalInfo] = useState({
    show: false,
    edit: false,
    contact: {
      id: '',
      name: '', 
      profession: '', 
      gender: '', 
      email: '', 
      address: '', 
      phone: '', 
      status: ''
    }
  });

  const handleCancel = () => {
    setDeleteContact({...deleteContact, show: false})
  }

  const handleDelete = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const updatedList = contacts.filter(contact => contact.id !== deleteContact.id);
    localStorage.setItem('contacts', JSON.stringify(updatedList));
    setContactList(updatedList);
    setDeleteContact({...deleteContact, show: false})
  }

  return (
    <>
      <Header 
        showModal={() => setModalInfo({...modalInfo, show: true, edit: false})}
        contacts={contactList} 
      />

      <div className="main">
        <div className="container">
          <ContactList 
            contactList={contactList} 
            showModal={(contact) => setModalInfo({show: true, edit: true, contact})} 
            setDeleteContact={setDeleteContact}
          />
        </div>
      </div>

      <Modal 
        contactList={contactList}
        setContactList={setContactList}
        modalInfo={modalInfo} 
        setModalInfo={setModalInfo} 
      />
      <DeletePromt
        deleteContact={deleteContact}
        handleDelete={handleDelete}
        handleCancel={handleCancel}
      />
    </>
  )
}

export default App