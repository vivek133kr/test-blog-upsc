import React, { useEffect, useState } from 'react'


import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css";

function CourseOverview() {
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
      id="overview"
      style={{
        width: navscreenWidth < 1000 && "90%",
        padding: navscreenWidth < 1000 ? "28px 14px" : "38px 34px",

        marginTop: "30px",
      }}
      className={styles["course-overview-main"]}
    >
      <p className={styles["course-overview-mainP"]}>Overview</p>
      <p className={styles["course-overview-p"]}>
        Welcome to the Civil Services Masterclass, a 12-week intensive program
        designed to prepare you for success in the UPSC examination. Led by Dr.
        Rajesh Gupta, a seasoned UPSC expert, this course is meticulously
        crafted to cover all aspects of the Civil Services syllabus.
      </p>
      <p className={styles["course-overview-pHead"]}>Key Features</p>

      <ul
        style={{
          listStyleType: "disc",
          marginLeft: "40px",
        }}
        className={styles["course-overview-p"]}
      >
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>

      <p className={styles["course-overview-pHead"]}>Key Features</p>

      <ul
        style={{
          listStyleType: "disc",
          marginLeft: "40px",
        }}
        className={styles["course-overview-p"]}
      >
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>

      <p className={styles["course-overview-pHead"]}>Who Should Enroll:</p>

      <p className={styles["course-overview-p"]}>
        This course is ideal for UPSC aspirants seeking a holistic and
        interactive learning experience. Whether you are a beginner or looking
        to enhance your preparation, the Civil Services Masterclass is tailored
        to meet your needs.
      </p>
    </div>
  );
}

export default CourseOverview