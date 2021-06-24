/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/Questions";

const API_URL =
  "https://opentdb.com/api.php?amount=20&category=18&type=multiple";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        console.log("questions", data);
      });
  }, []);
  console.log(questions.length);
  return questions.length > 0 ? (
    <Question questions={questions} />
  ) : (
    <p>Loading...</p>
  );
};

export default App;
