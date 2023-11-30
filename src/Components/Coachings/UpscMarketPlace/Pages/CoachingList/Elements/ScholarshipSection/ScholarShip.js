import React, { useEffect, useState } from "react";
import styles from "../../../../../../../styles/coachings/coachingScholarship.module.css";
import Hat from "../../../../Assets/hat.png";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import CheckImage from "../../../../Assets/course_check.png"
import Symbol from "../../../../Assets/symbol.png"
import { Button } from "@mui/material";

function ScholarShip() {
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
      id="item_2"
      style={{
        display: "flex",
        width: "100%",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        background:
          navscreenWidth > 800 ? "var(--grey-grey-100, #E9EAF0)" : "white",
      }}
    >
      <div style={{ width: "90%" }} className="mt-8 mb-12">
        <div
          style={{
            position: "relative",
            textAlign: navscreenWidth < 800 && "center",
          }}
        >
          <p className={styles["scholarship-p"]}>
            Let's crack{" "}
            <span
              className={styles["scholarship-p"]}
              style={{
                color: "var(--primary-primary-blue-700, #2385C7)",
              }}
            >
              UPSC
            </span>{" "}
            together!
          </p>
          {navscreenWidth < 800 && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: "98.953px",
                  height: "78.834px",
                  transform: "rotate(6.632deg)",
                }}
                src={Hat}
                alt="Hat"
              />
            </div>
          )}
          <div className="flex items-end mt-2 ">
            <p
              style={{
                width: navscreenWidth < 800 && "100%",
              }}
              className={styles["scholarship-secP"]}
            >
              Josh {" "}
              <span
                style={{
                  color:
                    navscreenWidth > 800 &&
                    "var(--secondary-orange-800, #D37927)",
                }}
              >
                Talks
              </span>{" "}
              Scholarship Program
            </p>
            {navscreenWidth > 800 && (
              <Image
                style={{
                  position: navscreenWidth < 800 && "absolute",
                  top: navscreenWidth < 800 && 5,
                  right: navscreenWidth < 800 && 20,
                  width: navscreenWidth > 800 ? "91.909px" : "60px",
                  height: navscreenWidth > 800 ? "73.222px" : "48.5px",
                  marginLeft: "30px",

                  transform:
                    navscreenWidth > 800 ? "rotate(10deg)" : "rotate(-7deg)",
                }}
                src={Hat}
                alt="Hat"
              />
            )}
          </div>
          <p className={styles["scholarship-3rdP"]}>
            Josh Talks offers a scholarship program for UPSC Aspirants.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            marginTop: navscreenWidth < 800 ? "30px" : "60px",
          }}
        >
          <div className={styles["offer-box"]}>
            {navscreenWidth > 800 ? (
              <Image
                src={CheckImage}
                alt="new_Check_Image"
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            ) : (
              <CheckIcon
                style={{
                  color: "#1C9729",
                }}
              />
            )}
            <p>Free 1-on-1 video counselling.</p>
          </div>
          <div className={styles["offer-box"]}>
            {navscreenWidth > 800 ? (
              <Image
                src={CheckImage}
                alt="new_Check_Image"
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            ) : (
              <CheckIcon
                style={{
                  color: "#1C9729",
                }}
              />
            )}
            <p>Get upto 60% scholarship.</p>
          </div>
          <div className={styles["offer-box"]}>
            {navscreenWidth > 800 ? (
              <Image
                src={CheckImage}
                alt="new_Check_Image"
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            ) : (
              <CheckIcon
                style={{
                  color: "#1C9729",
                }}
              />
            )}
            <p>Available on both offline & online courses.</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: navscreenWidth < 800 && "column",
              marginTop: navscreenWidth < 800 ? "20px" : "30px",
              zIndex: 999,
              gap: 30,
            }}
            onClick={() => {
              window.open(
                "https://joshtalks.org/scholarship/upsc/submit-form/v2/224c1ecc-62dd-4909-bfa4-c4d37ab4a224",
                "_blank"
              );
            }}
          >
            <button
              variant="contained"
              className={styles["scholarship-btn-applyNow"]}
            >
              Apply Now{" "}
            </button>
          </div>
        </div>
      </div>

      <Image
        style={{
          position: "absolute",
          width: navscreenWidth < 800 ? "200px" : "400px",
          bottom: 0,
          right: 0,
          opacity: navscreenWidth < 800 && 0.5,
        }}
        src={Symbol}
        alt="symbol"
      />
    </div>
  );
}

export default ScholarShip;
