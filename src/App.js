/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import './App.css';
import { Questions, StartQuiz, Timer } from './components';

// let cate = 8;
// let mount = 5;
const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const [viewAnswer, setviewAnswer] = useState(false);
  const [seconds, setSeconds] = useState(3);

  const handleTimer = () => {
    let intervalID = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(intervalID);
        setSeconds(3);
        setCurrentIndex(currentIndex + 1);
      }
    }, 1000);
  };
  // check answer
  const handleClick = (answer) => {
    // check the answer
    // show another question
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    // change score if correct
    if (nextIndex >= questions.length) {
      setIsEnded(true);
    }
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
    // handleTimer();
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
      <Timer />
      {/* {seconds} */}
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
