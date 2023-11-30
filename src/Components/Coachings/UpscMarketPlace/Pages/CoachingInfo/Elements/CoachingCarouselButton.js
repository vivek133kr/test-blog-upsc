import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";

function CoachingButton({prev, next,}) {
  return (
    <div
      className="mt-8 mb-8"
      style={{
        width: "100%",
     
     

        height: "50px",

        gap: "20px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <button className={"ch-list-btn"} onClick={prev}>
        <KeyboardArrowLeftIcon />
      </button>
      <button className={"ch-list-btn"} onClick={next}>
        <KeyboardArrowRightIcon />
      </button>
      <button className={"ch-list-btn"}>See All</button>
    </div>
  );
}

export default CoachingButton;
