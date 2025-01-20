import PropTypes from 'prop-types';

export default function News({ heading, desc, image }) {
  return (
    <div className="news-item">
      <img className="news-item__image" src={image} alt={heading} />
      <div className="news-item__inner-wrapper">
        <h3 className="news-item__heading">{heading}</h3>
        <div className="news-item__desc">{desc}</div>
      </div>
    </div >
  );
}

News.propTypes = {
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}