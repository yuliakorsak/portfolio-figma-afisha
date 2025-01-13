import ThumbSlider from '../components/ThumbSlider';
import HeadingSection from '../components/HeadingSection';
import Poster from '../components/Poster';
import News from '../components/News';
import Calendar from '../components/Calendar';
import AnnouncementItem from '../components/AnnouncementItem';

const month = '2024-07';
const modes = [
  {
    title: 'Обзорные экскурсии',
    image: './img/cd73a34cf83ca6bbeb91f5a39f002d09.jpg',
    events: {
      '2024-07-02': '#',
      '2024-07-05': '#',
      '2024-07-07': '#',
      '2024-07-09': '#',
      '2024-07-12': '#',
      '2024-07-14': '#',
      '2024-07-16': '#',
      '2024-07-19': '#',
      '2024-07-21': '#',
      '2024-07-23': '#',
      '2024-07-26': '#',
      '2024-07-28': '#',
      '2024-07-30': '#',
    }
  },
  {
    title: 'Концерты',
    image: './img/03a43cdcea0377b70240ae14f0211a87.jpg',
    events: {
      '2024-07-03': '#',
      '2024-07-06': '#',
      '2024-07-10': '#',
      '2024-07-13': '#',
      '2024-07-17': '#',
      '2024-07-20': '#',
      '2024-07-24': '#',
      '2024-07-27': '#',
    }
  }
];

export default function HomePage() {

  return (
    <div className="page">
      <section className="slider">
        <img className="slider__main-image" src="./img/6775f20401b245a225846e0688dfe5f9.jpg" alt="Концертный зал" />
        <div className="slider__previews-wrapper">
          <ThumbSlider image={"./img/c499835e11691b8d4176b47885dfc6e6.jpg"} title={"Опера VS Оперетта"} />
          <ThumbSlider image={"./img/03a43cdcea0377b70240ae14f0211a87.jpg"} title={"Антонио Вивальди. Времена года"} />
        </div>
      </section>

      <section className="event-posters">
        <HeadingSection title={"Афиша"} />
        <div className="event-posters__inner-wrapper">
          <Poster date={"2023-06-03"} image={"./img/6775f20401b245a225846e0688dfe5f9.jpg"}
            title={"«ВЕК имени СИНАТРЫ»"} desc={"Посвящение Фрэнку Синатре."}
            options={{ style: "Джаз", time: "19:00", age: "6+" }} ticketLink={"#"} />
          <Poster date={"2023-06-30"} image={"./img/c499835e11691b8d4176b47885dfc6e6.jpg"}
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
              image={"./img/a715cf49422c05a0631a9892a39d9192.jpg"} />
            <News heading={"Переносы / Отмена мероприятий"}
              desc={"11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час."}
              image={"./img/e1b98a579d8667b7455bf2f8c8720a03.jpg"} />
          </div>
        </section>
        <Calendar month={month} modes={modes} />
      </div>

      <section className="announcement">
        <HeadingSection title={"Краткие анонсы"} />
        <div className="announcement__inner-wrapper">
          <AnnouncementItem date={"2023-06-03"} title={"«ВЕК имени СИНАТРЫ»"} />
          <AnnouncementItem date={"2023-06-12"} title={"Антонио Вивальди. Времена года"} />
          <AnnouncementItem date={"2023-06-30"} title={"Опера VS Оперетта"} />
          <AnnouncementItem date={"2023-06-03"} title={"«ВЕК имени СИНАТРЫ»"} />
        </div>
      </section>
    </div>
  );
}