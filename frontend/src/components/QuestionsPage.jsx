import React, { useState, useEffect } from "react";
import axios from "axios";

import QuestionsAndAns from "./QuestionsAndAns";

function QuestionsPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:8089/question");
        setQuestions(response.data);
        
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelected = async (questionIndex, selectedOptionIndex) => {
    try {
      const response = await axios.post("http://localhost:8089/question", {
        questionIndex,
        selectedOptionIndex,
      });
      console.log("Answer submitted:", response.data);
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };
  return (
    <div>
      <div>
        <h1>question</h1>
        {questions.map((question, index) => (
          <QuestionsAndAns
            key={index}
            question={question.question}
            options={question.options}
            onAnswerSelected={(selectedOptionIndex) =>
              handleAnswerSelected(index, selectedOptionIndex)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionsPage;
