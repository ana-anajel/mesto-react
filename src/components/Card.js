import React from 'react';
import cardDelete from '../images/deleteCard.png';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';

function Card(props) {
  const card = props.card;
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(card);
  }

  function handleLikeClick() {
    props.onCardLike(card);
  }

  function handleDeleteClick() {
    props.onCardDelete(card);
    console.log('del');
  }

  return (
    <div className="card-template card-template_type_default" >
      <article className="card" id={card._id}>
        <img className="card__image" alt={card.name} src={card.link} onClick={handleClick} />
        {
          isOwn && <img className="card__delete" onClick={handleDeleteClick} src={cardDelete} alt="Иконка урны, для удаления карточки" />
        }
        <div className="card__post">
          <h2 className="card__title">{card.name}</h2>
          <div className='card__like'>
            <button onClick={handleLikeClick} className={`card__like-icon ${isLiked && 'card__like-icon_active'}`} aria-label="Кнопка лайк"></button>
            <p className="card__like-num">{card.likes.length}</p>
          </div>
        </div>
      </article >
    </div >
  );
}

export default Card;