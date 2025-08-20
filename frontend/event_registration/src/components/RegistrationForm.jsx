import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({ eventId: '', userName: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/registrations', formData)
      .then(response => setMessage('Registration successful!'))
      .catch(error => setMessage(`Error: ${error.response?.data?.message || error.message}`));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Register for an Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Event ID:</label>
          <input
            type="text"
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">User Name:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}

export default RegistrationForm;