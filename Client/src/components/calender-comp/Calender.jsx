import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import './Calender.css'

const Calendar = () => {
    const [events, setEvents] = useState([]);

    const calendarID = 'smartmirrorproject1@gmail.com';
    // const calendarID = process.env.REACT_REACT_APP_GOOGLE_CALENDER_ID;
    const apiKey = 'AIzaSyBxggcyK8XS5LAPL3OXIzr_LvUWbWQqP6w';
    // const apiKey = process.env.REACT_REACT_APP_GOOGLE_API_KEY;
    
    const getEvents = (calendarID, apiKey) => {
        function initiate() {
            gapi.client
                .init({
                    apiKey: apiKey,
                })
                .then(function () {
                    return gapi.client.request({
                        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                    });
                })
                .then(
                    (response) => {
                        let events = response.result.items;
                        setEvents(events);
                    },
                    function (err) {
                        return [false, err];
                    }
                );
        }
        gapi.load("client", initiate);
    };

    useEffect(() => {
        const events = getEvents(calendarID, apiKey);
        setEvents(events);
    }, []);


    const formatDateTime = (dateTimeString) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'UTC',
        };
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleString(undefined, options);
    };

    return (
        <div className='calender'>
            <h2 className='calender-header'>Google Takvim</h2>
            <ul className='calender-event'>
                {events?.map((event) => (
                    <li key={event.id} className='event'>
                        <h4> {event.summary} </h4>
                        <p>{formatDateTime(event.start.dateTime)}</p>
                        <p>{formatDateTime(event.end.dateTime)}</p>
                        <hr className='horizontal-rule' />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Calendar;