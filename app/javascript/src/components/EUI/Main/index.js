import React from "react";
import { questions } from "../constants";
import QuestionItem from "./QuestionItem";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="flex-grow">
      <div className="w-3/5 ml-32">
        <div className="h-32"></div>
        {questions.map((question, index) => {
          return (
            <QuestionItem key={index} qNo={index + 1} question={question} />
          );
        })}
        <div className="h-32"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
