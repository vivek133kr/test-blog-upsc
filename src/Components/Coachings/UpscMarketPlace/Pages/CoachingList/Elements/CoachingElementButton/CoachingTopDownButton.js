
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";

function CoachingStudyMatButton() {
  return (
    <div
      className="mt-12"
      style={{
        width: "100%",

        height: "50px",

        gap: "20px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <button className={"ch-list-btn"}>
        <KeyboardArrowUpIcon />
      </button>
      <button className={"ch-list-btn"}>
        <KeyboardArrowDownIcon />
      </button>
      <button className={"ch-list-btn"}>See All</button>
    </div>
  );
}

export default CoachingStudyMatButton;
