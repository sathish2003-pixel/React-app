import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png'
import handleForm from './Form';
import Modal from './Modal';
import SimpleNewForm from './SimpleNewForm';


export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="text-white p-5">
        <div className="flex justify-between items-center px-5 mt-3 py-8">
          <div className="text-lg font-bold">
            <img src={logo} className='h-10 w-auto' alt="Logo"/>
          </div>
          <div className='flex'>
            {/* <button 
              className='px-4  bg-blue-500 hover:bg-blue-700 rounded' 
              onClick={() => setShowModal(true)}
            >
              Create
            </button> */}
            <SimpleNewForm />
            <button className='bg-red-500 mx-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleForm}>Log out</button>
          </div>
        </div>
      </header>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default Header;