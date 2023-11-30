import PropTypes from "prop-types";
import React, { useState } from "react";
import Arrows from "../demo/Arrows.js";
import MyComponent from "./MyComponent.js";
import styles from "./questioncard.module.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/600.css";

const QuestionDropbox = ({ index, explanation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isCorrect =
    explanation.chosen_option_order === explanation.correct_option_order;

  console.log(explanation, " line 20");
  return (
    <div className={styles["question-dropbox"]}>
      <div className={styles["frame"]} onClick={handleToggle}>
        <div className={styles["frame-content"]}>
          <div
            className={
              explanation.chosen_option === explanation.correct_option &&
              explanation.chosen_option !== null
                ? styles["question_tick"]
                : styles["question_cross"]
            }
          >
            {explanation.chosen_option === explanation.correct_option &&
            explanation.chosen_option !== null
              ? "✅"
              : "❌"}
          </div>
          <div className={styles["question"]}>{explanation.question}</div>
        </div>
        <div className={styles["buttons"]}>
          {explanation.question_year && explanation.explanation && (
            <div className={styles["prelims"]}>{explanation.question_year}</div>
          )}
          <Arrows
            subject={isOpen ? "when-opened" : "when-closed"}
            arrowColor="#107BE5"
            circleBorderColor="#107BE5"
            circleFillColor={!isOpen ? "white" : "#F2F9FF"}
            size={40}
          />
        </div>
      </div>
      {isOpen && (
        <div className={styles["my-component-wrapper"]}>
          <MyComponent explanation={explanation} />
        </div>
      )}
    </div>
  );
};

QuestionDropbox.propTypes = {
  index: PropTypes.number.isRequired,
  explanation: PropTypes.shape({
    question: PropTypes.string.isRequired,
    chosen_option: PropTypes.string.isRequired,
    chosen_option_order: PropTypes.string.isRequired,
    correct_option_order: PropTypes.string.isRequired,
    correct_option: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    question_year: PropTypes.number.isRequired,
  }).isRequired,
};

export default QuestionDropbox;
