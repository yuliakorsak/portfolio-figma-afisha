import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ThumbSlider({ image, title, link }) {
  return (
    <Link className="thumb-slider" to={link}>
      <img src={image} alt={title} className="thumb-slider__image" />
      <h4 className="thumb-slider__title">{title}</h4>
    </Link>
  );
}

ThumbSlider.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}