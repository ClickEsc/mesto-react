function Main(props) {
  return (
    <main className="content">
      
      <section className="profile">
        <img className="profile__avatar" src="#" alt="Фотография пользователя" />
        <button className="profile__edit-button profile__edit-button_avatar" type="button" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__username"></h1>
          <button id="editProfilePopupOpenButton" className="profile__edit-button profile__edit-button_user-info" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__bio"></p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <ul className="photo-gallery"></ul>

      <template id="cardTemplate">
        <li className="photo-gallery__item">
          <img className="photo-gallery__image" />
          <h2 className="photo-gallery__heading"></h2>
          <div className="photo-gallery__like-container">
            <button className="photo-gallery__like-button" type="button"></button>
            <p className="photo-gallery__like-counter">0</p>
          </div>
          <button className="photo-gallery__remove-button" type="button"></button>
        </li>
      </template>

    </main>
  );
}

export default Main;