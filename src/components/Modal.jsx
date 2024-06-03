import { useEffect } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const Modal = ({contactList, setContactList, modalInfo, setModalInfo}) => {

  const handleOnChange = (event) => {
    event.preventDefault();
    setModalInfo({
        ...modalInfo, 
        contact: {
          ...modalInfo.contact,
          [event.target.name]: event.target.value 
        }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    if (modalInfo.edit) {
      const updatedContactList = contacts.map(contact => {
        return contact.id === modalInfo.contact.id ? modalInfo.contact : contact;
      });

      localStorage.setItem('contacts', JSON.stringify(updatedContactList));
      setContactList(updatedContactList);

    } else {
      const updatedList = [...contacts, {...modalInfo.contact, id: new Date().getTime().toString()}]; 
      localStorage.setItem('contacts', JSON.stringify(updatedList));
      setContactList(updatedList);
    }

    setModalInfo({...modalInfo, show:false});
  } 

  useEffect(() => {
    if (!modalInfo.show) {
      setModalInfo({
        ...modalInfo,
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
    }
  }, [modalInfo.show]);

  return (
    <dialog className={`w-full h-full ${modalInfo.show? 'flex' : 'hidden'} justify-center items-center bg-[rgba(0,0,0,.5)] backdrop-filter backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 z-30  md:items-center`} id="modal">
      <div className="w-full max-w-[500px] bg-primary rounded shadow-sm shadow-black relative -top-10 p-4">
        <h3 className="text-center text-secondary text-lg font-bold mb-2">{modalInfo.edit? 'Edit contact' : 'New contact'}</h3>
        <button onClick={() => setModalInfo({...modalInfo, show: false})} className="w-[28px] h-[28px] bg-red-400 font-bold rounded-full absolute -top-2 -right-2 flex justify-center items-center hover:bg-red-600 hover:text-white cursor-pointer"><LiaTimesSolid /></button>
        <div className="divider"></div>
        <div className="modal_divider">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="w-full">
                <label htmlFor="" className="block text-sm font-bold mt-2 mb-1">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    className="w-full outline-none bg-gray-700 focus:bg-gray-400 text-sm placeholder:text-gray-400 py-2 px-3 rounded"
                    value={modalInfo.contact.name}
                    onChange={handleOnChange} />
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="w-full">
                  <label htmlFor="" className="block text-sm font-bold mt-2 mb-1">Email</label>
                  <input 
                      type="text" 
                      name="email"
                      className="w-full outline-none bg-gray-700 focus:bg-gray-400 text-sm placeholder:text-gray-400 py-2 px-3 rounded"
                      value={modalInfo.contact.email} 
                      onChange={handleOnChange} />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="block text-sm font-bold mt-2 mb-1">Gender</label>
                  <select 
                      name="gender"
                      className="w-full outline-none bg-gray-700 focus:bg-gray-400 text-sm placeholder:text-gray-400 py-2 px-3 rounded" 
                      value={modalInfo.contact.gender} 
                      onChange={handleOnChange}>
                      <option selected>--select gender--</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="w-full">
                  <label htmlFor="" className="block text-sm font-bold mt-2 mb-1">Profession</label>
                  <input 
                      type="text" 
                      name="profession"
                      className="w-full outline-none bg-gray-700 focus:bg-gray-400 text-sm placeholder:text-gray-400 py-2 px-3 rounded"
                      value={modalInfo.contact.profession} 
                      onChange={handleOnChange} />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="block text-sm font-bold mt-2 mb-1">Phone</label>
                  <input 
                      type="text" 
                      name="phone"
                      className="w-full outline-none bg-gray-700 focus:bg-gray-400 text-sm placeholder:text-gray-400 py-2 px-3 rounded" 
                      value={modalInfo.contact.phone}
                      onChange={handleOnChange} />
                </div>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="w-full">
                  <label htmlFor="" className="block text-sm font-bold mt-2 mb-1">Address</label>
                  <input 
                      type="text" 
                      name="address"
                      className="w-full outline-none bg-gray-700 focus:bg-gray-400 text-sm placeholder:text-gray-400 py-2 px-3 rounded" 
                      value={modalInfo.contact.address}
                      onChange={handleOnChange} />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="block text-sm font-bold mt-2 mb-1">Status</label>
                  <select 
                      name="status"
                      className="w-full outline-none bg-gray-700 focus:bg-gray-400 text-sm placeholder:text-gray-400 py-2 px-3 rounded" 
                      value={modalInfo.contact.status} 
                      onChange={handleOnChange}>
                      <option selected>--select status--</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              {/* <div className="file-input">
                <label htmlFor="" className="block text-sm font-bold mt-1 mb-1">Profile image</label>
                <input type="file" name="" id="" />
              </div> */}
            </div>
            <div className="flex justify-between items-center mt-5">
              <button 
                onClick={() => setModalInfo({...modalInfo, show: false})} 
                type="button" 
                className="bg-red-500 text-white py-1 px-5 rounded shadow">
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-secondary text-white py-1 px-5 rounded shadow">
                {modalInfo.edit? 'Update' : 'save'}
              </button>
            </div>   
          </form>
        </div>
      </div>
    </dialog>    
  )
}

export default Modal