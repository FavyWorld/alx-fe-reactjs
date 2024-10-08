import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../services/triviaService';

const QuizStart = ({ startQuiz }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [amount, setAmount] = useState(10);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
      setSelectedCategory(data[0]?.id || ''); // Set the first category by default
    };
    loadCategories();
  }, []);

  const handleStartQuiz = () => {
    if (selectedCategory && amount > 0) {
      startQuiz(selectedCategory, difficulty, amount);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md w-full max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Start a New Quiz</h1>
      <div className="mb-4">
        <label className="block mb-2">Category:</label>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Difficulty:</label>
        <select 
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Number of Questions:</label>
        <input 
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded"
          min="1"
          max="50"
        />
      </div>
      <button 
        onClick={handleStartQuiz}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizStart;
