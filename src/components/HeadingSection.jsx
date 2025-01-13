export default function HeadingSection({ title }) {
  return (
    <div className="heading-section">
      <h1 className="heading-section__title">{title}</h1>
      <div className="heading-section__right-wrapper">
        <div className="heading-section__icon"></div>
        <a className="heading-section__link" href="#">Все мероприятия</a>
      </div>
    </div>
  );
}