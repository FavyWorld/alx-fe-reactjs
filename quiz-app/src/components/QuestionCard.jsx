import React, { useState } from 'react';

const QuestionCard = ({ question, onAnswerSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSubmit = () => {
    if (selectedAnswer) {
      const isCorrect = selectedAnswer === question.correct_answer;
      onAnswerSubmit(isCorrect);
      setSelectedAnswer('');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md w-full max-w-lg">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      <div className="mb-4">
        {question.incorrect_answers.concat(question.correct_answer).sort().map((answer, index) => (
          <button 
            key={index} 
            onClick={() => setSelectedAnswer(answer)}
            className={`block w-full text-left p-2 mt-2 ${selectedAnswer === answer ? 'bg-blue-200' : 'bg-gray-100'} hover:bg-blue-300 rounded`}
          >
            {answer}
          </button>
        ))}
      </div>
      <button 
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white py-2 rounded"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default QuestionCard;
