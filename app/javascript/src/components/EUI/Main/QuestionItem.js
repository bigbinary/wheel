import React from "react";
import * as answers from "./Answers";

const QuestionItem = ({ qNo, question }) => {
  const AnswerItem = answers[question.type];
  return (
    <div className="w-full mb-16">
      <div className="flex flex-row items-center justify-start mb-3">
        <span className="inline-flex mr-3 text-base font-light text-gray-500 mb-0.5">
          0{qNo}
        </span>
        <h1 className="text-xl text-gray-600">{question.title}</h1>
      </div>
      <div className="pl-9">
        <AnswerItem />
      </div>
    </div>
  );
};

export default QuestionItem;
