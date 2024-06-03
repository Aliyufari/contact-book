import { BsTelephone } from "react-icons/bs"
import { IoCheckmarkCircleOutline, IoLocationOutline } from "react-icons/io5"
import user_male from "../assets/user-male.png"
import user_female from "../assets/user-female.png"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { FaRegTrashAlt } from "react-icons/fa"
import { FaRegPenToSquare } from "react-icons/fa6"

const Contact = ({contactList, showModal, setDeleteContact}) => {

  
  return (
    <>
      {contactList.length === 0 ? (<p>No contact found!</p>) : (
        contactList.map(contact => (
          <div key={contact.id} className="relative bg-primary rounded p-3">
            <div className="flex flex-row justify-start items-center gap-2">
              <div className="w-[50px] border-2 border-secondary rounded-full">
                <img src={contact.gender.toLowerCase() === "female"? user_female : user_male} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-lg font-bold">{contact.name}</p>
                <p className="bg-gray-700 rounded-full py-1 px-4 text-xs font-bold mt-1 text-green-400">{contact.profession}</p>
              </div>
            </div>
            <div className="mt-3 px-1">
              <p className="flex justify-start items-center my-2 gap-3"><HiOutlineEnvelope className="text-secondary text-bold" /> <span>{contact.email}</span> </p>
              <p className="flex justify-start items-center my-2 gap-3"><IoLocationOutline className="text-secondary" /> <span>{contact.address}</span></p>
              <p className="flex justify-start items-center my-2 gap-3"><BsTelephone className="text-secondary" /> <span>{contact.phone}</span></p>
              <p className="flex justify-start items-center my-2 gap-3">
                {
                  contact.status.toLowerCase() === "active"?
                  (<><i><IoCheckmarkCircleOutline className="text-secondary" /></i>active</>) :
                  (<><i><IoIosCloseCircleOutline className="text-secondary" /></i>inactive</>)
                }
              </p>
            </div>
            <div className="flex justify-end items-center gap-2">
              <FaRegPenToSquare onClick={() => showModal(contact)} className="text-green-500" />
              <FaRegTrashAlt onClick={() => setDeleteContact({show: true, id: contact.id})} className="text-red-500" />
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Contact