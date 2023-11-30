import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styles from "../../../../../../styles/coachings/coachingInfo.module.css"
import StarRatings from "react-star-ratings";
function FirstComponent() {
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
        width: navscreenWidth < 800 ?"90%" : "100%",
        marginTop:navscreenWidth < 800  && "30px",
      
        boxShadow:navscreenWidth < 800  &&  "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",

        border:"transparent",
       paddingTop:navscreenWidth < 800 ? "30px":"66px",
       borderBottom:navscreenWidth < 800 &&"10px solid white",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "90%", }}>
        <div>
          <div
            style={{
              display: "flex",
             
              flexDirection: navscreenWidth < 800 ?"column" :"row",
              justifyContent: "space-between",

              width: "100%",
            }}
          >
            <div>
              <p className={styles["coachingInfoHeader"]}>KSG IAS Institute</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop:navscreenWidth < 800 ? "0px":"20px",
                  padding: "0px",
                }}
                
              >
                <StarRatings
                  rating={3.9}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#FFA135"
                />
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="pt-1 ml-3"
                >
                  <p className={styles["coachingRating"]}>3.9/5</p>
                  <p className={styles["coachingReview"]}>
                    &nbsp; (561 reviews)
                  </p>
                </div>
              </div>
            </div>
            <button
              variant="contained"
              className={styles["coachingInfoBtn"]}
              style={{
                height: "50px",
                textTransform: "none",
                marginTop:navscreenWidth < 800 && "30px",
                backgroundColor: "#EC850F",
                boxShadow: "none",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderRadius: "4px",
              }}
            >
              Apply for Scholarship
            </button>
          </div>
        </div>

        <div
          style={{
            width: navscreenWidth < 800 ? "100%" : "70%",
            marginTop:navscreenWidth < 800 ? "30px" :"66px",
            paddingBottom:navscreenWidth < 800 && "10px"
          }}
         
        >
          <div className={styles["coachingInfoTitleDiv"]}>
            <p className={styles["coachingInfoTitle"]}>Expertise:</p>
            <p className={styles["coachingInfoTitleAns"]}>
              KSG is renowned for its interview coaching
            </p>
          </div>
          <div className={styles["coachingInfoTitleDiv"]}>
            <p className={styles["coachingInfoTitle"]}>Mode of learning:</p>
            <p className={styles["coachingInfoTitleAns"]}>
              Online, Offline, Blended
            </p>
          </div>
          <div className={styles["coachingInfoTitleDiv"]}>
            <p className={styles["coachingInfoTitle"]}>Courses:</p>
            <p className={styles["coachingInfoTitleAns"]}>
              General Studies Foundation Course & CSAT. AWSDP+ - Answer Writing
              Skill Development Programme Plus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstComponent