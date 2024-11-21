
import React, { useState, useEffect } from 'react';
import classes from './calendar.module.css'

export default function Calendar() {
    const [selectdate, setselectDate] = useState('');
    const [days, setDays] = useState([]);
  
    useEffect(() => {
      if (selectdate) {
        const [year, month] = selectdate.split('-');
        const calendarDays = generateCalendar(parseInt(year), parseInt(month) - 1);
        setDays(calendarDays);
      }
    }, [selectdate]);
  
    return (
      <div>
        <h1>Календарь</h1>
        <input type="month" value={selectdate} onChange={(event) => setselectDate(event.target.value)}/>
  
        <div className={classes.diva}>
          <RenderDays days={days}/>
        </div>
      </div>
    );
  }

function generateCalendar(year, month) {
  const date = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = date.getDay();

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return calendarDays;
}

function RenderDays({days}) {
  return <fieldset className={classes.diva}>{days.map((day, index) => (<span key={index} className={classes.spandi}>
    {day !== null ? day : ' '}</span>))}</fieldset>;
}