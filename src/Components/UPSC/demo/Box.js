import React from "react";
import styles from "./box.module.css";
import PropTypes from "prop-types";
import "@fontsource/roboto";

const Box = ({ text, option, borderColor ,optionOrder }) => {
  const boxStyle = {
    borderColor: borderColor
  };
  return (
    <div className={styles["box-container"]}>
      <div className={styles["box-content"]}>
        <h1 className={styles["box-title"]}>{text}</h1>
        <div className={styles["answer-option"]} style={boxStyle} >
          <div className={styles["answer-circle"]}>
            <div className={styles["answer-letter"]}>{optionOrder}</div>
          </div>
          <div className={styles["answer-text"]}>{option}</div>
        </div>
      </div>
    </div>
  );
};

Box.propTypes = {
  text: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired
};


export default Box;
