import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function OptionalSubject() {
  const [activeMenuItem, setActiveMenuItem] = useState(null); // Default to 'faculty' or any other initial active item

  const handleMenuClick = (sectionId) => {
    setActiveMenuItem(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 230;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "id_1",
        "id_2",
        "id_3",
        "id_4",
        "id_5",
        "id_6",
        "id_7",
        "id_8",
        "id_9",
      ];

      // Determine which section is in the viewport
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveMenuItem(sectionId);
            break; // Break to avoid setting activeMenuItem multiple times
          }
        }
      }
    };

    // Add a scroll event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Update screenWidth with the actual window width after component has mounted
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after component mount

  return (
    <div className={styles["topBlogDiv"]}>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",

          flexDirection: "column",
          marginBottom: "50px",
        }}
        className={styles["blog-mainhead"]}
      >
        <div className={styles["new-blog-header"]}>
          <h1 className={styles["blog-tdHead"]}>
            <span style={{ fontWeight: 700 }}>
              How to Pick the Right Optional Subject for UPSC?
            </span>
          </h1>
          <p>
            <br />
            <br />
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",

              overflow: "auto", // Add this line to enable horizontal scrolling if necessary
              maxWidth: "100%", // Add this line to make sure the table doesn't exceed the div's width
            }}
          >
            <div
              style={{
                width: screenWidth > 800 ? "80%" : "100%",
              }}
            >
              <p
                style={{
                  borderBottom: "none",
                  textAlign: "center",

                  padding: "10px",
                  border: "1px solid black",
                  borderBottom: "none",
                  backgroundColor: "#C9DAF8",
                }}
                className={styles["blog-p"]}
              >
                <strong>Index</strong>
              </p>
            </div>
            <table
              style={{
                width: screenWidth > 800 ? "80%" : "100%",
                // Set the table's width to 100% to make it fit the div
                tableLayout: "fixed", // Set table layout to fixed to prevent column widths from expanding
                textAlign: "center",
              }}
              className={`${styles["blog-p"]} ${styles["tableDes"]}}`}
            >
              <thead>
                <tr className={styles["blog-td"]}>
                  <th
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p>
                      <strong>Section</strong>
                    </p>
                  </th>
                  <th
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p>
                      <strong>Section Number</strong>
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p
                      onClick={() => {
                        handleMenuClick("id_1");
                      }}
                      className={styles["indexStyle"]}
                    >
                      <span style={{ fontWeight: 400 }}>Introduction</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>1.0</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p
                      onClick={() => {
                        handleMenuClick("id_2");
                      }}
                      className={styles["indexStyle"]}
                    >
                      <span style={{ fontWeight: 400 }}>
                        List of Optional Subjects for UPSC
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>2.0</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p
                      onClick={() => {
                        handleMenuClick("id_3");
                      }}
                      className={styles["indexStyle"]}
                    >
                      <span style={{ fontWeight: 400 }}>
                        Why is the Optional Subject for UPSC
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>3.0</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p
                      onClick={() => {
                        handleMenuClick("id_4");
                      }}
                      className={styles["indexStyle"]}
                    >
                      <span style={{ fontWeight: 400 }}>
                        The Six-Step Formula to Select the Best Optional Subject
                        for UPSC
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>4.0</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p
                      onClick={() => {
                        handleMenuClick("id_5");
                      }}
                      className={styles["indexStyle"]}
                    >
                      <span style={{ fontWeight: 400 }}>Conclusion</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>5.0</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p
                      onClick={() => {
                        handleMenuClick("id_6");
                      }}
                      className={styles["indexStyle"]}
                    >
                      <span style={{ fontWeight: 400 }}>
                        Frequently Asked Questions
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>6.0</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>&nbsp;</p>

          <h2 id="id_1" className={styles["blog-subHead"]}>
            <strong style={{ fontWeight: 400 }}>1.0 Introduction</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Selecting the right optional subject for UPSC can be a tough
              decision for aspirants. Your choice not only influences your
              success but also reflects your interests and strengths. In this
              overview, I will explore the process, sharing important factors
              for you to think about when picking your optional subject.&nbsp;
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              During the early stages of preparation, select your optional
              subject carefully. Aspirants often make this mistake and delve
              into GS preparation before selecting their optional but it is not
              the right approach as reiterated by several successful candidates.
              You should figure out your optional subject as early as possible
              in your preparation. Clarity at an early stage ensures a balanced
              approach between General Studies and the optional subject, which
              requires in-depth study.&nbsp;
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              My goal is to help you understand and make a smart choice for your
              UPSC journey.
            </span>
          </p>
          <h2
            id="id_2"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              2.0 List of optional subjects for UPSC
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              UPSC provides a variety of subjects to choose from, such as
              History, Geography, and Public Administration, which many people
              prefer, and subjects like Anthropology and Philosophy, which are
              more specialized. Each subject has its own difficulties and
              advantages, allowing you to match your interests and skills with
              your UPSC studies.
            </span>
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              marginTop: "30px",
              justifyContent: "center",
              overflow: "auto", // Add this line to enable horizontal scrolling if necessary
              maxWidth: "100%", // Add this line to make sure the table doesn't exceed the div's width
            }}
          >
            <table
              style={{
                width: screenWidth > 800 ? "80%" : "100%", // Set the table's width to 100% to make it fit the div
                tableLayout: "fixed", // Set table layout to fixed to prevent column widths from expanding
                textAlign: "center",
              }}
              className={`${styles["blog-p"]} ${styles["tableDes"]}}`}
            >
              <tbody>
                <tr className={styles["blog-td"]}>
                  <th
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    colSpan={2}
                    className={styles["blog-td"]}
                  >
                    <p>
                      <strong>Optional Subjects</strong>
                    </p>
                  </th>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Agriculture</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Electrical Engineering
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Animal Husbandry and Veterinary Science
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Geography</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Anthropology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Geology</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Botany</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>History</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Chemistry</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Law</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Civil Engineering</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Management</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Commerce and Accountancy
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Mathematics</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Economics</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Mechanical Engineering
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Medical Science</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Philosophy</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Physics</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Political Science and International Relations
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Psychology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Public Administration
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Sociology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Statistics</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              UPSC Mains offers a diverse range of literature subjects to choose
              from for optional papers as well. These subjects include{" "}
            </span>
            <strong>
              Assamese Literature, Bengali Literature, Bodo Literature, Dogri
              Literature, Gujarati Literature, Hindi Literature, Kannada
              Literature, Kashmiri Literature, Konkani Literature, Maithili
              Literature, Malayalam Literature, Manipuri Literature, Marathi
              Literature, Nepali Literature, Odia Literature, Punjabi
              Literature, Sanskrit Literature, Santhali Literature, Sindhi
              Literature, Tamil Literature, Telugu Literature, and Urdu
              Literature
            </strong>
            <span style={{ fontWeight: 400 }}>.</span>
          </p>
          <h2
            id="id_3"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              {" "}
              3.0 Why is the Optional Subject for UPSC so Important?
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Before I delve into the six-step formula for choosing the best
              optional subject, let's understand why this decision is paramount
              to your success in the UPSC exam.
            </span>
          </p>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li
              className={`${styles["blog-p"]} ${styles["addMargin"]}`}
              style={{ fontWeight: 400 }}
            >
              <span style={{ fontWeight: 400 }}>
                If we analyse recent trends among UPSC rankers, we find that the
                marks scored by them in their optional subject range between
                270-330 out of 500, which is higher than the average marks
                scored by them in GS papers.
              </span>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin"]}`}
              style={{ fontWeight: 400 }}
            >
              <span style={{ fontWeight: 400 }}>Looking at </span>
              <strong>
                UPSC CSE 2023 topper Ishita Kishore&rsquo;s scorecard
              </strong>
              <span style={{ fontWeight: 400 }}>
                , she secured 313 out of 500 in her mains subject whereas in GS
                subjects she got 451 out of 1000. This contrast in the
                percentages indicates that your choice of an optional subject is
                not merely about qualifying for the Mains exam but can
                substantially boost your ranking.
              </span>
            </li>
          </ul>
          <h2
            id="id_4"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              4.0 The Six-Step Formula to Select the Best Optional Subject for
              UPSC{" "}
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              I have devised a systematic six-step formula to assist you in
              choosing the optimal optional subject for your UPSC exam. This
              formula is designed to simplify the process and make it easier for
              students to understand.
            </span>
          </p>
          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>
              4.1 Choose What Interests You
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Start by looking at the subjects offered by UPSC and pick the ones
              that match your interests and background. You can figure this out
              based on your education, what you like, and what you're good at.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              For example, if you've studied Economics, choosing it as your
              optional subject is smart because you already know the basics.
              Humanities graduates might lean towards Philosophy or Sociology,
              while science and tech fans could go for Anthropology, which has a
              scientific angle. If you're an engineering student, consider your
              specific engineering field, mathematics, or physics
            </span>
          </p>
          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>
              4.2 Examine Scoring Trends
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              While scoring trends aren't the sole criteria, it's essential to
              consider the historical performance of optional subjects in
              previous UPSC exams. While this should not be the primary factor,
              it can be a part of your selection process.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              The Department of Personnel and Training (DoPT) unveiled the
              Success-Rate of Optional Subjects in UPSC 2019, offering valuable
              insight into the performance of candidates. Let&rsquo;s have a
              look at it. Remember, the "success rate" of a certain subject is
              the percentage of candidates who chose a specific subject and were
              recommended after appearing in UPSC mains.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              overflow: "auto", // Add this line to enable horizontal scrolling if necessary
              maxWidth: "100%", // Add this line to make sure the table doesn't exceed the div's width
            }}
          >
            <table
              style={{
                width: screenWidth > 800 ? "80%" : "100%", // Set the table's width to 100% to make it fit the div
                tableLayout: "fixed", // Set table layout to fixed to prevent column widths from expanding
                textAlign: "center",
              }}
              className={`${styles["blog-p"]} ${styles["tableDes"]}}`}
            >
              <tbody>
                <tr className={styles["blog-td"]}>
                  <td
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p>
                      <strong>Optional Subjects</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p>
                      <strong>Success Rate in Percentage</strong>
                    </p>
                  </td>
                </tr>

                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Animal Husbandry & Veterinary Science</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>18.80%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Management</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>11.10%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Commerce &amp; Accountancy</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>10.90%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Economics</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>10.70%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Agriculture</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>10.50%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Medical Science</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>10.50%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Civil Engineering</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>10.30%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Law</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>10.20%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Sociology</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>10.00%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Anthropology</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>9.10%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Zoology</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>9.10%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Psychology</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>9.10%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Chemistry</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>8.30%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Mathematics</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>8.30%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Public Administration</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>8.20%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>
                        Political Science &amp; International Relations
                      </strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>8.20%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Electrical Engineering</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>8.00%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Physics</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>7.30%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Botany</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>7.10%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>History</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>6.80%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Philosophy</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>6.20%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Mechanical Engineering</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>5.60%</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <strong>Geography</strong>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>5.50%</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>

          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>
              4.3 Static vs. Dynamic Nature
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              In UPSC, some subjects are fixed and rely on books, like
              Anthropology, Sociology, and Public Administration &ndash; these
              are called "static subjects." Meanwhile, subjects like Political
              Science and International Relations or History are more "dynamic"
              because they need you to keep up with current events and new
              information. So, when you pick your subject, think about what
              suits you and whether you can stay updated.
            </span>
          </p>
          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>
              4.4 Overlap with General Studies
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              It's important to check how much of your chosen optional subject's
              syllabus matches with the UPSC General Studies (GS) syllabus. More
              overlap means you'll save time because you'll study topics that
              are relevant for both GS and your optional subject. For instance,
              subjects like Mathematics can be good for scoring because they
              don't have much subjectivity, while subjects like Political
              Science and International Relations (PSIR) help you save time
              because a significant part of their syllabus is the same as the GS
              papers.
            </span>
          </p>

          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>
              4.5 Length of the Syllabus
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              The length of the syllabus is another factor to keep in mind.
              Subjects like Philosophy, Political Science and International
              Relations, Geography, Management, Economics, Anthropology, Public
              Administration, Sociology, Psychology, and Mathematics generally
              have shorter syllabi compared to subjects like Law. Choosing a
              shorter syllabus isn't enough; don't make it the only reason for
              picking your subject. Focusing too much on this factor might
              result in insufficient preparation.
            </span>
          </p>
          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>
              4.6 Availability of Resources and Mentorship
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Finally, evaluate the availability of resources and mentorship for
              your chosen subject. Research whether comprehensive study
              materials, coaching classes, and mentors specialized in your
              shortlisted optional subjects are readily available.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              For instance, if we observe the success-rate table of the optional
              subjects in the UPSC examination, Animal Husbandry &amp;
              Veterinary Science is the highest-scoring subject, but finding
              good mentorship, coaching classes, and UPSC-focused study
              materials for this subject is very difficult.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              By following these six steps, you can boil the list of subjects
              down to 2-3 subjects. Read briefly about them on the internet to
              make an informed decision about your optional subject for the UPSC
              exam. Remember, your choice will significantly impact your
              success, so take the time to research and consider each criterion
              carefully.
            </span>
          </p>

          <h2
            id="id_5"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>5.0 Conclusion </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              To sum it up, picking the right subject for your UPSC journey is
              super important. Understand the choices, think about what you like
              and are good at, and go for it. Remember, there's no one perfect
              choice, but what really matters is how hard you work and stick
              with it. Good luck with your UPSC journey!
            </span>
          </p>
          <p>&nbsp;</p>
          <h2
            id="id_6"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              {" "}
              6.0 Frequently Asked Questions on Selecting the Best Optional
              Subject for UPSC
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <em>
              <span style={{ fontWeight: 400 }}>
                Q: Can I change my optional subject after I've chosen one for
                UPSC?
              </span>
            </em>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              A: Yes, you can. The UPSC allows candidates to change their
              optional subject, but there are specific guidelines and deadlines
              to follow. Be sure to check the UPSC notification for details.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <em>
              <span style={{ fontWeight: 400 }}>
                Q: Are some optional subjects easier than others?
              </span>
            </em>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              A: Each subject has its own challenges, and what's 'easy' or
              'difficult' depends on your background and interests. It's more
              about how well you understand and prepare for your chosen subject.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <em>
              <span style={{ fontWeight: 400 }}>
                Q: How can I find study materials for my optional subject?
              </span>
            </em>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              A: You can find books, online resources, and coaching centers
              specializing in your chosen optional subject. Research and ask for
              recommendations to get the best study materials.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <em>
              <span style={{ fontWeight: 400 }}>
                Q: Can I take two optional subjects in the UPSC exam?
              </span>
            </em>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              A: No, UPSC only allows one optional subject for the Mains exam.
              You need to choose one subject and stick with it.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <em>
              <span style={{ fontWeight: 400 }}>
                Q: What if I don't have a background in any of the available
                optional subjects?
              </span>
            </em>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              A: It's not uncommon. In such cases, choose a subject that
              genuinely interests you and start your preparation well in advance
              to cover the syllabus comprehensively.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OptionalSubject;
