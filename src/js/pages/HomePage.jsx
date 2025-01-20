import Slider from '../ui/Slider';
import HeadingSection from '../ui/HeadingSection';
import Poster from '../ui/Poster';
import News from '../ui/News';
import Calendar from '../ui/Calendar';
import AnnouncementItem from '../ui/AnnouncementItem';
import PropTypes from 'prop-types';

export default function HomePage({data}) {
  const events = data.events;

  const posters = [];
  events.slice(0, 2).forEach(event => {
    posters.push(<Poster id={event.id} date={new Date(event.date)} image={event.mainImg}
      title={event.title} desc={event.desc} options={event.options} key={event.id} />);
  });

  const announcements = [];
  events.slice(0, 4).forEach(event => {
    announcements.push(<AnnouncementItem id={event.id} date={new Date(event.date)} title={event.title} key={event.id} />);
  });

  return (
    <main className="page">
      <Slider events={events.slice(0, 3)} />

      <section className="event-posters">
        <HeadingSection title={"Афиша"} rightBar={"Все мероприятия"} />
        <div className="event-posters__inner-wrapper">
          {posters}
        </div>
      </section>

      <div className="page__row-wrapper">
        <section className="news">
          <h1 className="news__heading">Новости</h1>
          <div className="news__inner-wrapper">
            <News heading={"Переносы / Отмена мероприятий"}
              desc={"11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час."}
              image={"img/a715cf49422c05a0631a9892a39d9192.jpg"} />
            <News heading={"Переносы / Отмена мероприятий"}
              desc={"11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час."}
              image={"img/e1b98a579d8667b7455bf2f8c8720a03.jpg"} />
          </div>
        </section>
        <Calendar month={data.month} modes={data.modes} />
      </div>

      <section className="announcement">
        <HeadingSection title={"Краткие анонсы"} rightBar={"Все мероприятия"} />
        <div className="announcement__inner-wrapper">
          {announcements}
        </div>
      </section>
    </main>
  );
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired
}