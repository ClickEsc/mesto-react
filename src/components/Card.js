function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  } 

  return (
    <li key={props._id} className="photo-gallery__item">
    <img className="photo-gallery__image" onClick={handleCardClick} alt={props.alt} src={props.link}/>
    <h2 className="photo-gallery__heading">{props.name}</h2>
    <div className="photo-gallery__like-container">
      <button className="photo-gallery__like-button" type="button"></button>
      <p className="photo-gallery__like-counter">{`${props.likes}`}</p>
    </div>
    <button className="photo-gallery__remove-button" type="button"></button>
  </li>
  );
}

export default Card;