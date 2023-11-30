import React, { useEffect, useState } from "react";
import Faculty from "../../../Assets/faculty1.png";
import Image from "next/image";
import "@fontsource/poppins";
import styles from "../../../../../../styles/coachings/coachingFaculty.module.css";
import Faculties from "./FacultyCarousel/Faculties";
import FacultyCarousel from "./FacultyCarousel/FacultyCarousel";
function FacultyComponent() {
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
      id="faculty"
      style={{
        marginTop: "30px",
        marginBottom: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F7F9FB",
      }}
    >
      <div
        className="mt-10 mb-10"
        style={{
          width: "90%",
        }}
      >
        <p className={styles["facultyHead"]}>Meet Our Faculty</p>

        <FacultyCarousel />

       
        {/* <div
          className="mt-14 mb-6"
          style={{
            display: "grid",
            gridTemplateColumns: navscreenWidth > 800 ?  "repeat(2, 1fr)":"repeat(1,1fr)",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              display: "flex",

              borderRadius: "8px",
              border: "1px solid #E9EEF2",

              gap: "30px",
              padding: "30px",
            }}
          >
            <div>
              <Image
                style={{
                  height: "270px",
                  width: "270px",
                }}
                src={Faculty}
                alt="dkf"
              />
            </div>
            <div>
              <p className={styles["cardTitle"]}>Purvang Mehta</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Ut enim ad minim veniam, quis nost ullamco laboris nisi ut
                allquip ex
              </p>

              <p className={`${styles["cardTitle"]} mt-3`}>Subject</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                History & Geography
              </p>
              <p className={`${styles["cardTitle"]} mt-3`}>Experience</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                10+ Years
              </p>
            </div>
          </div>
          <div
            style={{
              background: "white",
              display: "flex",

              borderRadius: "8px",
              border: "1px solid #E9EEF2",

              gap: "30px",
              padding: "30px",
            }}
          >
            <div>
              <Image
                style={{
                  height: "270px",
                  width: "270px",
                }}
                src={Faculty}
                alt="dkf"
              />
            </div>
            <div>
              <p className={styles["cardTitle"]}>Purvang Mehta</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Ut enim ad minim veniam, quis nost ullamco laboris nisi ut
                allquip ex
              </p>

              <p className={`${styles["cardTitle"]} mt-3`}>Subject</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                History & Geography
              </p>
              <p className={`${styles["cardTitle"]} mt-3`}>Experience</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                10+ Years
              </p>
            </div>
          </div>

          <div
            style={{
              background: "white",
              display: "flex",

              borderRadius: "8px",
              border: "1px solid #E9EEF2",

              gap: "30px",
              padding: "30px",
            }}
          >
            <div>
              <Image
                style={{
                  height: "270px",
                  width: "270px",
                }}
                src={Faculty}
                alt="dkf"
              />
            </div>
            <div>
              <p className={styles["cardTitle"]}>Purvang Mehta</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Ut enim ad minim veniam, quis nost ullamco laboris nisi ut
                allquip ex
              </p>

              <p className={`${styles["cardTitle"]} mt-3`}>Subject</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                History & Geography
              </p>
              <p className={`${styles["cardTitle"]} mt-3`}>Experience</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                10+ Years
              </p>
            </div>
          </div>
          <div
            style={{
              background: "white",
              display: "flex",

              borderRadius: "8px",
              border: "1px solid #E9EEF2",

              gap: "30px",
              padding: "30px",
            }}
          >
            <div>
              <Image
                style={{
                  height: "270px",
                  width: "270px",
                }}
                src={Faculty}
                alt="dkf"
              />
            </div>
            <div>
              <p className={styles["cardTitle"]}>Purvang Mehta</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                Ut enim ad minim veniam, quis nost ullamco laboris nisi ut
                allquip ex
              </p>

              <p className={`${styles["cardTitle"]} mt-3`}>Subject</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                History & Geography
              </p>
              <p className={`${styles["cardTitle"]} mt-3`}>Experience</p>
              <p
                className={styles["faccardAnswer"]}
                style={{
                  fontFamily: "Poppins",
                }}
              >
                10+ Years
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default FacultyComponent;
