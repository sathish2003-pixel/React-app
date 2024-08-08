import React, { useEffect, useState } from 'react';
import './Modal.css'; // Import the CSS file

const Modal = ({ showModal, setShowModal }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (showModal) {
      setShowAnimation(true);
      document.body.classList.add('modal-open');
    } else {
      setTimeout(() => {
        setShowAnimation(false);
        document.body.classList.remove('modal-open');
      }, 300); // match the animation duration
    }
  }, [showModal]);

  if (!showAnimation) return null;

  return (
    <div className= {`modal-overlay ${showModal ? 'opacity-100' : 'opacity-0'}`}>
      <div className="card modal-container">
        <h2 className="text-2xl mb-4  text-gray-800 text-center">Registration Form</h2>
        <form>
          <div className="mb-4">
            <label className="blocktext-sm font-medium mb-2 text-gray-800" htmlFor="name">
              Name
            </label>
            <input className="border rounded w-full py-2 px-3  bg-slate-50 " id="name" type="text" placeholder="Name"/>
          </div>
          <div className="mb-4">
            <label className="blocktext-sm font-medium mb-2  text-gray-800" htmlFor="email">
              Email
            </label>
            <input className="border rounded w-full py-2 bg-slate-50 px-3" id="email" type="email" placeholder="Email"/>
          </div>
          <div className="mb-4">
            <label className="blocktext-sm font-medium mb-2  text-gray-800" htmlFor="Phone">
              Phone number
            </label>
            <input className="border rounded w-full py-2 px-3  bg-slate-50" id="phone" type="tel" placeholder="Phone number"/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
            <button onClick={() => setShowModal(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
