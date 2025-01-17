import { useParams } from 'react-router-dom';
import HeadingSection from '../ui/HeadingSection';
import data from '../data.json';




export default function EventPage() {
  const { id } = useParams();
  const event = data.events.find(item => item.id.toString() === id);
  const info = [];
  event.info.forEach(block => {
    const contentList = block.content.split('\n').map(par => <p className='paragraph'>{par}</p>);
    info.push(
      <div className="content__inner-wrapper">
        {block.heading ? <h3 className="content__heading">{block.heading}</h3> : null}
        {contentList}
      </div>
    );
  });
  const secondaryImages = event.secondaryImg.map(img => (
    <a className="content__image-link" href={img} target="_blank">
      <img className="content__image" src={img} alt={event.title} />
    </a>
  ));


  return (
    <main className="event page">
      <HeadingSection title={event.title} />
      <div className="page__row-wrapper">
        <img className="event__main-image" src={event.mainImg} alt={event.title} />
        <section className="content">
          {info}
          <div className="content__inner-wrapper">
            <h3 className="content__heading">Стоимость билетов</h3>
            {event.price}
          </div>
          <a href={event.ticketlink} className="button">Заказать билет</a>
          <div className="content__image-wrapper">
            {secondaryImages}
          </div>
        </section>
      </div>
    </main>
  );


  /* return (
    <main className="event page">
      <HeadingSection title={"Антонио Вивальди. Времена года"} />
      <div className="page__row-wrapper">
        <img className="event__main-image" src="../img/c499835e11691b8d4176b47885dfc6e6.jpg" alt="Антонио Вивальди. Времена года" />
        <section className="content">
          <div className="content__inner-wrapper">
            <h3 className="content__heading">Санкт-Петербургский камерный оркестр Olympic Orchestra</h3>
            <p className="paragraph">Солистка – Надежда Троицкая (скрипка)</p>
            <p className="paragraph">Дирижёр – Илья Филькенштейн</p>
            <p className="paragraph">Художественный руководитель - Алексей Степанов</p>
          </div>
          <div className="content__inner-wrapper">
            <p className="paragraph">Музыка Вивальди на века!!! Изысканная роскошь, пышность и причудливая эстетика эпохи барокко в полной мере нашли воплощение в творчестве знаменитого венецианца Антонио Вивальди. Его называют «итальянским Бахом», и неспроста: за 63 года жизни музыкант написал около 800 произведений, включая оперы, хоровые произведения, более 500 концертов для различных инструментов и оркестра. Талантливый композитор-новатор, виртуозный скрипач, блестящий дирижер и педагог, он оставил после себя богатейшее творческое наследие.</p>
            <p className="paragraph">В первом отделении прозвучит знаменитый цикл «Времена года» Антонио Вивальди, второе же отделение будет посвящено мелодичным серенадам для струнного оркестра Эдуарда Элгара и Петра Ильича Чайковского.</p>
          </div>
          <div className="content__inner-wrapper">
            <h3 className="content__heading">Программа концерта</h3>
            <p className="paragraph">1 отделение</p>
            <p className="paragraph">А. Вивальди «Времена года»:</p>
            <p className="paragraph">Концерт № 1 ми мажор «Весна»</p>
            <p className="paragraph">Концерт № 2 соль минор «Лето»</p>
            <p className="paragraph">Концерт № 3 фа мажор «Осень»</p>
            <p className="paragraph">Концерт № 4 фа минор «Зима»</p>
            <p className="paragraph">2 отделение</p>
            <p className="paragraph">Э. Элгар «Серенада для струнного оркестра»</p>
            <p className="paragraph">П. Чайковский «Серенада для струнного оркестра»</p>
          </div>
          <div className="content__inner-wrapper">
            <h3 className="content__heading">Стоимость билетов</h3>
            700-1900 руб.
          </div>
          <a href="#" className="button">Заказать билет</a>
          <div className="content__image-wrapper">
            <a className="content__image-link" href="../img/c499835e11691b8d4176b47885dfc6e6.jpg" target="_blank">
              <img className="content__image" src="../img/c499835e11691b8d4176b47885dfc6e6.jpg" alt="Антонио Вивальди. Времена года" />
            </a>
            <a className="content__image-link" href="../img/c499835e11691b8d4176b47885dfc6e6.jpg" target="_blank">
              <img className="content__image" src="../img/c499835e11691b8d4176b47885dfc6e6.jpg" alt="Антонио Вивальди. Времена года" />
            </a>
          </div>
        </section>

      </div>
    </main>
  ); */
}