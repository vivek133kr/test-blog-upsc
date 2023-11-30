import React, { useEffect, useState } from "react";

import styles from "../../../../../../../styles/coachings/coachingStudyMaterial.module.css";
import { Button } from "@mui/material";
import StudyMatCard from "./StudyMatCard";
import StudyMatCarousel from "./StudyMaterialCarousel";
import StudyMatMenu from "./StudyMatMenu";
import CoachingStudyMatButton from "../CoachingElementButton/CoachingTopDownButton";
import SyllabusInfo from "../SyllabusScroll/SyllabusInfo";

function StudyMaterial({blogData}) {
  const [navscreenWidth, setNavScreenWidth] = useState(0);


  console.log(blogData, " lin e15")
  useEffect(() => {
    // Update screenWidth with the actual window width after component has mounted
    setNavScreenWidth(window.innerWidth);

    const handleResize = () => {
      setNavScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after component mount

  const buttons = ["Notes & Blogs"];
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (button) => {
    if (button === clickedButton) {
      setClickedButton(null);
    } else {
      setClickedButton(button);
    }
  };

  console.log("line 40 ", blogData)
  return (
    <div
      id="item_3"
      style={{
        display: "flex",
        width: "100%",
        paddingBottom: navscreenWidth > 1000 &&"40px",
        backgroundColor: navscreenWidth < 1000 && "#E9EAF0",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "90%" }} className="mt-8 mb-4">
        <p className={styles["study-mat-p1"]}>Free Study Materials</p>

        <p className={styles["study-mat-p2"]}>
          Prepare yourself with structured study materials
        </p>

        {navscreenWidth > 800 && (
          <div className={styles["study-mat-btnDiv"]}>
            {buttons.map((button) => (
              <button
                key={button}
                className={`${styles["study-mat-btn"]} ${styles["study-mat-btn-clicked"]}`}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            ))}
          </div>
        )}

        {navscreenWidth > 800 && (
          <div
            style={{
              display: "flex",
              gap: 30,
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {blogData.map((item, index) => (
              <div key={index}>
                <StudyMatCard name={item.name} url={item.url} />{" "}
              </div>
            ))}
          </div>
        )}

        {/* {navscreenWidth < 800 && (
          <div className="mt-6 mb-0">
            <StudyMatMenu />
          </div>
        )} */}

        {/* {navscreenWidth > 800 && <CoachingStudyMatButton />} */}
      </div>
     {navscreenWidth < 800 &&  <div className={styles["study-mat-btnDiv"]}>
        {buttons.map((button) => (
          <button
            key={button}
            className={`${styles["study-mat-btn"]} ${styles["study-mat-btn-clicked"]}`}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>}
      {navscreenWidth < 800 && <SyllabusInfo blogData={blogData} />}

      {/* {navscreenWidth < 800 &&  <button
        style={{
          width: navscreenWidth < 800 && "90%",
          borderRadius: "4px",
          marginBottom:"30px",
          border: "1px solid var(--grey-grey-700, #4E5566)",
          background: "var(--grey-grey-50, #F5F7FA)",
        }}
        className={"ch-list-btn"}
      >
        See All
      </button>} */}
    </div>
  );
}

export default StudyMaterial;
