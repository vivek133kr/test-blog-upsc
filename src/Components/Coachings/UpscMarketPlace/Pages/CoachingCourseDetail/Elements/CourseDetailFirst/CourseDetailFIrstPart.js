import React, { useEffect, useState } from 'react'


import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css"
import CourseDetailMenu from './CourseDetailMenu';
import CourseHighlights from './CourseHighlights';
import CourseOverview from '../CourseOverview/CourseOverview';
import CourseCurriculum from '../CourseCurriculum/CourseCurriculum';
import CourseInstitute from '../CourseInstitute/CourseInstitute';
import CourseFaq from '../CourseFaq/CourseFaq';


function CourseDetailFIrstPart() {
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
      style={{
        width: navscreenWidth > 1000 ? "70%" : "100%",
        display: navscreenWidth < 1000 && "flex",
        flexDirection: navscreenWidth < 1000 && "column",
        alignItems: navscreenWidth < 1000 && "center",
      }}
    >
      <div
        style={{
          backgroundColor: navscreenWidth < 1000 && "white",
          width: navscreenWidth < 1000 && "100%",
          display: navscreenWidth < 1000 && "flex",
          justifyContent: navscreenWidth < 1000 && "center",
        }}
      >
        <div style={{ width: navscreenWidth < 1000 && "90%", paddingTop:navscreenWidth < 1000 && "30px", paddingBottom:navscreenWidth < 1000 && "30px" }}>
          <p className={styles["course-detail-p1"]}>
            General Studies Foundation
          </p>
          <p className={styles["course-detail-p2"]}>
            Artificial Intelligence specialization will be providing 823,734 new
            jobs In AI by 2021 worldwide and CAGR of 53.25% AI market growth by
            2022
          </p>
          <p className={styles["course-detail-p3"]}>
            Duration :{" "}
            <span className={styles["course-detail-p4"]}>12 Weeks</span>
          </p>
          <p className={styles["course-detail-p3"]}>
            Certification :{" "}
            <span className={styles["course-detail-p4"]}>
              Certificate of Completion
            </span>
          </p>
        </div>
      </div>
      <CourseDetailMenu />
      <CourseHighlights />

      <CourseOverview />

      <CourseCurriculum />
      <CourseInstitute />

      <CourseFaq />
    </div>
  );
}

export default CourseDetailFIrstPart