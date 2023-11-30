import React, { useEffect, useState } from "react";
import JoshLogo from "../Assets/logo.png";
import styles from "../../../../styles/coachings/coachingCard.module.css"
import Image from "next/image";
import "@fontsource/open-sans"; 
function UpscMarketPlaceFooter() {
  const [footscreenWidth, setFootScreenWidth] = useState(0);
  useEffect(() => {
    // Update screenWidth with the actual window width after component has mounted
    setFootScreenWidth(window.innerWidth);

    const handleResize = () => {
      setFootScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after component mount

  return (
    <div
      style={{
        background: "var(--grey-grey-900, #1D2026)",
        width: "100%",
        borderTop: "1px solid #E9EEF2",

        height: footscreenWidth > 800 ? "302px" : "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: footscreenWidth > 800 && "center",
        alignItems: "center",
      }}
      className="mt-2"
    >
     
      <div
        style={{
          width: "90%",

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: footscreenWidth > 800 && "center",
        }}
      >
        {footscreenWidth > 800 && (
          <div
            style={{
              width: "fit-content",
            }}
          > <a href="https://www.joshtalks.com">
            <Image
              style={{
                width: "200px",
                height: "200px",
                marginBottom: "-20px",
              }}
              src={JoshLogo}
              alt="Josh Talks Pvt. Ltd. logo"
            />
          </a>
            <p className={styles["marketPlaceFooterTitle"]}>
              © Josh Talks Part of Josh Group . All rights reserved.
            </p>
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: footscreenWidth > 800 ? "row" : "column",

            paddingTop: footscreenWidth < 800 && "24px",
            justifyContent: footscreenWidth > 800 && "space-between",
            gap: footscreenWidth > 800 ? "150px" : "40px",
          }}
        >
          <div
            style={{
              width: "fit-content",
              display: "flex",

              flexDirection: footscreenWidth > 800 ? "column" : "column",
              flexWrap: footscreenWidth > 800 && "wrap",
              textAlign: "left",

              gap: footscreenWidth < 800 ? "10px" : "5px",
            }}
          >
            <div>
              <p className={styles["marketPlaceFooterTitleHead"]}>Legal</p>
            </div>
            <p
              style={{
                fontSize: footscreenWidth < 800 && "14px",
              }}
              className={styles["marketPlaceFooterTitle"]}
            >
              <a href="https://www.joshtalks.com/privacy-policy/">Privacy Policy</a>
            </p>
            <p
              style={{
                fontSize: footscreenWidth < 800 && "14px",
              }}
              className={styles["marketPlaceFooterTitle"]}
            >
              <a href="https://www.joshtalks.com/terms-conditions/">Terms & Conditions</a>
            </p>
            <p
              style={{
                fontSize: footscreenWidth < 800 && "14px",
              }}
              className={styles["marketPlaceFooterTitle"]}
            >
                <a href="https://www.joshtalks.com/community-guidelines/">Community Guidance</a>
            </p>
          </div>
          <div
            style={{
              width: "fit-content",
              display: "flex",
              flexDirection: footscreenWidth > 800 ? "column" : "column",
              flexWrap: footscreenWidth > 800 && "wrap",
              textAlign: "left",

              gap: footscreenWidth < 800 ? "10px" : "5px",
            }}
          >
            <div>
              <p className={styles["marketPlaceFooterTitleHead"]}>
                {" "}
                Contact
              </p>
            </div>

            <p
              style={{
                fontSize: footscreenWidth < 800 && "14px",
              }}
              className={styles["marketPlaceFooterTitle"]}
            >
              Talk to UPSC Counsellor
            </p>
            <p
              style={{
                fontSize: footscreenWidth < 800 && "14px",
              }}
              className={styles["marketPlaceFooterTitle"]}
            >
                <a style={{
                    fontWeight: "600"
                }} href="tel:+917026044438">+917026044438</a>
            </p>
            <p
              style={{
                fontSize: footscreenWidth < 800 && "14px",
              }}
              className={styles["marketPlaceFooterTitle"]}
            >
              For Already Enrolled UPSC Students:
            </p>

            <p
              style={{
                fontSize: footscreenWidth < 800 && "14px",
              }}
              className={styles["marketPlaceFooterTitle"]}
            >
                <a style={{
                    fontWeight: "600"
                }} href="tel:+918799785431">+918799785431</a>
            </p>
          </div>
        </div>
        {footscreenWidth < 800 && (
          <div
            style={{
              paddingTop: footscreenWidth < 800 && "24px",
            }}
          >
            <Image
              style={{
                width: "100px",
                height: "100px",
              }}
              src={JoshLogo}
              alt="josh-image"
            />
          </div>
        )}
      </div>
      {footscreenWidth < 800 && (
        <div
          style={{
            width: "100%",
            marginTop: "20px",

            borderTop: "2px solid white",
          }}
          className={styles["marketPlaceFooterTitle"]}
        >
          <p
            style={{
              marginTop: "20px",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            © Josh Talks Part of Josh Group . <br /> All rights reserved.
          </p>
        </div>
      )}
    </div>
  );
}

export default UpscMarketPlaceFooter