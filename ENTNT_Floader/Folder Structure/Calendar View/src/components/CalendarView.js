import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h3>Communication Calendar</h3>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date, view }) => {
          // Display notes or actions for the day
          return view === 'month' && date.getDate() % 5 === 0 ? (
            <div className="tile-content">Communication Due</div>
          ) : null;
        }}
      />
    </div>
  );
};

export default CalendarView;

