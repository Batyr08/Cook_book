import React from 'react';

export default function RecipePage({ recipe }) {
//   const deleteHandler = async (e) => {
//     e.prevent.Default()
//     const response = await fetch(`/api/recipes${recipe.id}`, {
//       method: 'DELETE'
//     });
//     const res = await JSON.stringify(response);
//     if (res.status) {
//       console.log('Deleted');
//     }
//   };
  return (
    <>
      <link rel="stylesheet" href="/css/card.css" />
      <div className="movie_card">
        <img style={{ height: '440px' }} src={recipe.img} alt="Картинка фильма" />
        <div className="card-body">
          <h2 className="card-title">{recipe.title}</h2>
          <p>{recipe.desciption}</p>
          <p>{recipe.ingredients}</p>
          <p>{recipe.time}</p>
        </div>
        <button className="btn-delete" id={recipe.id} onClick={deleteHandler}>
          Удалить
        </button>
        <button className="btn-edit" id={recipe.id}>
          Редактировать
        </button>
      </div>
    </>
  );
}
