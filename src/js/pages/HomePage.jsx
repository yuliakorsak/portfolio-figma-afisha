import ThumbSlider from '../ui/ThumbSlider';
import HeadingSection from '../ui/HeadingSection';
import Poster from '../ui/Poster';
import News from '../ui/News';
import Calendar from '../ui/Calendar';
import AnnouncementItem from '../ui/AnnouncementItem';
import data from '../data.json';

export default function HomePage() {

  return (
    <main className="page">
      <section className="slider">
        <img className="slider__main-image" src="img/6775f20401b245a225846e0688dfe5f9.jpg" alt="Концертный зал" />
        <div className="slider__previews-wrapper">
          <ThumbSlider image={"img/c499835e11691b8d4176b47885dfc6e6.jpg"} title={"Опера VS Оперетта"} link={"#"} />
          <ThumbSlider image={"img/03a43cdcea0377b70240ae14f0211a87.jpg"} title={"Антонио Вивальди. Времена года"} link={"/event/1"} />
        </div>
      </section>

      <section className="event-posters">
        <HeadingSection title={"Афиша"} rightBar={"Все мероприятия"} />
        <div className="event-posters__inner-wrapper">
          <Poster date={"2023-06-03"} image={"img/6775f20401b245a225846e0688dfe5f9.jpg"}
            title={"«ВЕК имени СИНАТРЫ»"} desc={"Посвящение Фрэнку Синатре."}
            options={{ style: "Джаз", time: "19:00", age: "6+" }} ticketLink={"#"} />
          <Poster date={"2023-06-30"} image={"img/c499835e11691b8d4176b47885dfc6e6.jpg"}
            title={"Опера VS Оперетта"} desc={"Санкт-Петербургский камерный оркестр Olympic Orchestra"}
            options={{ style: "Классика" }} ticketLink={"#"} />
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
          <AnnouncementItem date={"2023-06-03"} title={"«ВЕК имени СИНАТРЫ»"} link={"#"} />
          <AnnouncementItem date={"2023-06-12"} title={"Антонио Вивальди. Времена года"} link={"/event/1"} />
          <AnnouncementItem date={"2023-06-30"} title={"Опера VS Оперетта"} link={"#"} />
          <AnnouncementItem date={"2023-06-03"} title={"«ВЕК имени СИНАТРЫ»"} link={"#"} />
        </div>
      </section>
    </main>
  );
}