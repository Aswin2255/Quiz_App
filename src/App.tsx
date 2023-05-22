import React, { useEffect, useState } from "react";
import { QuestionState} from "./api/Api";
import QuestionCard from "./componets/QuestionCard";
import "./index.css";
import Navbar from "./componets/Navbar";
import Quizsetting from "./componets/Quizsetting";
import Loader from "./componets/Loader";
export type Answerobject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App(): React.ReactElement {
 
  const [loading, setloading] = useState<boolean>(false);
  const [questions, setquestions] = useState<QuestionState[]>([]);
 
  const [dark, setdark] = useState<boolean>(false);

  useEffect(() => {
    if (dark) {
      console.log(dark);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <div className="bg-white border-gray-200 dark:border-white dark:bg-gray-900 h-screen mb-1">
      <Navbar theme={dark} setdark={setdark} />
      {loading ? (
        <Loader />
      ) : questions.length ? (
        <>
          <div className="flex justify-center align-middle">
            <h1 className="items-center font-semibold text-2xl  dark:text-white">
              {questions[0].category}
            </h1>
          </div>
          <div className=" dark:bg-gray-900 mb-1">
            {questions.map((e, index) => {
              return (
                <QuestionCard
                  key={index}
                  quesition={e.question}
                  answer={e.answer}
                  correctanswer={e.correct_answer}
                />
              );
            })}
          </div>
        </>
      ) : (
        <Quizsetting
          loading={loading}
          setloading={setloading}
          setquestion={setquestions}
        />
      )}
    
    </div>
  );
}

export default App;
