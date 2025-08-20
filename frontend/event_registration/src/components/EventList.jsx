import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Event List</h2>
      <ul className="list-disc pl-5">
        {events.map(event => (
          <li key={event._id} className="my-2">
            <Link to={`/event/${event._id}`} className="text-blue-600 hover:underline">
              {event.title}
            </Link> - {new Date(event.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;