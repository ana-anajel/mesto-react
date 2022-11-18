import React, { useState, useEffect, useContext } from 'react';
import editAvatar from '../images/editAvatar.png';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ cards, ...props }) {
  const currentUser = useContext(CurrentUserContext);

  const cardsElements = cards.map((card) => (
    <Card
      key={card._id}
      card={card}
      onCardDelete={props.onCardDelete}
      onCardLike={props.onCardLike}
      onCardClick={props.onCardClick}
    />))

  return (
    <main className="content">
      <section className="profile">

        <div className="profile__avatar-container">
          <div className="profile__avatar-icon">
            <img className="profile__avatar-edit" src={editAvatar} alt="Иконка карандаш"
              onClick={props.onEditAvatar}
            />
          </div>
          <img className="profile__photo" alt="Фото профиля"
            src={currentUser.avatar}
          />
        </div>

        <div className="profile__text-box">
          <h1 className="profile__title" aria-label="Имя профиля">{currentUser.name}</h1>
          <button className="profile__edit" aria-label="Кнопка редактировать информацию о себе"
            onClick={props.onEditProfile}

          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>

        <button className="profile__button-add" aria-label="Кнопка добавить пост"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="cards" aria-label="Блок с карточками мест">
        {cardsElements}
      </section>
    </main>
  );
}

export default Main;