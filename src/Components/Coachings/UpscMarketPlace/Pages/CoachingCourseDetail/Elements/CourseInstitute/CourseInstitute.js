import React, { useEffect, useState } from 'react'

import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css";
import InstituteDetail from './InstituteDetail';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function CourseInstitute() {
  const [navscreenWidth, setNavScreenWidth] = useState(0);

  let [show, setShow] = useState(false);
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

  let handleShow = () => {
    setShow(!show)
  }
  return (
    <div
      id="institutes"
      style={{
        width: navscreenWidth < 1000 && "90%",
        padding: navscreenWidth < 1000 ? "28px 14px" : "38px 34px",
        marginTop: "30px",
      }}
      className={styles["course-overview-main"]}
    >
      <p className={styles["course-overview-mainP"]}>
        Institutes providing this courses
      </p>

      <div
        style={{
          display: "grid",
          marginTop: "20px",

          gridTemplateColumns:
            navscreenWidth > 800 ? "repeat(2, 1fr)" : "repeat(1,1fr)",
          justifyContent: "space-between",
          gridGap: "30px",
        }}
      >
        <InstituteDetail />
        <InstituteDetail />
       {navscreenWidth > 1000 && <>
          <InstituteDetail /> <InstituteDetail />
        </>}
        {show && (
          <>
            <InstituteDetail /> <InstituteDetail />
          </>
        )}
      </div>
      {navscreenWidth < 1000 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {navscreenWidth < 1000 && (
            <Button onClick={handleShow} className={styles["courseInsBtn"]}>
              {show ? `View Less ` : `View All `}{" "}
              {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default CourseInstitute