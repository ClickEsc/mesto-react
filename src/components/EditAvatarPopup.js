import React from 'react';

import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function EditAvatarPopup(props) {
  
  const currentUserInfo = React.useContext(CurrentUserContext);

  const [avatar, setAvatar] = React.useState('');

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar
    });
  }

  React.useEffect(() => {
    setAvatar(currentUserInfo.avatar);
  }, []);

  return (
    <PopupWithForm isOpen={props.isOpen} onSubmit={handleSubmit} onClose={props.onClose} name="load-avatar" title="Обновить аватар" buttonTitle="Сохранить" children={
      <>
        <div className="popup__wrap">
          <input required id="avatar-link-input" type="url" value={avatar} onChange={handleAvatarChange} className="popup__input popup__avatar-link" name="avatar" placeholder="Ссылка на картинку" />
          <span id="avatar-link-input-error" className="popup__error-text popup__error-text_avatar-link"></span>
        </div>
      </>
    }/>
  );
}

export default EditAvatarPopup;