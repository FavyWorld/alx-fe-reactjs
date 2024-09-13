import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import data from '../data.json'; // Import mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock data
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`} // Use Link to navigate to the recipe detail page
              className="mt-4 inline-block text-blue-500 hover:text-blue-800"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
