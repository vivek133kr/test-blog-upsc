import React, { useEffect, useState } from "react";

import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function CurriculumElement() {
  const [navscreenWidth, setNavScreenWidth] = useState(0);

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
  }, []); // Empt
  let [open, setOpen] = useState(false);

  const handleopen = () => {
    setOpen(!open);
  };
  return (
    <div
      style={{
        padding: "18px 30px",
        border: "1px solid var(--grey-grey-200, #CED1D9)",

        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleopen}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginRight: "30px",
            }}
          >
            {open ? <RemoveIcon /> : <AddIcon />}
          </div>
          <p className={styles["course-curriculum-p1"]}>
            Week 1-2: Foundation and Basics
          </p>
        </div>
        {navscreenWidth > 1000 && (
          <div>
            <p className={styles["course-curriculum-p2"]}>3 Topics</p>
          </div>
        )}
      </div>

      {open && (
        <div
          style={{
            width: "95%",
            marginTop: navscreenWidth < 1000 ? "10px":"20px",
          
          }}
        >
          {navscreenWidth < 1000 && (
            <div style={{
              marginBottom:navscreenWidth < 1000 && "10px"
            }}>
              <p className={styles["course-curriculum-p2"]}>3 Topics</p>
            </div>
          )}
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside", // Add this line to keep bullets inside the <ul>
            }}
            className={styles["course-curriculum-pAns"]}
          >
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CurriculumElement;
