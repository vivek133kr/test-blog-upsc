import React, { useEffect, useState } from 'react'

import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css";
import CourseFaqElement from './CourseFaqElement';

function CourseFaq() {
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
  }, []); // Empty
  return (
    <div
      id="course_faqs"
      style={{
        width: navscreenWidth < 1000 ?"90%":"100%",
        padding: navscreenWidth < 1000 ? "28px 14px" : "38px 34px",

        marginTop: "30px",
        marginBottom: "30px",
      }}
      className={styles["course-overview-main"]}
    >
      <p className={styles["course-overview-mainP"]}>Faqs</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          gap: "30px",
        }}
      >
        <CourseFaqElement />
        <CourseFaqElement /> <CourseFaqElement /> <CourseFaqElement />{" "}
        <CourseFaqElement />
      </div>
    </div>
  );
}

export default CourseFaq