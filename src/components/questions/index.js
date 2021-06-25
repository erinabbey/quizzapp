/* eslint-disable camelcase */
import React from 'react';
// import Answer from './Answers';

const Answer = ({ answer, className }) => {
  return <button className={`answerbtn ${className}`}>{answer}</button>;
};
const randomAnswer = (ans) => {
  for (let i = 0; i < 100; i++) {
    const ans1 = Math.floor(Math.random() * ans.length);
    const ans2 = Math.floor(Math.random() * ans.length);
  }
};
const Questions = ({
  viewAnswer,
  handleClick,
  data: { question, correct_answer, incorrect_answers }
}) => {
  const answers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <div className='container'>
      <div className='questions'>
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className='answersbtn'>
        {answers.map((answer, key) => (
          <button
            key={key}
            className='answerbtn'
            onClick={() => handleClick(answer)}
          >
            {answer}
          </button>
        ))}
        {/* <Answer
          className={correct_answer === answers[0] ? 'correctAns' : ''}
          onClick={() => handleClick(answers[0])}
          answer={answers[0]}
        />
        <Answer
          className={correct_answer === answers[1] ? 'correctAns' : ''}
          onClick={() => handleClick(answers[1])}
          answer={answers[1]}
        />
        <Answer
          className={correct_answer === answers[2] ? 'correctAns' : ''}
          onClick={() => handleClick(answers[2])}
          answer={answers[2]}
        />
        <Answer
          className={correct_answer === answers[3] ? 'correctAns' : ''}
          onClick={() => handleClick(answers[3])}
          answer={answers[3]}
        /> */}
        {/* <div className='nextquestion'>
          <p>next question</p>
        </div> */}
      </div>

      {/* <div className='nextquestion'>
        <p>next question</p>
      </div> */}
    </div>
  );
};
export default Questions;
