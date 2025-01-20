import PropTypes from 'prop-types';

export default function ThumbSlider({ id, image, title, isActive = false }) {
  return (
    <div type="button" className={"thumb-slider" + (isActive ? " thumb-slider_active" : "")} to={"/event/" + id}>
      <img src={image} alt={title} className="thumb-slider__image" />
      <h4 className="thumb-slider__title">{title}</h4>
    </div>
  );
}

ThumbSlider.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool
}