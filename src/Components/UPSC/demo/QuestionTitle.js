import React from "react";
import styles from "./Title.module.css";
import "@fontsource/roboto";
import "@fontsource/roboto/700.css";

const QuestionTitle = ({ question }) => {
  return (
    <div className={styles["title"]}>
      <div className={styles["consider-the-wrapper"]}>
      <p className={styles["consider-the"]}>{question}</p>
      </div>
    </div>
  );
};

export default QuestionTitle;
