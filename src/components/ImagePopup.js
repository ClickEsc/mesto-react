function ImagePopup() {
  return (
    <div className="popup popup_show-image">
      <figure className="popup__container popup__container_show-image">
        <button className="popup__close popup__close_show-image" type="button" aria-label="Закрыть попап"></button>
        <img className="popup__image" />
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </div>
  );
}
  
export default ImagePopup;