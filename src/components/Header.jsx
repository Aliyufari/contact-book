import { FiUserPlus } from "react-icons/fi";

const Header = ({showModal, contacts}) => {
  return (
    <header className='w-full h-[55px] bg-primary flex items-center'>
      <div className="container flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">Contact list ({contacts.length})</h3>
        <button 
            onClick={showModal} 
            className='bg-secondary text-white text-sm py-1 px-3 rounded shadow flex items-center gap-1'>
            <FiUserPlus /> Add contact
        </button>
      </div>
    </header>
  )
}

export default Header