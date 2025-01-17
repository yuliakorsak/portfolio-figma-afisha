
import HeadingSection from '../ui/HeadingSection';
import Poster from '../ui/Poster';

export default function Events() {
  return (
    <main className="event-posters page">
      <HeadingSection title={"Афиша"} />
      <div className="event-posters__inner-wrapper">
        <Poster date={"2023-06-03"} image={"../img/6775f20401b245a225846e0688dfe5f9.jpg"}
          title={"«ВЕК имени СИНАТРЫ»"} desc={"Посвящение Фрэнку Синатре."}
          options={{ style: "Джаз", time: "19:00", age: "6+" }} ticketLink={"#"} />
        <Poster date={"2023-06-30"} image={"../img/c499835e11691b8d4176b47885dfc6e6.jpg"}
          title={"Опера VS Оперетта"} desc={"Санкт-Петербургский камерный оркестр Olympic Orchestra"}
          options={{ style: "Классика" }} ticketLink={"#"} />
        <Poster date={"2023-06-30"} image={"../img/c499835e11691b8d4176b47885dfc6e6.jpg"}
          title={"Опера VS Оперетта"} desc={"Санкт-Петербургский камерный оркестр Olympic Orchestra"}
          options={{ style: "Классика" }} ticketLink={"#"} />
        <Poster date={"2023-06-30"} image={"../img/c499835e11691b8d4176b47885dfc6e6.jpg"}
          title={"Опера VS Оперетта"} desc={"Санкт-Петербургский камерный оркестр Olympic Orchestra"}
          options={{ style: "Классика" }} ticketLink={"#"} />
      </div>
    </main>
  );
}