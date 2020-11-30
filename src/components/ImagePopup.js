function ImagePopup(props) {
  console.log(props.card.alt)
  return (
    <div className={props.isOpen ? `popup popup_${props.name} popup_opened` : `popup popup_${props.name}`}>
      <figure className="popup__container popup__container_show-image">
        <button className="popup__close popup__close_show-image" onClick={props.onClose} type="button" aria-label="Закрыть попап"></button>
        <img className="popup__image" alt={props.card.alt} src={props.card.src}/>
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </div>
  );
}
  
export default ImagePopup;