import React, { useState } from 'react';
import axios from 'axios';

const InsertForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        language: '',
        id: '',
        bio: '',
        version: ''
    });

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const params = new URLSearchParams(formData).toString();
            const res = await axios.get(`https://n8efjdqkbe.execute-api.eu-north-1.amazonaws.com/Dev/insert_data?${params}`);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            if (err.response) {
                // Server responded with a status other than 2xx
                setError(err.response.data);
            } else if (err.request) {
                // Request was made but no response received
                setError('Network error, no response received.');
            } else {
                // Something happened in setting up the request
                setError('Error: ' + err.message);
            }
            setResponse(null);
        }
    };

    return (
        <div>
            <h1>Insert Data into MongoDB</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Language:</label>
                    <input type="text" name="language" value={formData.language} onChange={handleChange} required />
                </div>
                <div>
                    <label>ID:</label>
                    <input type="text" name="id" value={formData.id} onChange={handleChange} required />
                </div>
                <div>
                    <label>Bio:</label>
                    <input type="text" name="bio" value={formData.bio} onChange={handleChange} required />
                </div>
                <div>
                    <label>Version:</label>
                    <input type="number" name="version" value={formData.version} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
            {response && <p>Success: {JSON.stringify(response)}</p>}
            {error && <p>Error: {JSON.stringify(error)}</p>}
        </div>
    );
};

export default InsertForm;
