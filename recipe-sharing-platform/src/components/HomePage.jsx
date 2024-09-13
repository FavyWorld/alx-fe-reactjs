import React, { useEffect, useState } from 'react';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Fetch the data from data.json when the component mounts
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching the recipe data:', error));
  }, []);

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-3xl font-bold text-center mb-10">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <a href={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-4 block">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
