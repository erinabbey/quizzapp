/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import './App.css';
import { Questions, StartQuiz } from './components';

// let cate = 8;
// let mount = 5;
const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const [viewAnswer, setviewAnswer] = useState(false);

  // check answer
  const handleClick = (answer) => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    if (nextIndex >= questions.length) {
      setIsEnded(true);
    }
    // check the answer
    // show another question
    // change score if correct
  };

  const handleNewGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsEnded(false);
    window.location.reload();
    return (
      <Questions handleClick={handleClick} data={questions[currentIndex]} />
    );
  };
  const handleViewAnswer = () => {
    setviewAnswer(!viewAnswer);
    return (
      <Questions handleClick={handleClick} data={questions[currentIndex]} />
    );
  };
  // console.log(cate, mount);
  useEffect(() => {
    const cate = Math.floor(Math.random() * (27 - 8) + 8);
    const mount = Math.floor(Math.random() * (15 - 5) + 5);
    console.log(mount, cate);
    const API_URL = `https://opentdb.com/api.php?amount=${mount}&category=${cate}&type=multiple`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        console.log('questions', data);
      });
  }, []);
  // console.log(questions.length);

  return isEnded ? (
    <div className='scoreContainer'>
      <h3 className='score'>Score: {score}</h3>
      <button onClick={handleNewGame} className='startgame'>
        start new game
      </button>
      <button onClick={handleViewAnswer} className='startgame'>
        show answer
      </button>
    </div>
  ) : questions.length > 0 ? (
    <div>
      <Questions
        viewAnswer={viewAnswer}
        handleClick={handleClick}
        data={questions[currentIndex]}
      />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default App;
