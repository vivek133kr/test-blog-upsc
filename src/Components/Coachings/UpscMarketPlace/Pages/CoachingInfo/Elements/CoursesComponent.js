import React from 'react'

import styles from "../../../../../../styles/coachings/coachingCourses.module.css"
import CourseInfo from './CourseInfo'
import CoursesCarousel from './CoachingCourses/CoursesCarousel';

function CoursesComponent() {
  return (
    <div
      id="courses"
      style={{
        marginBottom: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F7F9FB",
      }}
    >
      <div
        style={{
          width: "90%",
        }}
        className="mt-10"
      >
        <p className={styles["courseTitle"]}>Courses Offered</p>

        <div className='mt-10'>
          <CoursesCarousel/>
        </div>
      </div>
    </div>
  );
}

export default CoursesComponent