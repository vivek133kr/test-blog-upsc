import React, { useEffect, useState } from 'react'
import CourseImage from "../../../../Assets/courses.png"
import styles from "../../../../../../../styles/coachings/coachingCourseCard.module.css"
import Image from 'next/image'
import { Button } from '@mui/material';
function Courses({i}) {
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
    <div key={i} className={styles["mainCourseDiv"]}>
      <Image
        className={styles["course-Img"]}
        src={CourseImage}
        style={{
          height:navscreenWidth < 800 && "60px"
        }}
        alt="courseImage"
      />

      <p className={styles["course-detail-p1"]}>UPSC Preliminary Examination</p>

      <div
        style={{
          width: "100%",
          marginTop: "10px",
        }}
      >
        <div className={styles["course-Info-div"]}>
          <p className={styles["course-detail-q"]}>Duration : </p>
          <p className={styles["course-detail-ans"]}> 3 Years</p>
        </div>
        <div className={styles["course-Info-div"]}>
          <p className={styles["course-detail-q"]}>Total Avg. Fees : </p>
          <p className={styles["course-detail-ans"]}>41.59 K</p>
        </div>
        <div className={styles["course-Info-div"]}>
          <p className={styles["course-detail-q"]}>College : </p>
          <p className={styles["course-detail-ans"]}> 128</p>
        </div>
      </div>

      <button
        className={styles["course-detail-btn"]}
        style={{
          width: "100%",
          marginTop: "10px",
          paddingTop:"10px",
          paddingBottom:"10px",
          borderRadius: "4px",
          border: "1px solid var(--primary-primary-blue-700, #2385C7)",
          background: "var(--primary-blue-800, #2075B3)",
        }}
      >
        Explore
      </button>
    </div>
  );
}

export default Courses