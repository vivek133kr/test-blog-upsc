import React from "react";
import Box from "./Box";
import QuestionTitle from "./QuestionTitle";
import LabelContent from "./LabelContent";
import PropTypes from "prop-types";

const MyComponent = ({ explanation }) => {

  return (
    <div className="my-component">
      <QuestionTitle question={explanation.question} />
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        {explanation.chosen_option && (
          <Box
            text="Your Answer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            option={explanation.chosen_option}
            borderColor="#107BE5" // Specify the border color for Box 1,
            optionOrder={explanation.chosen_option_order}
          />
        )}

        <Box
          text="Correct Answer"
          option={explanation.correct_option}
          borderColor="#27B446" // Specify the border color for Box 2
          optionOrder={explanation.correct_option_order}
        />
      </div>
      <LabelContent explanation={explanation.explanation} />
    </div>
  );
};

export default MyComponent;
