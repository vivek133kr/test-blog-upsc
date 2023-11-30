import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TopperImg from "../../../../Assets/topper-img.png"
import styles from "../../../../../../../styles/coachings/coachingToppersCard.module.css"
import Image from 'next/image'
function ToppersCard({id}) {
  return (
    <div key={id} className={styles["top-card-div1"]} style={{
        height:"220px"
    }}>
      <div style={{}}>
        <div style={{
            background: "var(--grey-grey-50, #F5F7FA)",
            display:"flex",
            height:"100%",
            flexDirection:"column",
           justifyContent:"space-around"
        }}>
        <p>AIR 1</p>

        <Image src={TopperImg} alt="topp" />
        </div>
      </div>
      <div style={{
        position:"relative",
        display:"flex",
        flexDirection:"column",
        textAlign:"left"
      }}>
        <div>
          <p className={styles["topperHead"]}>Name</p>
          <p className={styles["topperAns"]}>Ishita Kishore</p>
        </div>

        <div className='mt-4'>
          <p className={styles["topperHead"]}>Year</p>
          <p className={styles["topperAns"]}>2023</p>
        </div>

        <div style={{

           position:"absolute",
           bottom:5,
           cursor: "pointer",
        }}>
          <p className={styles["topper-prof-btn"]}>View Profile <ChevronRightIcon/></p>
        </div>
      </div>
    </div>
  );
}

export default ToppersCard