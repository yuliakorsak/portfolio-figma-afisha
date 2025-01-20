import { useParams } from 'react-router-dom';
import HeadingSection from '../ui/HeadingSection';
import Poster from '../ui/Poster';
import PropTypes from 'prop-types';

export default function Events({ events }) {
  const notFound = (<p className="error">Мероприятия не найдены.</p>);
  const posters = [];
  let title;
  const { type } = useParams();

  if (type) {
    if (type === "all") {
      title = "Афиша";
      events.forEach(event => {
        posters.push(<Poster id={event.id} date={new Date(event.date)} image={event.mainImg}
          title={event.title} desc={event.desc} options={event.options} key={event.id} />);
      });
    }
    else {
      if (type === "trips") {
        title = "Экскурсии";
      }
      else if (type === "concerts") {
        title = "Концерты";
      }
      events.filter(event => event.type === type).forEach(event => {
        posters.push(<Poster id={event.id} date={new Date(event.date)} image={event.mainImg}
          title={event.title} desc={event.desc} options={event.options} key={event.id} />);
      });
    }
  }

  return (
    <main className="event-posters page">
      <HeadingSection title={title} />
      <div className="event-posters__inner-wrapper">
        {posters.length > 0 ? posters : notFound}
      </div>
    </main>
  );
}

Events.propTypes = {
  events: PropTypes.array.isRequired
}