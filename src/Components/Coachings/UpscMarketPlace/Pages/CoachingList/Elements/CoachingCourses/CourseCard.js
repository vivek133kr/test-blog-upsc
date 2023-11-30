import React from 'react'

import styles from "../../../../../../../styles/coachings/coachingListCourses.module.css";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function CourseCard() {
  return (
    <div class="grid-item rounded bg-white">
      <div class="max-w-sm rounded">
        <div class="px-4 py-3">
          <div className={`${styles["courseCardTitle"]} mb-4  text-xl`}>
            UPSC Preliminary Examination
          </div>
          <div className="mb-4">
            <div class="flex justify-between mb-2 ">
              <p className={styles["courseDivTitle"]}> Duration</p>
              <p className={styles["courseDivAnswer"]}>3 years</p>
            </div>
            <div class="flex justify-between mb-2">
              <p className={styles["courseDivTitle"]}>Total Avg. Fees</p>
              <p className={styles["courseDivAnswer"]}>41.59 K</p>
            </div>{" "}
            <div class="flex justify-between">
              <p className={styles["courseDivTitle"]}>Colleges</p>
              <p className={styles["courseDivAnswer"]}>128</p>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid black",
              paddingTop: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",

                justifyContent: "space-between",
              }}
            >
              <p className={"courseOverview"}>Course Overview</p>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                }}
              >
                <ChevronRightIcon style={{ height: "100%", width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard