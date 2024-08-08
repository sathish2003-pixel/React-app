import React, { useState } from 'react';
import './App.css';

function InsertDataForm() {
  const [formData, setFormData] = useState({
    name: '',
    language: '',
    id: '',
    bio: '',
    version: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://odddb9bfmg.execute-api.eu-north-1.amazonaws.com/Insert/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    alert(`Submitted successfully! Inserted ID: ${data.inserted_id}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Language:
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
            />
          </label>
          <label>
            ID:
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </label>
          <label>
            Bio:
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Version:
            <input
              type="number"
              name="version"
              value={formData.version}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default InsertDataForm;
