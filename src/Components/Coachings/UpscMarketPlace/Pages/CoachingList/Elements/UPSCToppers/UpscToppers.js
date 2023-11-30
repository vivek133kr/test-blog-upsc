import React from 'react'

import styles from "../../../../../../../styles/coachings/coachingUpscToppers.module.css";
import ToppersMenu from './ToppersMenu';
import ToppersCardMain from './ToppersCardMain';
import TopperCarousel from './TopperCarousel';


function UpscToppers() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",

        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "90%" }} className="mt-8 mb-12">
        <div>
          <p className={styles["upscToppers-p1"]}>UPSC Toppers</p>
          <p className={styles["upscToppers-p2"]}> List of UPSC Toppers 2023</p>
        </div>

        <div className={styles["upscToppers-div2"]}>
          <ToppersMenu />
        </div>
        <div className={styles["upscToppers-div3"]}>
          <TopperCarousel />
        </div>
      </div>
    </div>
  );
}

export default UpscToppers