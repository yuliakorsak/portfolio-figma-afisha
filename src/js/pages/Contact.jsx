import HeadingSection from '../ui/HeadingSection';

export default function Contact() {
  return (
    <main className="page contact">
      <HeadingSection title={"Контакты"} />
      <div className="contact__row-wrapper">
        <div className="content contact__column-wrapper">
          <div className="content__inner-wrapper">
            <h3 className="content__heading">Адрес:</h3>
            <p className="paragraph">Россия, 191025, г. Санкт-Петербург, Невский пр., д. 1</p>
          </div>
          <div className="content__inner-wrapper">
            <h3 className="content__heading">Режим работы кассы Дворца:</h3>
            <p className="paragraph">понедельник: выходной</p>
            <p className="paragraph">вторник-суббота: с 11.00 до 19.00 час.</p>
            <p className="paragraph">воскресенье: с 11.00 до 17.00 час.</p>
            <p className="paragraph">перерыв: с 14.00 до 14.30 час.</p>
          </div>
        </div>
        <div className="contact__column-wrapper">
          <div className="content__inner-wrapper">
            <h3 className="content__heading">Билетная касса, заказ экскурсий:</h3>
            <p className="paragraph"><a href="tel:+78121234567">(812) 123-45-67</a></p>
          </div>
          <div className="content__inner-wrapper">
            <h3 className="content__heading">Аренда концертного/конференц зала:</h3>
            <p className="paragraph"><a href="tel:+78121234567">(812) 123-45-67</a></p>
          </div>
          <div className="content__inner-wrapper">
            <h3 className="content__heading">ВКонтакте:</h3>
            <p className="paragraph"><a href="#">vk.com/nevskiy1</a></p>
          </div>
        </div>
      </div>
      <img className="contact__map" src="img/map.png" alt="Карта: г. Санкт-Петербург, Невский пр., д. 1" />
    </main>
  );
}