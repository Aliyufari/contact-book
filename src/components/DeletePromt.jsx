const DeletePromt = ({deleteContact, handleDelete, handleCancel}) => {
  return (
    <dialog className={`w-full h-full ${deleteContact.show? 'flex' : 'hidden'} justify-center items-center bg-[rgba(0,0,0,.5)] backdrop-filter backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 z-30  md:items-center`}>
      <div className="w-full min-h-[160px] max-w-[400px] bg-primary rounded p-6 -mt-24 mx-auto text-sm shadow-sm shadow-black flex flex-col justify-center items-center gap-4">
        <h3 className="text-lg text-center font-extrabold mb-3">Delete contact, are you sure?</h3>
        <div className="flex gap-4">
          <button onClick={handleCancel} className='bg-green-600 rounded px-4 py-2 text-xs font-bold text-white hover:bg-green-800'>Cancel</button>
          <button onClick={handleDelete} className='bg-red-600 rounded px-4 py-2 text-xs font-bold text-white hover:bg-red-800'>Delete</button>
        </div>
      </div>
    </dialog>
  )
}

export default DeletePromt