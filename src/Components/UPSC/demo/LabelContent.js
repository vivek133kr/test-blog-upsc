import React from "react";
import "@fontsource/roboto";
import styles from "./label.module.css";

const LabelContent = ({ explanation }) => {
  return (
    explanation && (
      <div className={styles["label-container"]}>
        <div className={styles["label-box"]}>
          <h3 className={styles["label-heading"]}>Explanation:</h3>
          <p className={styles["label-text"]}>{explanation}</p>
        </div>
      </div>
    )
  );
};

export default LabelContent;
