import React, { useEffect, useState } from 'react'
import styles from "../../../../../styles/coachings/courseDetail/courseDetailMain.module.css"
import CourseDetailFIrstPart from './Elements/CourseDetailFirst/CourseDetailFIrstPart';
import CourseDetailSecondPart from './Elements/CourseDetailSecond/CourseDetailSecondPart';
function CourseDetail() {
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: navscreenWidth < 1000 ? "100%":"90%",
          display: "flex",
          marginTop: navscreenWidth > 1000 && "30px",
          justifyContent:  navscreenWidth > 1000? "space-between":"center",
        }}
      >
        <CourseDetailFIrstPart />

        {navscreenWidth > 1000 && <CourseDetailSecondPart />}
      </div>
    </div>
  );
}

export default CourseDetail