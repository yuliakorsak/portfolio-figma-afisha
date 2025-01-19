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
}