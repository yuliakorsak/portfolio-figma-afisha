export default function ThumbSlider({ image, title }) {
  return (
    <div className="thumb-slider">
      <img src={image} alt={title} className="thumb-slider__image" />
      <h4 className="thumb-slider__title">{title}</h4>
    </div>
  );
}