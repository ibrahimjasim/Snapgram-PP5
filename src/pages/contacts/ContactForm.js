import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setContact({...contact, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the URL to your Django API endpoint
      const response = await axios.post('https://snapgram-api-df7c5b682dbd.herokuapp.com/', contact);
      alert('Contact saved successfully!');
      console.log(response.data);
    } catch (error) {
      alert('Failed to save contact');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="phone"
        value={contact.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <textarea
        name="address"
        value={contact.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <textarea
        name="message"
        value={contact.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;