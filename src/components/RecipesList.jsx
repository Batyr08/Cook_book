import React from 'react';
import Card from './Card';

export default function RecipesList({ recipes, setRecipe }) {
  const deleteHandler = async(id)=>{
    const response = await fetch(`/api/recipes/${id}`,{
      method: 'DELETE'
    });
    if (response.ok) {
      setRecipe(recipes.filter((recipe)=>recipe.id !== id))
    }
  }
  return (
    <>
      <link rel="stylesheet" href="/css/recipelist.css" />
      <div className="recipes_list">
        {recipes.length !== 0 ? (
          recipes.map((recipe) => <Card key={recipe.id} recipe={recipe} deleteHandler = {deleteHandler} />)
        ) : (
          <h1>Рецептов пока нет! Воспользуйтесь формой добавления!</h1>
        )}

      </div>
    </>
  );
}
