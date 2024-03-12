import { useState } from "react";
import "./App.css";
import questions from "./Constants/questions.json";
import Result from "./components/Result";

import Question from "./components/Question";

function App() {
  const [currentQuest, SetCurrQuest] = useState(0);
  const [userAns, SetUserAns] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    SetCurrQuest(currentQuest + 1);
    SetUserAns([...userAns, isCorrect]);
  };
  const resetQuiz = () => {
    SetCurrQuest(0);
    SetUserAns([]);
  };

  return (
    <>
      <div className="App">
        <h1>Quick Quiz</h1>
        {/* {Questions Componenets} */}
        {currentQuest < questions.length && (
          <Question
            question={questions[currentQuest]}
            onAnswerClick={handleNextQuestion}
          />
        )}
        {/* {Answer Componenets} */}
        {currentQuest === questions.length && (
          <Result
            userAns={userAns}
            questions={questions}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </>
  );
}

export default App;
