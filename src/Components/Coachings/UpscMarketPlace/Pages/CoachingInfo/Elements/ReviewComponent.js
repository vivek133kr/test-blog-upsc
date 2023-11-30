import React, { useEffect, useState } from "react";

import Check from "../../../Assets/check.png";
import Quote from "../../../Assets/quote.png";
import StarRatings from "react-star-ratings";
import styles from "../../../../../../styles/coachings/coachingReview.module.css";
import Image from "next/image";
function ReviewComponent() {
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
      id="review"
      style={{
        marginBottom: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F7F9FB",
      }}
    >
      <div
        className="mt-10 mb-20"
        style={{
          width: "90%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {navscreenWidth > 800 && (
            <Image
              style={{
                height: "45px",
                width: "45px",
              }}
              src={Check}
              alt="dkf"
            />
          )}
          <p className={styles["reviewTitle"]}>What learners are saying...</p>
        </div>
        <div
          style={{
            display: "grid",
            marginTop: "60px",
            gridTemplateColumns:
              navscreenWidth > 800 ? "repeat(2, 1fr)" : "repeat(1,1fr)",
            gridGap: navscreenWidth > 800 ? "60px":"20px",
          }}
        >
          <div className={styles["reviewBox"]}>
            <div
              style={{
                display: "flex",
              }}
            >
              <Image
                style={{
                  height: navscreenWidth > 800 ? "20px" : "10px",
                  width: navscreenWidth > 800 ? "20px" : "10px",
                  marginRight: "20px",
                }}
                src={Quote}
                alt="dkf"
              />
              <p className={styles["reviewP"]}>
                Featuring Joshtalks by students and faculty of the institute
                Featuring Joshtalks by students.
              </p>
            </div>
            <div className={styles["reviewNameHead"]}>
              <div className={styles["reviewPic"]}></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  justifyContent: "center",
                }}
              >
                <p className={styles["reviewName"]}>
                  Purvang Mehta
                  <span>
                    <Image
                      style={{
                        height: navscreenWidth > 800 ? "30px" : "15px",
                        width: navscreenWidth > 800 ? "30px" : "15px",
                        marginLeft: "10px",
                      }}
                      src={Check}
                      alt="dkf"
                    />
                  </span>
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",

                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <div>
                    <StarRatings
                      rating={4.9}
                      starDimension={navscreenWidth > 800 ? "12px" : "6px"}
                      starSpacing="1px"
                      starRatedColor="#FFA135"
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "5px",
                    }}
                  >
                    <p
                      style={{
                        padding: "0px",
                        margin: "0px",
                        paddingTop: "5px",
                      }}
                      className={styles["reviewRating"]}
                    >
                      4.9/5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["reviewBox"]}>
            <div
              style={{
                display: "flex",
              }}
            >
              <Image
                style={{
                  height: navscreenWidth > 800 ? "20px" : "10px",
                  width: navscreenWidth > 800 ? "20px" : "10px",
                  marginRight: "20px",
                }}
                src={Quote}
                alt="dkf"
              />
              <p className={styles["reviewP"]}>
                Featuring Joshtalks by students and faculty of the institute
                Featuring Joshtalks by students.
              </p>
            </div>
            <div className={styles["reviewNameHead"]}>
              <div className={styles["reviewPic"]}></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  justifyContent: "center",
                }}
              >
                <p className={styles["reviewName"]}>
                  Purvang Mehta
                  <span>
                    <Image
                      style={{
                        height: navscreenWidth > 800 ? "30px" : "15px",
                        width: navscreenWidth > 800 ? "30px" : "15px",
                        marginLeft: "10px",
                      }}
                      src={Check}
                      alt="dkf"
                    />
                  </span>
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",

                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <div>
                    <StarRatings
                      rating={4.9}
                      starDimension={navscreenWidth > 800 ? "12px" : "6px"}
                      starSpacing="1px"
                      starRatedColor="#FFA135"
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "5px",
                    }}
                  >
                    <p
                      style={{
                        padding: "0px",
                        margin: "0px",
                        paddingTop: "5px",
                      }}
                      className={styles["reviewRating"]}
                    >
                      4.9/5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className={styles["reviewBox"]}>
            <div
              style={{
                display: "flex",
              }}
            >
              <Image
                style={{
                  height: navscreenWidth > 800 ? "20px" : "10px",
                  width: navscreenWidth > 800 ? "20px" : "10px",
                  marginRight: "20px",
                }}
                src={Quote}
                alt="dkf"
              />
              <p className={styles["reviewP"]}>
                Featuring Joshtalks by students and faculty of the institute
                Featuring Joshtalks by students.
              </p>
            </div>
            <div className={styles["reviewNameHead"]}>
              <div className={styles["reviewPic"]}></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  justifyContent: "center",
                }}
              >
                <p className={styles["reviewName"]}>
                  Purvang Mehta
                  <span>
                    <Image
                      style={{
                        height: navscreenWidth > 800 ? "30px" : "15px",
                        width: navscreenWidth > 800 ? "30px" : "15px",
                        marginLeft: "10px",
                      }}
                      src={Check}
                      alt="dkf"
                    />
                  </span>
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",

                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <div>
                    <StarRatings
                      rating={4.9}
                      starDimension={navscreenWidth > 800 ? "12px" : "6px"}
                      starSpacing="1px"
                      starRatedColor="#FFA135"
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "5px",
                    }}
                  >
                    <p
                      style={{
                        padding: "0px",
                        margin: "0px",
                        paddingTop: "5px",
                      }}
                      className={styles["reviewRating"]}
                    >
                      4.9/5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className={styles["reviewBox"]}>
            <div
              style={{
                display: "flex",
              }}
            >
              <Image
                style={{
                  height: navscreenWidth > 800 ? "20px" : "10px",
                  width: navscreenWidth > 800 ? "20px" : "10px",
                  marginRight: "20px",
                }}
                src={Quote}
                alt="dkf"
              />
              <p className={styles["reviewP"]}>
                Featuring Joshtalks by students and faculty of the institute
                Featuring Joshtalks by students.
              </p>
            </div>
            <div className={styles["reviewNameHead"]}>
              <div className={styles["reviewPic"]}></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  justifyContent: "center",
                }}
              >
                <p className={styles["reviewName"]}>
                  Purvang Mehta
                  <span>
                    <Image
                      style={{
                        height: navscreenWidth > 800 ? "30px" : "15px",
                        width: navscreenWidth > 800 ? "30px" : "15px",
                        marginLeft: "10px",
                      }}
                      src={Check}
                      alt="dkf"
                    />
                  </span>
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",

                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <div>
                    <StarRatings
                      rating={4.9}
                      starDimension={navscreenWidth > 800 ? "12px" : "6px"}
                      starSpacing="1px"
                      starRatedColor="#FFA135"
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: "5px",
                    }}
                  >
                    <p
                      style={{
                        padding: "0px",
                        margin: "0px",
                        paddingTop: "5px",
                      }}
                      className={styles["reviewRating"]}
                    >
                      4.9/5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          
        </div>
      </div>
    </div>
  );
}

export default ReviewComponent;
