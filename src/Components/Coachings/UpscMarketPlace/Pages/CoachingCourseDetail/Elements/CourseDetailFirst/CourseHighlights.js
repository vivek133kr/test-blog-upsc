import React, { useEffect, useState } from 'react'

import CheckIcon from "@mui/icons-material/Check";
import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css";

function CourseHighlights() {
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
  }, []); // Empty dependency array means this effect runs only once after component mount

  return (
    <div
      id="highlights"
      style={{
        width: navscreenWidth < 1000 && "90%",
        padding: navscreenWidth < 1000 ? "28px 14px" : "38px 34px",

        marginTop: "30px",
      }}
      className={styles["courseHightlightsMainDiv"]}
    >
      <p className={styles["courseHighlightsP"]}>Highlights</p>

      <p className={styles["courseHighlightSubP"]}>
        <span
          style={{
            color: "#23BD33",
          }}
        >
          <CheckIcon />
        </span>{" "}
        Earn a certificate and avail a 90 Days of access to this free course by
        Simplilearn
      </p>

      <p className={styles["courseHighlightSubP"]}>
        <span
          style={{
            color: "#23BD33",
          }}
        >
          <CheckIcon />
        </span>{" "}
        Earn a certificate and avail a 90 Days of access to this free course by
        Simplilearn
      </p>
    </div>
  );
}

export default CourseHighlights