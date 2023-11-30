import React, { useEffect, useState } from "react";

import styles from "../../../../../../styles/coachings/coachingCourses.module.css";
import city from "../../../Assets/city.png";
import clock from "../../../Assets/clock.png";
import rupee from "../../../Assets/rupee.png";
import group from "../../../Assets/Group.png";
import time from "../../../Assets/time.png";
import contract from "../../../Assets/contract.png";
import Image from "next/image";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Button } from "@mui/material";
function CourseInfo({ id }) {
  let [show, setShow] = useState(false);

  useEffect(() => {
    if (id == 0) {
      setShow(true);
    }
  }, []);
  return (
    <div className={`${styles["courseBox"]} mt-14 `} key={id}>
      <p>General Studies Foundation Course & CSAT.</p>

      <div className="mt-4">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div className={styles["courseImgDiv"]}>
            <div className={styles["courseImg"]}>
              <Image src={clock} alt="" className={styles["courseBox1color"]} />
            </div>
            <div className={styles["courseImgP"]}>
              <p>Duration : </p>
              <p>15 weeks</p>
            </div>
          </div>
          <div className={styles["courseImgDiv"]}>
            <div className={styles["courseImg"]}>
              <Image src={rupee} alt="" className={styles["courseBox1color"]} />
            </div>
            <div className={styles["courseImgP"]}>
              <p>Duration : </p>
              <p>15 weeks</p>
            </div>
          </div>
          <div className={styles["courseImgDiv"]}>
            <div className={styles["courseImg"]}>
              <Image
                src={time}
                alt=""
                className={styles["courseBox1color"]}
                style={{
                  height: "100%",
                }}
              />
            </div>
            <div className={styles["courseImgP"]}>
              <p>Duration : </p>
              <p>15 weeks</p>
            </div>
          </div>
        </div>
        <div
          className="mt-6"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div className={styles["courseImgDiv"]}>
            <div className={styles["courseImg"]}>
              <Image src={group} alt="" className={styles["courseBox1color"]} />
            </div>
            <div className={styles["courseImgP"]}>
              <p>Duration : </p>
              <p>15 weeks</p>
            </div>
          </div>
          <div className={styles["courseImgDiv"]}>
            <div className={styles["courseImg"]}>
              <Image
                src={contract}
                alt=""
                className={styles["courseBox1color"]}
              />
            </div>
            <div className={styles["courseImgP"]}>
              <p>Duration : </p>
              <p>15 weeks</p>
            </div>
          </div>
          <div className={styles["courseImgDiv"]}>
            <div className={styles["courseImg"]}>
              <Image src={city} alt="" className={styles["courseBox1color"]} />
            </div>
            <div className={styles["courseImgP"]}>
              <p>Duration : </p>
              <p>15 weeks</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles["courseInfoBtn"]} mt-4`}
        onClick={() => {
          setShow(!show);
        }}
        style={{
          cursor: "pointer",
        }}
      >
        {!show ? (
          <>
            Show more info
            <KeyboardArrowDownIcon />
          </>
        ) : (
          <>
            Show Less info
            <KeyboardArrowUpIcon />
          </>
        )}
      </div>

      {show && (
        <div className="mt-3">
          <p className={styles["courseInfoPara"]}>
            General Studies Foundation Course & CSAT.General Studies Foundation
            Course & CSAT.General Studies Foundation Course & CSAT.General
            Studies Foundation Course & CSAT.General Studies Foundation Course &
            CSAT.General Studies Foundation Course & CSAT.General Studies
            Foundation Course & CSAT.General Studies Foundation Course & CSAT
          </p>
        </div>
      )}
    </div>
  );
}

export default CourseInfo;
