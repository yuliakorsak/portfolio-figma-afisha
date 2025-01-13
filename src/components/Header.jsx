export default function Header() {
  return (
    <header className="header">
      <div className="header__inner-wrapper">
        <img className="logo" src="img/logo.svg" alt="Сайт концертно-экскурсионных программ" />
        <nav className="header__main-menu">
          <ul className="header__menu-list">
            <li className="header__menu-item"><a href="#">Афиша</a></li>
            <li className="header__menu-item"><a href="#">Заказ билетов</a></li>
            <li className="header__menu-item"><a href="#">Контакты</a></li>
            <li className="header__menu-item"><a href="#">История дворца</a></li>
            <li className="header__menu-item"><a href="#">Галерея</a></li>
            <li className="header__menu-item"><a href="#">Планы залов</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}