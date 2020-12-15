import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardContext } from '../contexts/CardContext.js';

import { api } from '../utils/api.js';

import Card from './Card.js';

function Main(props) {

  const currentUserInfo = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    function handleInitialCards(res) {
      setCards(res);
    }

    api.getInitialCards()
      .then((res) => {
        const initialCards = res.map((item) => {
          return item
        });
        handleInitialCards(initialCards);
      })
      .catch(err => console.log(`Ошибка при запросе начальных карточек: ${err}`))
  }, []);

    const renderedCards = cards.map((card) => {

      // Обработка лайка
      function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUserInfo._id);
        
        api.changeLikeCardStatus(card, isLiked)
          .then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
          })
          .catch(err => console.log(`Ошибка при изменении статуса лайка: ${err}`))
      }

      // Обработка удаления карточки
      function handleCardDelete(card) {
        
        api.deleteCard(card)
          .then(() => {
            const newCards = cards.filter((c) => c._id !== card._id);
            setCards(newCards);
          })
          .catch(err => console.log(`Ошибка при удалении карточки: ${err}`))
      }

      return <CardContext.Provider value={card} key={card._id}>
        <Card onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardClick={props.onCardClick} name={card.name} link={card.link} likes={card.likes.length} alt={`Изображение под названием ${card.name}`}/>
      </CardContext.Provider>
    })
  
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={`${currentUserInfo.avatar}`} alt="Фотография пользователя" />
        <button className="profile__edit-button profile__edit-button_avatar" type="button" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__username">{`${currentUserInfo.name}`}</h1>
          <button id="editProfilePopupOpenButton" className="profile__edit-button profile__edit-button_user-info" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__bio">{`${currentUserInfo.about}`}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
   
      <ul className="photo-gallery">
        {renderedCards}
      </ul>
    </main>
  );
}

export default Main;