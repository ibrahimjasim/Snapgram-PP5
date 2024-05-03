import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    location: '',
    start_time: '',
    end_time: '',
  });

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/events/');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/events/', newEvent);
      setEvents([...events, response.data]);
      setNewEvent({ title: '', description: '', location: '', start_time: '', end_time: '' });
    } catch (error) {
      console.error('Error adding new event:', error);
    }
  };

  return (
    <div>
      <h1>Events</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" value={newEvent.title} onChange={handleInputChange} placeholder="Title" />
        <input name="description" value={newEvent.description} onChange={handleInputChange} placeholder="Description" />
        <input name="location" value={newEvent.location} onChange={handleInputChange} placeholder="Location" />
        <input name="start_time" type="datetime-local" value={newEvent.start_time} onChange={handleInputChange} />
        <input name="end_time" type="datetime-local" value={newEvent.end_time} onChange={handleInputChange} />
        <button type="submit">Add Event</button>
      </form>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>At {event.location} from {event.start_time} to {event.end_time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;