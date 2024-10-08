import React from 'react';

const ScoreSummary = ({ score, totalQuestions }) => {
  return (
    <div className="p-6 bg-white rounded shadow-md w-full max-w-lg text-center">
      <h2 className="text-xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg mb-4">Your score: {score} out of {totalQuestions}</p>
      <button 
        onClick={() => window.location.reload()}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Retake Quiz
      </button>
    </div>
  );
};

export default ScoreSummary;
