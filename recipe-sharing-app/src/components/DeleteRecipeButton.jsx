import React from 'react';
import { useRecipeStore } from '../components/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;