import React, { useState } from 'react';
// import './SimpleNewForm.css'
const SimpleNewForm = () => {
  const initialFormState = {
    name: '',
    language: '',
    id: '',
    bio: '',
    version: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://aszbqhmp58.execute-api.eu-north-1.amazonaws.com/insert/Dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: JSON.stringify(formData),
        }),
      });
      const result = await response.json();
      console.log('Response:', result);
      alert(`Response: ${JSON.stringify(result)}`);
      setFormData(initialFormState); // Back to the normal state
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleModal=()=>{
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create
      </button>

      {isModalOpen && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
       <div className="bg-white  p-6 rounded-lg shadow-lg w-96 w-16 mx-auto">
         <button onClick={toggleModal} className="absolute top-2 right-2  bg-white  text-gray-700 hover:text-gray-900">
           &times;
         </button>
        <h2 className="text-2xl mb-4  text-gray-800 text-center">Registration Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
    
    <div>
    
      <input type="text" name="name" value={formData.name} onChange={handleChange} className="text-black border rounded w-full py-2 px-3  bg-slate-50 " placeholder='Name' />
    </div>
    <div>
    
      <input type="text" name="language" value={formData.language} onChange={handleChange}  className="text-black border rounded w-full py-2 px-3  bg-slate-50 " placeholder='Language' />
    </div>
    <div>
    
      <input type="number" name="id" value={formData.id} onChange={handleChange}  className="text-black border rounded w-full py-2 px-3  bg-slate-50 " placeholder='ID' />
    </div>
    <div>
    
      <textarea name="bio" value={formData.bio} onChange={handleChange}  className="text-black border rounded w-full py-2 px-3  bg-slate-50 " placeholder='Bio'></textarea>
    </div>
    <div>
    
      <input type="number" name="version" value={formData.version} onChange={handleChange}  className="text-black border rounded w-full py-2 px-3  bg-slate-50 " placeholder='Version' />
    </div>
    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Submit
    </button>
  </form>
          </div>
         </div>
      )}
    </div>
  );
};

export default SimpleNewForm;