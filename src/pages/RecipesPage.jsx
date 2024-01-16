import React, { useState } from 'react';
//import AddRecipeForm from '../components/AddRecipeForm';
import RecipesList from '../components/RecipesList';

export default function RecipesPage({ recipes }) {
  const [recipesState, setRecipesState] = useState(recipes);
  return (
    <div>
      {/* <AddRecipeForm setRecipes={setRecipesState} /> */}
      <RecipesList recipes={recipesState} setRecipe={setRecipesState} />
    </div>
  );
}
