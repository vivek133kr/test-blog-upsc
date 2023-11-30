import React, { useEffect, useState } from "react";
import styles from "../../../../../../styles/coachings/coachingMenu.module.css";

function MenuComponent() {
  const [activeMenuItem, setActiveMenuItem] = useState("faculty"); // Default to 'faculty' or any other initial active item

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
        "faculty",
        "centres",
        "fees",
        "courses",
        "featuring",
        "review",
        "faq",
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
        width: navscreenWidth > 800 ? "100%" : "90%",
        background: "#FFF",
        border:"transparent",
        height: navscreenWidth > 800 ?"100px":"fit-content",
        boxShadow: navscreenWidth > 800 ? "0px 0px 0px 0px rgba(0, 0, 0, 0.10)" :"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={styles["menuDiv"]}
        style={{
          height: "fit-content",
          width: navscreenWidth > 800 && "90%",
          overflow: navscreenWidth < 800 && "scroll",
          display: "flex",
          paddingRight: navscreenWidth < 800 && "30px",
          paddingLeft: navscreenWidth < 800 && "30px",

          flexWrap: navscreenWidth > 800 && "wrap",
          gap: "25px",
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
        <p
          onClick={() => handleMenuClick("faculty")}
          className={activeMenuItem === "faculty" ? styles.active : ""}
        >
          Faculty
        </p>
        <p
          onClick={() => handleMenuClick("centres")}
          className={activeMenuItem === "centres" ? styles.active : ""}
        >
          Centers
        </p>
        <p
          onClick={() => handleMenuClick("fees")}
          className={activeMenuItem === "fees" ? styles.active : ""}
        >
          Fees
        </p>
        <p
          onClick={() => handleMenuClick("courses")}
          className={activeMenuItem === "courses" ? styles.active : ""}
        >
          Courses
        </p>
        <p
          onClick={() => handleMenuClick("featuring")}
          className={activeMenuItem === "featuring" ? styles.active : ""}
        >
          Featured
        </p>
        <p
          onClick={() => handleMenuClick("review")}
          className={activeMenuItem === "review" ? styles.active : ""}
        >
          Reviews
        </p>
        <p
          onClick={() => handleMenuClick("faq")}
          className={activeMenuItem === "faq" ? styles.active : ""}
        >
          FAQs
        </p>
      </div>
    </div>
  );
}

export default MenuComponent;
