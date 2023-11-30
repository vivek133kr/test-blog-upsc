import PropTypes from "prop-types";
import React from "react";
import { NamecandidateNameArrowsScore103 } from "./NamecandidateNameArrowsScore103";
import "./style.css";

export const QuestionDropboxFrame = ({
  question,
  icon = (
    <NamecandidateNameArrowsScore103
      style={{
        height: "77.66px",
        marginBottom: "-16.00px",
        marginRight: "-16.00px",
        marginTop: "-11.00px",
        minWidth: "82.66px",
        position: "relative",
      }}
    />
  ),
  text = "Question 2",
  style,
  vector = "vector-205.png",
}) => {
  return (
    <div className="question-dropbox" style={style}>
      <div className="frame">
        <div className="div">
          <div className="question">{text}</div>
          {question === "when-opened" && (
            <div className="group">
              <img className="vector" alt="Vector" src={vector} />
            </div>
          )}

          {question === "when-closed" && <>{icon}</>}
        </div>
      </div>
    </div>
  );
};

QuestionDropboxFrame.propTypes = {
  question: PropTypes.oneOf(["when-opened", "when-closed"]),
  text: PropTypes.string,
  vector: PropTypes.string,
};
