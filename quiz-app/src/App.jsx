import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

const App = () => {
  // State to store quiz configuration and score
  const [quizConfig, setQuizConfig] = useState(null);
  const [score, setScore] = useState(null);

  // Function to start the quiz and set quiz configuration
  const startQuiz = (category, difficulty, amount) => {
    setQuizConfig({ category, difficulty, amount });
    setScore(null); // Reset score when starting a new quiz
  };

  // Function to handle the end of the quiz and store the final score
  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setQuizConfig(null); // Clear quiz configuration when quiz ends
  };

  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route 
          path="/" 
          element={<Home startQuiz={startQuiz} />} 
        />

        {/* Quiz Page Route */}
        {quizConfig ? (
          <Route 
            path="/quiz" 
            element={
              <Quiz 
                category={quizConfig.category} 
                difficulty={quizConfig.difficulty} 
                amount={quizConfig.amount}
                onQuizEnd={handleQuizEnd}
              />
            } 
          />
        ) : (
          // If quizConfig is null, redirect to home
          <Route path="/quiz" element={<Navigate to="/" />} />
        )}
        
        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
