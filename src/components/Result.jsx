import React from "react";

const Result = ({ userAns, questions, resetQuiz =()=>{}}) => {
    const correctAns = userAns.filter((answer)=>answer).length;

  return(
     <div className="results">
    <h2>Results</h2>
    <p>You answered 3 out of {questions.length} questions correct </p>
    <button onClick={resetQuiz}>Click here to restart</button>
  </div>
  );
};

export default Result;
