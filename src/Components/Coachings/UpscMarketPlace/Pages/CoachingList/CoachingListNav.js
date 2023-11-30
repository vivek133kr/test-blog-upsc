import React, { useEffect, useState } from "react";

import styles from "../../../../../styles/coachings/coachingListNav.module.css";
function CoachingListNav() {
  const [activeMenuItem, setActiveMenuItem] = useState("item_1"); // Default to 'faculty' or any other initial active item

  const handleMenuClick = (sectionId) => {
    setActiveMenuItem(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 230;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "item_1", "item_2", "item_3"
      ];

      // Determine which section is in the viewport
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
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

  return (
    <div
      style={{
        width: "100vw",
        overflow: "scroll",
        background: "#FFF",

        margin: "0px",
        padding: "0px",

        paddingTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <style>
        {`
    ::-webkit-scrollbar {
      width: 0; /* Hide the horizontal scrollbar */
      height: 0; /* Hide the vertical scrollbar */
    }
    `}
      </style>
      <div
        className={styles["menuDiv"]}
        style={{
          width: "90%",
          height: "fit-content",

          display: "flex",

          margin: "0px",
          padding: "0px",
          gap: navscreenWidth > 800 ? 40 : 20,
        }}
      >
        <p
          style={{
            margin: "0px",
          }}
          onClick={() => handleMenuClick("item_1")}
          className={activeMenuItem === "item_1" ? styles.active : ""}
        >
          Explore Institutes
        </p>
        <p
          style={{
            margin: "0px",
          }}
          onClick={() => handleMenuClick("item_2")}
          className={activeMenuItem === "item_2" ? styles.active : ""}
        >
          Scholarships
        </p>
        <p
          style={{
            margin: "0px",
          }}
          onClick={() => handleMenuClick("item_3")}
          className={activeMenuItem === "item_3" ? styles.active : ""}
        >
          Study Materials
        </p>
      </div>
    </div>

    // <div
    //   style={{

    //     width: "100%",
    //     display: "flex",
    //     justifyContent: "center",
    //   }}
    // >
    //   <div
    //     style={{

    //       width: "90%",
    //       display: "flex",
    //       gap: 40,
    //     }}
    //   >
    //     <div className={styles["navEle"]}>
    //       <p>Explore Institutes</p>
    //     </div>
    //     <div className={styles["navEle"]}>
    //       <p>Courses</p>
    //     </div>{" "}
    //     <div className={styles["navEle"]}>
    //       <p>Study Materials</p>
    //     </div>{" "}
    //     <div className={styles["navEle"]}>
    //       <p>Scholarship</p>
    //     </div>
    //     <div className={styles["navEle"]}>
    //       <p>UPSC Toppers</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CoachingListNav;
