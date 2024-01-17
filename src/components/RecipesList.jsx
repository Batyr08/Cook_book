import React from 'react';
import Card from './Card';

export default function RecipesList({ recipes, login }) {
  // console.log(login)
  return (
    <>
    {login ? 'залогинен' : 'нихуя' }
      <link rel="stylesheet" href="/css/recipelist.css" />
      <div className="recipes_list">
        {recipes.length !== 0 ? (
          recipes.map((recipe) => <Card key={recipe.id} recipe={recipe} />)
        ) : (
          <h1>Рецептов пока нет! Воспользуйтесь формой добавления!</h1>
        )}

      </div>
    </>
  );
}
