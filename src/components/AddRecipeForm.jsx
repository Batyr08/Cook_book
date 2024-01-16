import React from 'react';

export default function AddRecipeForm({ setRecipes }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
    });
    const data = await response.json();
    setRecipes((prev) => [...prev, data]);
  };
  return (
    <>
      <link rel="stylesheet" href="/css/addeditforms.css" />
      <div className="addformwrapper">
        <h3>Добавь рецепт!</h3>
        <form onSubmit={handleSubmit} className="addform">
          <input type="text" name="title" placeholder="Добовьте название" />
          <input type="text" name="img" placeholder="Добавьте картинку" />
          <input type="text" name="description" placeholder="Добавьте описание" />
          <input type="text" name="ingredients" placeholder="Добовьте ингридиенты" />
          <input type="number" name="time" placeholder="Добовьте время приготовления" />
          <button className="custom-btn btn-16">Добавить</button>
        </form>
      </div>

    </>
  );
}
