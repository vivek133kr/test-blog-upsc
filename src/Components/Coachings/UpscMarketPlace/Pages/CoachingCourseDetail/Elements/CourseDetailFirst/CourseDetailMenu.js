import React, { useEffect, useState } from "react";

import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css";

function CourseDetailMenu() {

  
  const [activeMenuItem, setActiveMenuItem] = useState("highlights"); // Default to 'faculty' or any other initial active item

  const handleMenuClick = (sectionId) => {
    setActiveMenuItem(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 230;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "highlights",
        "overview",
        "curriculum",
        "institutes",
      "course_faqs"
      ];

      // Determine which section is in the viewport
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveMenuItem(sectionId);
            break; // Break to avoid setting activeMenuItem multiple times
          }
        }
      }
    };

    // Add a scroll event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
        width: "100%",
        display: navscreenWidth < 1000 && "flex",
        justifyContent: navscreenWidth < 1000 && "center",
        backgroundColor: navscreenWidth < 1000 && "white",
      }}
    >
      <div
        style={{
          display: "flex",

          width: navscreenWidth < 1000 && "90%",

          backgroundColor: navscreenWidth < 1000 && "white",
          overflow: navscreenWidth < 1000 && "scroll",

          marginTop: navscreenWidth > 1000 && "30px",
          gap: 40,
        }}
        className={styles["curriculumDiv"]}
      >
        <style>
          {`
    ::-webkit-scrollbar {
      width: 0; /* Hide the horizontal scrollbar */
     
    }
    `}
        </style>
        <p
          onClick={() => handleMenuClick("highlights")}
          className={
            activeMenuItem === "highlights"
              ? styles.active
              : "course-detail-menu-p"
          }
        >
          Highlights
        </p>
        <p
          onClick={() => handleMenuClick("overview")}
          className={
            activeMenuItem === "overview"
              ? styles.active
              : "course-detail-menu-p"
          }
        >
          Overview
        </p>
        <p
          onClick={() => handleMenuClick("curriculum")}
          className={
            activeMenuItem === "curriculum"
              ? styles.active
              : "course-detail-menu-p"
          }
        >
          Curriculum
        </p>
        <p
          onClick={() => handleMenuClick("institutes")}
          className={
            activeMenuItem === "institutes"
              ? styles.active
              : "course-detail-menu-p"
          }
        >
          Institutes
        </p>
        <p
          onClick={() => handleMenuClick("course_faqs")}
          className={
            activeMenuItem === "course_faqs"
              ? styles.active
              : "course-detail-menu-p"
          }
        >
          FAQs
        </p>
      </div>
    </div>
  );
}

export default CourseDetailMenu;
