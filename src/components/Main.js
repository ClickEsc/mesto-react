import React from 'react';

import { api } from '../utils/api.js';

import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState();

  const [userDescription, setUserDescription] = React.useState();

  const [userAvatar, setUserAvatar] = React.useState();

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    function handleUserInfo(res) {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    }

    api.getUserInfo()
      .then((res) => {
        handleUserInfo(res);
      })
      .catch(err => console.log(`Ошибка при обращении за информацией о пользователе: ${err}`))
  }, []);

  React.useEffect(() => {
    function handleInitialCards(res) {
      setCards(res);
    }

    api.getInitialCards()
      .then((res) => {
        const initialCards = res.map((item) => {
          return {
          _id: item._id,
          link: item.link,
          alt: `Изображение под названием ${item.name}`,
          name: item.name,
          likes: item.likes.length
          }
        });
        handleInitialCards(initialCards);
      })
      .catch(err => console.log(`Ошибка при запросе начальных карточек: ${err}`))
  }, []);

    const renderedCards = cards.map((card) => {
      return <Card onCardClick={props.onCardClick} key={card._id} name={card.name} link={card.link} likes={card.likes} alt={`Изображение под названием ${card.name}`}/>
    })
  
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={`${userAvatar}`} alt="Фотография пользователя" />
        <button className="profile__edit-button profile__edit-button_avatar" type="button" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__username">{`${userName}`}</h1>
          <button id="editProfilePopupOpenButton" className="profile__edit-button profile__edit-button_user-info" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__bio">{`${userDescription}`}</p>
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