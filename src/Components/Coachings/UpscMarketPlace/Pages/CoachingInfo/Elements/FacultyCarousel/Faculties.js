import React, { useEffect, useState } from 'react'
import CourseImage from "../../../../Assets/teacher.png"
import styles from "../../../../../../../styles/coachings/facultyCourseCard.module.css"
import Image from 'next/image'
import { Button } from '@mui/material';
function Faculties({i}) {
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
    <div style={{}} key={i} className={styles["mainFacultyDiv"]}>
      <Image
        className={styles["faculty-Img"]}
        src={CourseImage}
        style={{

          width:navscreenWidth < 800 && "100%",
          height:navscreenWidth < 800 && "80px"
        }}
        alt="facultyImage"
      />

      <p className={styles["faculty-detail-p1"]}>Dr. Vikas Divyakirti</p>

      <div
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        <div className={styles["faculty-Info-div"]}>
          <p className={styles["faculty-detail-q"]}>Subject : </p>
          <p className={styles["faculty-detail-ans"]}>History & Geography</p>
        </div>
        <div
          className={styles["faculty-Info-div"]}
          style={{
            marginBottom: "0px",
          }}
        >
          <p className={styles["faculty-detail-q"]}>Experience : </p>
          <p className={styles["faculty-detail-ans"]}>10+ Years</p>
        </div>
      </div>
    </div>
  );
}

export default Faculties