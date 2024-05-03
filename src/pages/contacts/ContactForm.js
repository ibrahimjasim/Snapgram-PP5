import React, { useEffect, useState } from 'react';
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from "../../styles/ContactForm.module.css"

function ContactForm() {
  const currentUser = useCurrentUser();

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    owner: ""
  });
  const [errors, setErrors] = useState({});
  const [contacts, setContacts] = useState([])
  const history = useHistory();

  const fetchContacts = async () => {
    try {
      const { data } = await axiosReq.get("/contacts/");
      setContacts(data.results)
    } catch (error) {

    }
  }





  console.log(contacts, "contacts from the dab")


  useEffect(() => {
    fetchContacts()
  }, [])
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value, owner: currentUser.profile_id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(contact)
    Object.keys(contact).forEach(key => formData.append(key, contact[key]));

    try {
      const { data } = await axiosReq.post("/contacts/", formData);
      alert("Message has been sent")

    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        {errors.phone && <p>{errors.phone}</p>}
        <textarea
          name="address"
          value={contact.address}
          onChange={handleChange}
          placeholder="Address"
        />
        {errors.address && <p>{errors.address}</p>}
        <textarea
          name="message"
          value={contact.message}
          onChange={handleChange}
          placeholder="Message"
        />
        {errors.message && <p>{errors.message}</p>}
        <button type="submit">Submit</button>
      </form>
      <div>

      </div>
    </>
  );
}

export default ContactForm;