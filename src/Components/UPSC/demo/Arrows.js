import React from "react";

const Arrows = ({
  subject,
  size = 50,  // Add default size
  arrowColor = subject === "when-closed" ? "#107BE5" : "#FFFFFF",
  circleBorderColor = subject === "when-closed" ? "#107BE5" : "#FFFFFF",
  circleFillColor = subject === "when-closed" ? "white" : "#107BE5",
  
}) => {

  const arrowDirection = subject === "when-closed" ? "M21 27L30 36L39 27" : "M21 33L30 24L39 33" ;
  console.log(size ,"size")

  return (
    <svg
      fill="none"
      height={size} // Change to variable size
      viewBox="0 0 60 60"
      width={size} // Change to variable size
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30"
        cy="30"
        fill={circleFillColor}
        stroke={circleBorderColor}
        strokeWidth="2"
        r={size/2} // Adjusted radius for variable size
      />
      <path
        d={arrowDirection}
        stroke={arrowColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Arrows;
