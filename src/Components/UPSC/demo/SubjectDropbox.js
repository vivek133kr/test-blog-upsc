import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./subject.module.css";
import Arrows from "./Arrows.js";
import QuestionDropbox from "./QuestionDropbox";
import "@fontsource/roboto";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans";


const SubjectDropbox = ({ data }) => {
  console.log("data", data);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style["subject-container"]}>
      <div
        className={`${style["subject-dropbox"]} ${
          isOpen ? style["closed"] : style["open"]
        }`}
      >
        <div className={style["subject-marks"]}>
          <div className={style["frame"]} onClick={handleToggle}>
            {isOpen ? (
              <Arrows subject="when-opened" />
            ) : (
              <Arrows subject="when-closed"/>
            )}
            <div className={style["subject"]}>
              {data.question__subject__name}
            </div>
          </div>
          <div className={style["element"]}>
            <span className={style["span"]}>
              {data.correct_answers}/{data.total_questions}
            </span>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={style["question-container"]}>
          {data.explanations.map((explanation, index) => (
            <QuestionDropbox
              key={index}
              index={index}
              explanation={explanation}
            />
          ))}
        </div>
      )}
    </div>
  );
};

SubjectDropbox.propTypes = {
  data: PropTypes.shape({
    question__subject__name: PropTypes.string.isRequired,
    total_questions: PropTypes.number.isRequired,
    correct_answers: PropTypes.number.isRequired,
    explanations: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        chosen_option: PropTypes.string,
        correct_option: PropTypes.string.isRequired,
        explanation: PropTypes.string.isRequired,
        question_year: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default SubjectDropbox;
