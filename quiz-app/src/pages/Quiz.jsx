import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuizQuestions } from '../services/triviaService';
import QuestionCard from '../components/QuestionCard';

const Quiz = ({ category, difficulty, amount, onQuizEnd }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await fetchQuizQuestions(amount, category, difficulty);
      setQuestions(data);
    };
    loadQuestions();
  }, [category, difficulty, amount]);

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true); // Set quiz as finished
    }
  };

  // When the quiz is finished, call the callback function and navigate
  useEffect(() => {
    if (quizFinished) {
      onQuizEnd(score);
      navigate('/'); // Navigate to home after quiz end
    }
  }, [quizFinished, score, navigate, onQuizEnd]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {questions.length > 0 ? (
        <QuestionCard 
          question={questions[currentQuestionIndex]}
          onAnswerSubmit={handleAnswerSubmit}
        />
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
