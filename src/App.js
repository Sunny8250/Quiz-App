// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Quiz from "./Quiz";
import { quizData } from "./quizData";
import { useParams } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz/:subject" element={<QuizWrapper />} />
      </Routes>
    </Router>
  );
};

// Updated QuizWrapper to use useParams to get subject
const QuizWrapper = () => {
  const { subject } = useParams(); // Using useParams to access the subject
  const quizInfo = quizData[subject];

  if (!quizInfo) {
    return <h2>Subject not found.</h2>; // Handle the case where subject does not exist
  }

  const { questions, timeLimit } = quizInfo; // Destructure to get questions and timeLimit

  return <Quiz subject={subject} questions={questions} timeLimit={timeLimit} />;
};

export default App;
