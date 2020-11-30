import React from 'react';

import '../index.css';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {

  // Хук для попапа редактирования аватара
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    document.querySelector('.profile__edit-button_avatar').addEventListener('click', () => {
      setEditAvatarPopupOpen(true);
    })
  }
  
  // Хук для попапа редактирования информации о пользователе
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    document.getElementById('editProfilePopupOpenButton').addEventListener('click', () => {
      setEditProfilePopupOpen(true);
    })
  }
  
  // Хук для попапа добавления карточки
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();

  function handleAddPlaceClick() {
    document.querySelector('.profile__add-button').addEventListener('click', () => {
      setAddPlacePopupOpen(true);
    })
  }
  
  // Функция закрытия всех попапов
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
          <Footer />

          {isEditAvatarPopupOpen ?
            <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="load-avatar" title="Обновить аватар" buttonTitle="Сохранить" children={
              <>
                <div className="popup__wrap">
                  <input required id="avatar-link-input" type="url" className="popup__input popup__avatar-link" name="avatar" placeholder="Ссылка на картинку" />
                  <span id="avatar-link-input-error" className="popup__error-text popup__error-text_avatar-link"></span>
                </div>
              </>
            }/>
          : ''}

          {isEditProfilePopupOpen ? 
            <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="edit-profile" title="Редактировать профиль" buttonTitle="Сохранить" children={
              <>
                <div className="popup__wrap">
                  <input required id="username-input" className="popup__input popup__username" name="name" placeholder="Имя" minLength="2" maxLength="40" />
                  <span id="username-input-error" className="popup__error-text popup__error-text_username"></span>
                </div>
                <div className="popup__wrap">
                  <input required id="bio-input" className="popup__input popup__bio" name="about" placeholder="О себе" minLength="2" maxLength="200" />
                  <span id="bio-input-error" className="popup__error-text popup__error-text_bio"></span>
                </div>
              </>
            }/>
          : ''}

          {isAddPlacePopupOpen ? 
            <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="add-card" title="Новое место" buttonTitle="Создать" children={
              <>
                <div className="popup__wrap">
                  <input required id="place-name-input" className="popup__input popup__place-name" name="name" placeholder="Название" minLength="1" maxLength="30" />
                  <span id="place-name-input-error" className="popup__error-text popup__error-text_place-name"></span>
                </div>
                <div className="popup__wrap">
                  <input required id="place-link-input" type="url" className="popup__input popup__place-link" name="link" placeholder="Ссылка на картинку" />
                  <span id="place-link-input-error" className="popup__error-text popup__error-text_place-link"></span>
                </div>
              </>
            }/>
          : ''}
          
          <PopupWithForm isOpen={false} onClose={closeAllPopups} name="confirm" title="Вы уверены?" buttonTitle="Да" />

          <ImagePopup isOpen={false} onClose={closeAllPopups} />

        </div>  
      </div>
    </div>
  );
}

export default App;