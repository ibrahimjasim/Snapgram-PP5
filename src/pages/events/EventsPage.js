import React, { useState, useEffect } from 'react';
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from 'react-router-dom';

import styles from "../../styles/EventsPage.module.css"

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    location: '',
    start_time: '',
    end_time: '', admission_price: "", website
      : ""
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();
  function isTodayBetweenDates(startDateStr, endDateStr) {
    // Parse the date strings directly into Date objects
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Get today's date with the time part reset to midnight
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if today is between the start and end dates
    return today >= startDate && today <= endDate;
  }

  // Outputs true or false

  function isPastStartDate(startDateStr) {
  
    // Parse the startDateStr into a Date object
    const startDate = new Date(startDateStr);

    // Get today's date with the time part reset to midnight
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Compare today's date with the start date
    console.log(today, startDate)
    return isTodayBetweenDates(today, startDate)
  }
 
  // Fetch events on component mount
  const fetchEvents = async () => {
    try {
      const response = await axiosReq.get('events/');
      console.log(response.data)
      let finalResults = response.data.results.filter((el) => isPastStartDate(el.start_time))

      setEvents(finalResults || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
  useEffect(() => {


    fetchEvents();
  }, []);

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    // Clear any existing errors for this field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(newEvent).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const { data } = await axiosReq.post('events/', formData);
      setEvents(prevEvents => [data, ...prevEvents]);
      setNewEvent({ title: '', description: '', location: '', start_time: '', end_time: '' }); // Reset form fields
      fetchEvents();
    } catch (err) {
      if (err.response?.status !== 401) {
        // Set errors from response to the form state
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div>
      <h1>Events</h1>
      <form className={styles.events_form} onSubmit={handleSubmit}>
        <input
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          placeholder="Title"
        />

        <input
          name="description"
          value={newEvent.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          name="admission_price"
          value={newEvent.admission_price}
          onChange={handleInputChange}
          placeholder="Admission Price"
          type='number'
        />
        <input
          name="website"
          value={newEvent.website}
          onChange={handleInputChange}
          placeholder="Website"
        />
        {errors.description && <p>{errors.description}</p>}
        <input
          name="location"
          value={newEvent.location}
          onChange={handleInputChange}
          placeholder="Location"
        />
        {errors.location && <p>{errors.location}</p>}
        <input
          name="start_time"
          type="datetime-local"
          value={newEvent.start_time}
          onChange={handleInputChange}
        />
        {errors.start_time && <p>{errors.start_time}</p>}
        <input
          name="end_time"
          type="datetime-local"
          value={newEvent.end_time}
          onChange={handleInputChange}
        />
        {errors.end_time && <p>{errors.end_time}</p>}
        <button type="submit">Add Event</button>
      </form>
      {errors.title && <p>{errors.title}</p>}
      <div className={styles.events_container}>
        {events?.length !== 0 && events?.map(event => (
          <div className={styles.event_item} key={event.id}>
            <div className={styles.event_title_header}>
              <div className={styles.event_price_wrapper}>
                <h2>{event.title}</h2>
                <p className={styles.price_text}>${event.admission_price}</p>
              </div>
              <p>{event.description}</p>
            </div>

            <p>At {event.location} from {event.start_time} to {event.end_time}</p>
            <a href={event.website} target='_blank'>Event Website</a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;