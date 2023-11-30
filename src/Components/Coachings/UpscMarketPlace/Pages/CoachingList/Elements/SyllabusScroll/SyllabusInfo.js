import React from "react";
import styles from "../../../../../../../styles/coachings/coachingSyllabus/coachingSyllabus.module.css";
import StudyMatCard from "../StudyMaterial/StudyMatCard";
function SyllabusInfo({blogData}) {
  return (
    <div
      style={{
        paddingBottom: "50px",
        width: "100vw",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          marginLeft: "5%",

          overflow: "scroll",
        }}
      >
        <div
          style={{
            minWidth: "fit-content",

            display: "flex",
            gap: "10px",
            paddingRight: "20px",
          }}
        >
          {blogData.map((item, index) => (
            <div key={index}>
              <StudyMatCard name={item.name} url={item.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SyllabusInfo;
