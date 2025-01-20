import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Poster({ id, date, image, title, desc, options }) {

  const formatDate = date.toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' });
  const dateParts = formatDate.split(' ');

  if (!options) {
    options = {};
  }

  options["time"] = date.toTimeString().substring(0, 5);
  const optionsList = [];
  Object.keys(options).forEach(key => {
    const className = 'poster__option poster__option_' + key;
    optionsList.push(<li className={className} key={key}>{options[key]}</li>);
  });

  return (
    <div className="poster">
      <div className="poster__date">
        <span className="poster__day">{dateParts[0]}</span>
        <span className="poster__month">{dateParts[1]}</span>
      </div>
      <img className="poster__image" src={image} alt={title} />
      <div className="poster__info-wrapper">
        <Link to={"/event/" + id}><h2 className="poster__title">{title}</h2></Link>
        <p className="poster__description">{desc}</p>
        <ul className="poster__options">
          {optionsList}
        </ul>
      </div>
      <Link className="button" to="#">Заказать билет</Link>
    </div>
  );
}

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  options: PropTypes.object,
}