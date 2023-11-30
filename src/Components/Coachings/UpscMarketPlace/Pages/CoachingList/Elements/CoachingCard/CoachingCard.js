import React, { useEffect, useState } from "react";

import "@fontsource/open-sans"
import KSG from "../../../../Assets/ksgias.png";
import StarRatings from "react-star-ratings";
import StarIcon from "@mui/icons-material/Star";
import styles from "../../../../../../../styles/coachings/coachingCard.module.css";
import { Button, ButtonBase } from "@mui/material";
import Image from "next/image";
function CoachingCard({coachingData}) {
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

  const reviewVal = 4.9;
  return (
    <div
      className="mb-9 "
      style={{
        width: "100%",

        padding: navscreenWidth > 800 ? "30px" : "14px 12px",

        borderRadius: navscreenWidth > 800 ? "8px" : "6px",
        border: "1px solid var(--grey-grey-200, #CED1D9)",
        background: "#FFF",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: navscreenWidth > 800 ? "row" : "column",
          width: "100%",
        }}
      >
        {navscreenWidth > 800 && (
          <div
            style={{
              maxWidth: "220px",
              minHeight: "214px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                maxWidth: "100%",
                minHeight: "100%",
                objectFit: "cover", // or "contain" depending on your needs
                overflow: "hidden",
                borderRadius: "4.32px",
                border: "1.08px solid #C9C5C5",
              }}
              src={coachingData.Image}
              alt=""
            />
          </div>
        )}
        {navscreenWidth > 800 && (
          <div className={styles["cardCoachingDiv"]}>
            {navscreenWidth > 800 && (
              <p className={styles["coachingTitle"]}>
                {coachingData.InstituteName}
              </p>
            )}
            {navscreenWidth > 800 && (
              <p className={`${styles["coachingOffice"]}`}>
                Centers in {coachingData.Centres.length} cities.
              </p>
            )}
            <div
              className={`mt-8 ${styles["coursesDiv"]}`}
              style={{
                alignItems: "flex-start",
              }}
            >
              <p
                className={styles["coachingCourses"]}
                style={{ whiteSpace: "nowrap" }}
              >
                Courses :{" "}
              </p>
              <div
                style={{
                  display: "flex",

                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                {coachingData.Courses.map((item, index) => (
                  <p className={styles["coachingCourseName"]}>{item}</p>
                ))}
                {/* <p className={styles["coachingCourseName"]}>
                  Foundation - 2 years
                </p>

                <p className={styles["coachingCourseName"]}>Mains - 2 years</p>
                <p className={styles["coachingCourseName"]}>Prelims</p> */}
              </div>
            </div>
            <div className={`mt-6 ${styles["feesDiv"]}`} style={{}}>
              <p className={styles["coachingFees"]}>Fees : </p>
              <p className={`${styles["coachingFeeAmount"]} `}>
                {coachingData.Fees}
              </p>
            </div>
            {coachingData && coachingData.about && (
              <div className={`mt-6 ${styles["aboutDiv"]}`} style={{}}>
                <p
                  className={styles["coachingAbout"]}
                  style={{
                    display:
                      "inline" /* This will keep the label and content on the same line */,

                    whiteSpace: "nowrap",
                  }}
                >
                  About :{" "}
                </p>
                <p className={`${styles["coachingAboutDetail"]} `}>
                  Lorem ipsum dolor sit amet consecteturA metus blandit aliquet
                  adipiscing. Lorem ipsum dolor sit amet consectetur. A metus
                  blandit Lorem ipsum dolor sit amet consecteturA metus blandit
                  aliquet adipiscing. Lorem ipsum dolor sit amet consectetur. A
                  metus blandit
                </p>
              </div>
            )}
            <div style={{}} className={`mt-6 ${styles["btnDiv"]}`}>
              <Button
                variant="contained"
                className={styles["coachingOptionBtn"]}
                onClick={() => {
                  window.open(
                    "https://joshtalks.org/scholarship/upsc/submit-form/v2/224c1ecc-62dd-4909-bfa4-c4d37ab4a224",
                    "_blank"
                  );
                }}
                style={{
                  borderRadius: "4px",
                  backgroundColor: "#D37927",
                  color: "white",
                  textTransform: "none",
                  paddingTop: "10px",
                  border: "none",
                  boxShadow: "none",
                  boxShadow: "none",
                  paddingBottom: "10px",
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                }}
              >
                Apply for Scholarship
              </Button>
              {/* <Button
                variant="contained"
                className={styles["coachingOptionBtn"]}
                style={{
                  borderRadius: "4px",
                  backgroundColor: "white",
                  textTransform: "none",
                  color: "#2385C7",
                  border: "1px solid #2385C7",

                  boxShadow: "none",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                }}
              >
                Know More
              </Button> */}
            </div>
          </div>
        )}
        {coachingData && coachingData.selectionData && navscreenWidth > 800 && (
          <div
            style={{
              width: "20%",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className={styles["coachingSelection"]}>
              Previous Year Selections
            </p>

            <div
              style={{
                width: "100px",
                height: "100px",

                border: "7px solid #0C72C6",
                borderRadius: "50%", //

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="mt-5"
            >
              <p
                style={{ padding: "0px" }}
                className={styles["coachingSelectionData"]}
              >
                3/93
              </p>
            </div>
          </div>
        )}

        {navscreenWidth < 800 && (
          <div>
            <div
              style={{
                paddingBottom: "12px",
              }}
              className={styles["mobCoachingCardDiv"]}
            >
              <div
                style={{
                  maxWidth: "110px",
                  minHeight: "115px",

                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    maxWidth: "100%",
                    minHeight: "100%",
                    objectFit: "cover", // or "contain" depending on your needs
                    overflow: "hidden",
                    borderRadius: "4.32px",
                    border: "1.08px solid #C9C5C5",
                  }}
                  src={coachingData.Image}
                  alt=""
                />
              </div>
              <div
                style={{
                  paddingLeft: "12px",
                }}
              >
                <p className={styles["mobCoachingP1"]}>
                  {coachingData.InstituteName}
                </p>
                <p className={styles["mobCoachingP2"]}>
                  Centres in {coachingData.Centres.length} cities
                </p>

                {coachingData.Rating && coachingData.NoofReviews && (
                  <div
                    style={{
                      display: "flex",

                      flexDirection: "row",
                      alignItems: "center",
                      padding: "0px",
                    }}
                    className="mt-2"
                  >
                    <div
                      style={{
                        background:
                          reviewVal < 2
                            ? "var(--danger-danger-600, #B63636)"
                            : reviewVal > 2 && reviewVal < 4
                            ? "var(--secondary-orange-600, #E19431)"
                            : "var(--success-success-700, #15711F)",
                        display: "flex",
                        borderRadius: "1.652px",
                        height: "16px",
                        width: "38px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className={styles["mobCoachingRating"]}
                    >
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        {" "}
                        {reviewVal}
                      </p>
                      &nbsp;
                      <StarIcon
                        style={{
                          width: "10px",
                          margin: " auto 0",
                          height: "10px",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p className={styles["mobCoachingReview"]}>
                        &nbsp; 71 reviews
                      </p>
                    </div>
                  </div>
                )}
                <div
                  className="mt-3"
                  style={{
                    display: "flex",

                    gap: "5px",
                  }}
                >
                  {coachingData.Courses.slice(0, 2).map((item, i) => (
                    <p className={styles["mobCoachingCourseName"]}>{item}</p>
                  ))}
                </div>
                {coachingData.Courses.length > 2 && (
                  <p className={`${styles["mobCoachingP3"]} mt-1`}>
                    +{coachingData.Courses.length - 2} more...
                  </p>
                )}

                <p className={`${styles["mobCoachingP4"]} mt-3`}>
                  {coachingData.Fees}
                </p>
              </div>
            </div>

            <div>
              <Button
                style={{
                  borderRadius: "4px",
                  background: "var(--secondary-orange-800, #D37927)",

                  textTransform: "none",
                  width: "100%",
                }}
                className={styles["mobCoachingBtn"]}
                variant="contained"
                onClick={() => {
                  window.open(
                    "https://joshtalks.org/scholarship/upsc/submit-form/v2/224c1ecc-62dd-4909-bfa4-c4d37ab4a224",
                    "_blank"
                  );
                }}
              >
                Apply for Scholarship
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoachingCard;
