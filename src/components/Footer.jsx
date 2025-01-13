export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner-wrapper">
        <img className="logo" src="img/logo.svg" alt="Сайт концертно-экскурсионных программ" />
        <div className="footer__columns">
          <div className="footer__column">
            <h3 className="footer__column-heading">Мероприятия</h3>
            <ul className="footer__links-list">
              <li className="footer__list-item"><a href="#">Экскурсии</a></li>
              <li className="footer__list-item"><a href="#">Концерты</a></li>
              <li className="footer__list-item"><a href="#">Афиша</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__column-heading">Контакты</h3>
            <ul className="footer__links-list footer__links-list_vertical">
              <li className="footer__list-item">г. Санкт-Петербург, Невский пр., д. 1</li>
              <li className="footer__list-item"><a href="mailto:text@mail.ru">text@mail.ru</a></li>
              <li className="footer__list-item"><a href="tel:+78121234567"></a>(812) 123-45-67</li>
            </ul>
          </div>
        </div>
      </div >
    </footer >
  );
}