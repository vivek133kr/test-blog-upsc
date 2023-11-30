import React from 'react'
import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css";
import Image from 'next/image';
import CoachingImage from "../../../../Assets/coachingImage.png"
import { Button } from '@mui/material';
function CourseDetailSecondPart() {
  return (
    <div
      style={{
        width: "28%",
        height: "fit-content",
      }}
      className={styles["courseSecondPart"]}
    >
      <Image src={CoachingImage} alt="coachingImage" />

      <div>
        <p className={styles["courseInfoTitle"]}>Optional Subject Coaching</p>
        <div className={styles["courseInfoDiv"]}>
          <div className={styles["courseSecondChildDiv"]}>
            <p className={styles["courseSecondHead"]}>Duration </p>
            <p className={styles["courseSecondAns"]}>3 Years</p>
          </div>
          <div className={styles["courseSecondChildDiv"]}>
            <p className={styles["courseSecondHead"]}>Total Avg. Fees </p>
            <p className={styles["courseSecondAns"]}>3 Years</p>
          </div>
          <div className={styles["courseSecondChildDiv"]}>
            <p className={styles["courseSecondHead"]}>Colleges </p>
            <p className={styles["courseSecondAns"]}>3 Years</p>
          </div>
        </div>

        <button
          style={{
            marginTop: "30px",
            
          }}
          className={styles["courseInfoSecPartBtn"]}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default CourseDetailSecondPart