import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required';
    if (!ingredients || ingredients.split(',').length < 2)
      newErrors.ingredients = 'Please provide at least two ingredients';
    if (!steps) newErrors.steps = 'Preparation steps are required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Clear errors and submit the form (for now just log the data)
    console.log({ title, ingredients, steps });
    setErrors({});
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="max-w-lg md:max-w-2xl mx-auto my-8 p-6 md:p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Submit a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            className={`mt-2 p-2 w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Ingredients (comma-separated)</label>
          <textarea
            className={`mt-2 p-2 w-full border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            className={`mt-2 p-2 w-full border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300 md:py-3 md:px-6"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
