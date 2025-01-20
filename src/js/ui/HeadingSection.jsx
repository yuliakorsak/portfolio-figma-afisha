import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HeadingSection({ title, rightBar = null }) {
  if (rightBar !== null) {
    return (
      <div className="heading-section">
        <h1 className="heading-section__title">{title}</h1>
        <div className="heading-section__right-wrapper">
          <div className="heading-section__icon"></div>
          <Link className="heading-section__link" to="/events">{rightBar}</Link>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="heading-section heading-section_centered">
        <h1 className="heading-section__title">{title}</h1>
      </div>);
  }
}

HeadingSection.propTypes = {
  title: PropTypes.string.isRequired,
  rightBar: PropTypes.string
}