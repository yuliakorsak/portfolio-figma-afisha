import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Calendar({ month, modes }) {
  const [mode, setMode] = useState(0);

  const prevMode = () => {
    if (mode === 0) {
      setMode(modes.length - 1);
    } else {
      setMode(mode - 1);
    }
  }

  const nextMode = () => {
    if (mode === modes.length - 1) {
      setMode(0);
    } else {
      setMode(mode + 1);
    }
  }

  const firstDay = new Date(month);
  const dayOfWeek = firstDay.getDay() === 0 ? 7 : firstDay.getDay();
  const daysInMonth = (new Date(firstDay.getFullYear(), firstDay.getMonth(), 0)).getDate();
  const calendar = [];
  for (let i = 1; i < dayOfWeek; i++) {
    calendar.push(<div className="calendar__day"></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const fullDate = month + '-' + i.toString().padStart(2, '0');
    if (modes[mode].events[fullDate]) {
      calendar.push(<a className="calendar__day calendar__day_active" href={modes[mode].events[fullDate]} target="_blank">{i}</a>);
    } else {
      calendar.push(<div className="calendar__day">{i}</div>);
    }
  }

  while (calendar.length % 7 !== 0) {
    calendar.push(<div className="calendar__day"></div>);
  }

  return (
    <div className="calendar">
      <div className="calendar__heading" style={{ backgroundImage: `url(${modes[mode].image})` }}>
        <h2>{modes[mode].title}</h2>
      </div>
      <div className="calendar__dates-wrapper">
        <div className="calendar__left-wrapper">
          <h2>{new Date(month).toLocaleString('ru-RU', { month: "long" })}</h2>
          <div className="calendar__nav">
            <button type="button" className="button-nav button-nav_prev" onClick={prevMode} />
            <button type="button" className="button-nav button-nav_next" onClick={nextMode} />
          </div>
        </div>
        <div className="calendar__right-wrapper">
          {calendar}
        </div>
      </div>
    </div>
  )
}

Calendar.propTypes = {
  month: PropTypes.string.isRequired,
  modes: PropTypes.array
}