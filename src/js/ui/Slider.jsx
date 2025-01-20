import ThumbSlider from './ThumbSlider';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Slider({ events }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === (events.length - 1) ? 0 : current + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [current, events.length]);

  const sliders = [];
  for (let i = 0; i < events.length; i += 1) {
    if (i === current) {
      sliders.push(<ThumbSlider id={events[i].id} image={events[i].mainImg} title={events[i].title} isActive key={events[i].id} />);
    }
    else {
      sliders.push(<ThumbSlider id={events[i].id} image={events[i].mainImg} title={events[i].title} key={events[i].id} />);
    }
  };

  return (
    <section className="slider">
      <img className="slider__main-image" src={events[current].mainImg} alt={events[current].title} />
      <div className="slider__previews-wrapper">
        {sliders}
      </div>
    </section>
  );
}

Slider.propTypes = {
  events: PropTypes.array.isRequired
}