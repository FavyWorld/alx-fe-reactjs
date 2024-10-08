import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizStart from '../components/QuizStart';
import ScoreSummary from '../components/ScoreSummary';

const Home = ({ startQuiz }) => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [score, setScore] = useState(null);
  const [quizConfig, setQuizConfig] = useState(null);
  const navigate = useNavigate();

  // Function to handle starting the quiz
  const handleStartQuiz = (category, difficulty, amount) => {
    setQuizConfig({ category, difficulty, amount });
    setIsQuizStarted(true);
    setScore(null); // Reset score when starting new quiz
    startQuiz(category, difficulty, amount);
    navigate('/quiz');
  };

  // Function to handle quiz completion and displaying score summary
  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setIsQuizStarted(false);
    setQuizConfig(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Quiz App!</h1>
      {!isQuizStarted && (
        <QuizStart startQuiz={handleStartQuiz} />
      )}
      {score !== null && (
        <ScoreSummary score={score} totalQuestions={quizConfig ? quizConfig.amount : 10} />
      )}
    </div>
  );
};

export default Home;
