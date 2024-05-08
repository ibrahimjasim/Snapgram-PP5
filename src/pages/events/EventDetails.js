import React, { useState } from 'react'
import styles from "../../styles/EventsPage.module.css"
import { axiosReq } from '../../api/axiosDefaults';

/* State for editing mode, form errors, and event data*/
const EventDetails = ({ event, fetchTheDataAgain }) => {

    const [editMode, setEditMode] = useState(false)
    const [errors, setErrors] = useState(false)
    const [newEvent, setNewEvent] = useState({
        title: event.title,
        description: event.description,
        location: event.location,
        start_time: event.start_time,
        end_time: event.end_time,
        admission_price: event.admission_price,
        website: event.website
    });
    const deleteTheEvent = async () => {
        try {
            await axiosReq.delete(`events/${event.id}`);
            fetchTheDataAgain()
        } catch (error) {
            console.log(error)
        }
    }
     /* Handles changes to the input fields and updates the event state*/
    const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name)
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
        /* Clear any existing errors for this field*/
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };
    const updatedTheEvent = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(newEvent).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            await axiosReq.put(`events/${event.id}`, formData);
            setEditMode(false)
            fetchTheDataAgain()


        } catch (err) {
            if (err.response?.status !== 401) {
                /* Set errors from response to the form state*/
                setErrors(err.response?.data);
            }
        }
    };

    console.log(newEvent, "hello newllow")
    return (
        <>

            {/* this is your event card */}
            <div className={styles.event_item} key={event.id}>
                <div className={styles.event_title_header}>
                    <div className={styles.event_price_wrapper}>
                        <h2 contentEditable={true}>{event.title}</h2>
                        <p className={styles.price_text}>${event.admission_price}</p>
                    </div>
                    <p>{event.description}</p>
                </div>

                <p>At {event.location} from {event.start_time} to {event.end_time}</p>
                <a href={event.website} target='_blank' rel='noreferrer'>Event Website</a>
                <div className={styles.event_dropdown}>
                    <button className={styles.event_delete_btn} onClick={deleteTheEvent}>Delete</button>
                    <button className={styles.event_edit_btn} onClick={() => setEditMode(!editMode)}>{!editMode ? "Edit" : "Close"}</button>

                </div>
            </div>

            {editMode && <form className={styles.events_form} onSubmit={updatedTheEvent}>
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
                <button type="submit">Update Event</button>
            </form>
            }
        </>
    )
}

export default EventDetails