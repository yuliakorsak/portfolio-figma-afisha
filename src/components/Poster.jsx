export default function Poster({ date, image, title, desc, options, ticketLink }) {
  const formatDate = new Date(date).toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' });
  const dateParts = formatDate.split(' ');

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
        <h2 className="poster__title">{title}</h2>
        <p className="poster__description">{desc}</p>
        <ul className="poster__options">
          {optionsList}
        </ul>
      </div>
      <a className="button" href={ticketLink}>Заказать билет</a>
    </div>
  );
}