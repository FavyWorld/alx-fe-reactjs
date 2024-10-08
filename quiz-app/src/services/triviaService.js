import axios from 'axios';

const API_URL = 'https://opentdb.com';

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/api_category.php`);
  return response.data.trivia_categories;
};

export const fetchQuizQuestions = async (amount, category, difficulty) => {
  const response = await axios.get(`${API_URL}/api.php`, {
    params: {
      amount,
      category,
      difficulty,
      type: 'multiple',
    },
  });
  return response.data.results;
};
