import React, { useState, useEffect } from "react";
import "./quiz.css"; // Make sure to import the CSS file
import ProgressBar from "./ProgressBar";

const Quiz = ({ subject, questions, timeLimit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, submitted]);

  const handleOptionClick = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleFinish = () => {
    const correctAnswers = questions.reduce((acc, question, index) => {
      if (answers[index] === question.answer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const attemptedQuestions = answers.filter((answer) => answer !== "").length;
    const score =
      attemptedQuestions > 0 ? (correctAnswers / attemptedQuestions) * 100 : 0;

    setWrongAnswers(
      questions.map((question, index) => ({
        question: question.question,
        explanation: question.explanation,
        correctAnswer: question.answer,
        userAnswer: answers[index],
        isCorrect: answers[index] === question.answer,
      }))
    );

    setScore(score);
    setSubmitted(true);
  };

  const handleSubmit = () => {
    const wrongs = questions.reduce((acc, question, index) => {
      if (answers[index] && answers[index] !== question.answer) {
        acc.push({
          question: question.question,
          selectedOption: answers[index],
          correctAnswer: question.answer,
          explanation: question.explanation,
        });
      }
      return acc;
    }, []);

    const finalScore =
      ((questions.length - wrongs.length) / questions.length) * 100;

    // Store score in local storage
    const scores = JSON.parse(localStorage.getItem("quizScores")) || {};
    scores[subject] = finalScore;
    localStorage.setItem("quizScores", JSON.stringify(scores));

    setScore(finalScore);
    setWrongAnswers(wrongs);
    setSubmitted(true);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">{subject} Quiz</h1>
      <div className="timer">
        Time left: {Math.floor(timeLeft / 60)}:
        {("0" + (timeLeft % 60)).slice(-2)}
      </div>
      <ProgressBar progress={progress} />
      {!submitted ? (
        <div className="question-container">
          <div className="question-header">
            <span className="question-number">
              Question {currentQuestionIndex + 1}
            </span>
            <h3 className="question-text">{currentQuestion.question}</h3>
          </div>
          <div className="options-container">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={`option-button ${
                  answers[currentQuestionIndex] === option ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-buttons">
            {currentQuestionIndex < questions.length - 1 ? (
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="finish-button" onClick={handleFinish}>
                Submit
              </button>
            )}
            <button className="finish-button" onClick={handleFinish}>
              Finish
            </button>
          </div>
        </div>
      ) : (
        <div className="results-container">
          <h2 className="results-title">Quiz Results</h2>
          <p className="score">
            <strong>Score: </strong> {score.toFixed(2)}%
          </p>
          {questions.map((question, index) => {
            if (!answers[index]) return null; // Skip unattempted questions
            const isCorrect = answers[index] === question.answer;
            return (
              <div key={index} className="result-question-container">
                <div className="question-header">
                  <span className="question-number">Question {index + 1}</span>
                  <h3 className="question-text">{question.question}</h3>
                </div>
                <div className="options-container">
                  {question.options.map((option) => {
                    const isCorrectOption = option === question.answer;
                    const isSelected = answers[index] === option;
                    let optionClass = "";
                    if (isSelected) {
                      optionClass = isCorrectOption
                        ? "correct-option"
                        : "incorrect-option";
                    }
                    return (
                      <div
                        key={option}
                        className={`option-result ${optionClass}`}
                      >
                        <span className="option-text">
                          {option}
                          {isCorrectOption && (
                            <span className="correct-note">
                              {" "}
                              (Correct Answer)
                            </span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="explanation-text">
                  Explanation : {question.explanation}
                </p>
                <hr className="separator-line" />
              </div>
            );
          })}
          <button
            className="retry-button"
            onClick={() => {
              setSubmitted(false);
              setAnswers(Array(questions.length).fill(""));
              setCurrentQuestionIndex(0);
              setWrongAnswers([]);
              setTimeLeft(timeLimit);
              setScore(null); // Reset score
            }}
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
