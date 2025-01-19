export default function AnnouncementItem({ date, title, link }) {
  const formatDate = new Date(date).toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' });
  const dateParts = formatDate.split(' ');

  return (
    <div className="announcement__item">
      <div className="announcement__date-wrapper">
        <span className="announcement__day">{dateParts[0]}</span>
        <span className="announcement__month">{dateParts[1]}</span>
      </div>
      <a className="announcement__heading" href={link}>{title}</a>
    </div>
  );
}