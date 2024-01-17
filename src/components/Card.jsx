import React from 'react';

export default function Card({ recipe, deleteHandler }) {
  return (
    <>
      <link rel="stylesheet" href="/css/card.css" />
      <div className="movie_card">
        <img style={{ height: '440px' }} src={recipe.img} alt="Картинка фильма" />
        <div className="card-body">
          <h2 className="card-title">
            {recipe.title}
          </h2>
        </div>
        <a href={`/recipes/${recipe.id}`} className="details">Подробнее → → →</a>
        <button className="btn-delete" id={recipe.id} onClick={()=>deleteHandler(recipe.id)}>
          Удалить
        </button>
      </div>
    </>

  );
}
