import React, { useEffect, useState } from 'react'
import Books from "../../../../Assets/books.png";
import Image from 'next/image';
import styles from "../../../../../../../styles/coachings/coachingMatCard.module.css"
import { Button } from '@mui/material';
import { useRouter } from "next/router";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function StudyMatCard({name, url}) {
  const [navscreenWidth, setNavScreenWidth] = useState(0);
const router = useRouter();

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
        width: navscreenWidth < 800 && "160px",
        height: navscreenWidth > 800 ? "260px":"200px",
        paddingBottom: "40px",
        position: "relative",
      }}
      className={styles["studyMatMain"]}
    >
      <Image
        style={{
          width: navscreenWidth > 800 ? "50px" : "35px",
          height: navscreenWidth > 800 ? "50px" : "35px",
        }}
        src={Books}
        alt=""
      />

      <p className={`${styles["study-mat-p1"]} mt-2 mb-4`}>{name}</p>

      <button
        onClick={() => {
          window.open(url, "_blank");
        }}
        className={`${styles["study-mat-btn"]}`}
      >
        <p>Learn More</p> <KeyboardArrowRightIcon />{" "}
      </button>
    </div>
  );
}

export default StudyMatCard