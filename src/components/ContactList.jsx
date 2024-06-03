import Contact from "./Contact"

const ContactList = ({contactList, showModal, setDeleteContact}) => {
  return (
    <main className="mt-7">
      <ul className="grid grid-cols-4 gap-4">
        <Contact 
            contactList={contactList} 
            showModal={showModal}
            setDeleteContact={setDeleteContact}
        />
      </ul>
      <div className="flex justify-center items-center mt-10">
        <a href="" className="disabled px-3 py-1 text-sm bg-primary text-gray-300 border rounded-l">&laquo;</a>
        <a href="" className="px-3 py-1 text-sm text-white bg-secondary">1</a>
        <a href="" className="disabled px-3 py-1 text-sm bg-primary text-gray-300 border rounded-r">&raquo;</a>
      </div>
    </main>
  )
}

export default ContactList