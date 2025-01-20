import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function AnnouncementItem({ id, date, title }) {
  const formatDate = date.toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' });
  const dateParts = formatDate.split(' ');

  return (
    <div className="announcement__item">
      <div className="announcement__date-wrapper">
        <span className="announcement__day">{dateParts[0]}</span>
        <span className="announcement__month">{dateParts[1]}</span>
      </div>
      <Link className="announcement__heading" to={"/event/" + id}>{title}</Link>
    </div>
  );
}

AnnouncementItem.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired
};