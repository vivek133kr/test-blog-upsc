import React, { useEffect, useState } from "react";

import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function CourseFaqElement() {
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
  }, []); // Empty
  let [open, setOpen] = useState(false);

  const handleopen = () => {
    setOpen(!open);
  };
  return (
    <div
      style={{
        borderRadius: navscreenWidth < 1000 && "8px",
        border:
          navscreenWidth < 1000 && "1px solid var(--grey-grey-400, #A1A5B3)",
        background: navscreenWidth < 1000 && "var(--pure-white, #FFF)",
      }}
      className={styles["courseFaqQuestion"]}
      onClick={handleopen}
    >
      <div
        style={{
          display: "flex",

          cursor: "pointer",
        }}
      >
        <div
          style={{
            marginRight: "30px",
          }}
        >
          {open ? <RemoveIcon /> : <AddIcon />}
        </div>

        <div>
          <p className={styles["CoursefaqQuestionHeader"]}>
            Will I be Able to attend the Classes Through Mobile If I purchase
            your QEP Course ?
          </p>
          {open && (
            <p className={`${styles["CoursefaqQuestionAnswer"]} `}>
              Yes you would be able to View an course or test series that you
              purchased through phone, tablet pc or laptop. The only thing
              required is a decent internet connection
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseFaqElement;
