import React, { useEffect, useState } from "react";

import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css";
import CurriculumElement from "./CurriculumElement";

function CourseCurriculum() {
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
      id="curriculum"
      style={{
        width: navscreenWidth < 1000 && "90%",
        padding: navscreenWidth < 1000 ? "28px 14px" : "38px 34px",

        marginTop: "30px",
      }}
      className={styles["course-overview-main"]}
    >
      <p className={styles["course-overview-mainP"]}>Curriculum</p>
      <CurriculumElement />
      <CurriculumElement /> <CurriculumElement /> <CurriculumElement />
    </div>
  );
}

export default CourseCurriculum;
