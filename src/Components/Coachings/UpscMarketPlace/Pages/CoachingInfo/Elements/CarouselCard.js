import React, { useEffect, useState } from 'react'
import styles from "../../../../../../styles/coachings/coachingCarousel.module.css";
import Map from "../../../Assets/map.png"
import Image from 'next/image';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function CarouselCard({id}) {
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

  let [show, setShow] = useState(false);
  return (
    <div
      key={id}
      className={styles["cardDiv"]}
      style={{
        textAlign: "left",
      }}
    >
      <p className={`${styles["cardTitle"]} mt-3 mb-3`}>Delhi</p>

      <Image
        style={{
          width: "90%",
          height: navscreenWidth > 800 ? "187px" : "74px",
        }}
        src={Map}
        alt="dkf"
      />
      <div
        style={{
          width: "90%",
        }}
        className="mt-3"
      >
        <p className={styles["cardInput"]}>Address :</p>
        <p className={`${styles["cardAns"]} mt-2`}>
          6501, Suite marg, City Centre, Gurugram, Haryana, India - 122002
          Contact: - 99999 99999
        </p>

        {show && (
          <div className="mt-3">
            <p className={styles["cardInput"]}>Courses Offered :</p>

            <ul
              className={`${styles["cardAns"]} mt-2`}
              style={{ listStyleType: "disc", marginLeft: "28px" }}
            >
              <li>UGC NET</li>
              <li>IAS Prelims Course for UPSC</li>
              <li>IAS GS Foundation</li>
              <li>Sociology</li>
              <li>GS Foundation Live</li>
            </ul>
          </div>
        )}
       {navscreenWidth > 800 && <div
          onClick={() => {
            setShow(!show);
          }}
          style={{
            cursor: "pointer",
          }}
          className={`${styles["cardBtn"]} mt-3 mb-3`}
        >
          {show ? "Know Less" : "Know More"}
          {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>}
      </div>
    </div>
  );
}

export default CarouselCard