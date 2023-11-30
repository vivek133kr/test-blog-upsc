import React from 'react'

import styles from "../../../../../../../styles/coachings/courseDetail/courseDetailMain.module.css";
import Image from 'next/image';
import Institute from "../../../../Assets/Institute.png"
import { Button } from '@mui/material';
import RightArrow from "../../../../Assets/rightarrow.png"
function InstituteDetail() {
  return (
    <div style={{
        display:"flex",

    }}>
      <div>
        <Image
          src={Institute}
          alt="institute"
          style={{
            height: "200px",
            width: "148px",
          }}
        />
      </div>
      <div style={{
        position:"relative",
        padding: "17px 15px",
        backgroundColor:"white",
        borderRadius: "0px 8px 8px 0px",
      }}>
        <p className={styles["ins-p1"]}>KSG Institute</p>
        <p className={styles["ins-p2"]}>Head office in Delhi with centers in 5 cities.</p>

        <Button style={{
            display:"flex",
            alignItems:"center",
            position:"absolute",
            bottom:20,
            borderRadius: "4px",
            padding: "10px 22px",
background: "var(--secondary-orange-800, #D37927)"
        }}>
            
            <p className={styles["ins-p3"]}>Know More</p>
            
            <Image style={{
                width:"20px",
                height:"20px"
            }} src={RightArrow} alt="rightArrow"/>
            </Button>
      </div>
    </div>
  );
}

export default InstituteDetail