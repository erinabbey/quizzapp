import React from 'react';
import './index.css';

const StartQuiz = (props) => {
  console.log(props.score);
  return <div>Score: {props.score}</div>;
};

export default { StartQuiz };
