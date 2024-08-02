// src/LandingPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { quizData } from "./quizData";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStartQuiz = (subject) => {
    setLoading(true); // Set loading state to true
    setTimeout(() => {
      navigate(`/quiz/${subject}`);
      setLoading(false); // Reset loading state after navigation
    }, 2000);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Quiz App</h1>
      <h2>Select a Subject</h2>
      {loading ? (
        <div className="loading-container">
          <BeatLoader color="#ffffff" loading={loading} size={30} />
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className="card-container">
          {Object.keys(quizData).map((subject) => (
            <div
              key={subject}
              className="card"
              onClick={() => handleStartQuiz(subject)}
            >
              <h3>{subject}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
