import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner-wrapper">
        <Link to="/"><img className="logo" src="../img/logo.svg" alt="Сайт концертно-экскурсионных программ" /></Link>
        <nav className="header__main-menu">
          <ul className="header__menu-list">
            <li className="header__menu-item"><Link to="/events">Афиша</Link></li>
            <li className="header__menu-item"><Link to="#">Заказ билетов</Link></li>
            <li className="header__menu-item"><Link to="/contact">Контакты</Link></li>
            <li className="header__menu-item"><Link to="#">История дворца</Link></li>
            <li className="header__menu-item"><Link to="#">Галерея</Link></li>
            <li className="header__menu-item"><Link to="#">Планы залов</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}