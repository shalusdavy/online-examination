
import React, { useState } from 'react';

function QuestionsAndAns({question, options, onAnswerSelected}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
      const handleSubmit = () => {
        if (selectedOption !== null) {
          onAnswerSelected(selectedOption);
          setSelectedOption(null); 
        } else {
          alert('Please select an option.');
        }
      };
    

  return (
    <div>
         <div>
      <h3>{question}</h3>
      <form id="questionForm">
        {options.map((option, index) => (
          <div key={index}>
            <div className="options">
              <input
                type="radio"
                id={`option${index}`}
                name="answer"
                value={index}
                checked={selectedOption === `${index}`}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option${index}`}>{option}</label>
            </div>
          </div>
        ))}
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
        
        
        </div>
  )
}

export default QuestionsAndAns