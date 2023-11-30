import React, {useState, useEffect} from 'react'
import Image from "next/image";
import BookImage from "../Assets/bookUPSC.jpg"
import styles from "../../../../styles/coachings/mainBlog.module.css"
function MainBlog() {


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
              UPSC Books - Best books for UPSC Civil Services Examination 2024
            </span>
          </h1>
          <p>&nbsp;</p>
          <div
            style={{
              width: "100%",

              display: "flex",
              justifyContent: "center",
            }}
            className="mt-2 mb-2"
          >
            <Image
              src={BookImage}
              style={{
                height: screenWidth < 800 ? "100%" : "481.5px",
                width: screenWidth < 800 ? "100%" : "856px",
              }}
              alt="Student preparing for UPSC exam"
            />
          </div>
          <p>&nbsp;</p>
          <p className={styles["blog-p"]}>
            <span style={{ fontWeight: 400 }}>
              Embarking on the journey to crack the UPSC Civil Services
              Examination requires a meticulous preparation strategy. A pivotal
              aspect of this strategy is selecting the right books that cover
              the expansive syllabus comprehensively while also providing
              insightful analysis to aid understanding. This article presents an
              extensive list of recommended books for both the Prelims and Mains
              examinations, spanning across General Studies papers and a diverse
              range of optional subjects. As you steer through the preparation
              path for the UPSC Civil Services Examination 2024, this curated
              list aims to serve as a reliable resource, facilitating a
              structured and effective study approach.
            </span>
          </p>
          <p>&nbsp;</p>
          <h2 className={styles["blog-subHead"]}>
            <span style={{ fontWeight: 400 }}>UPSC Books for Prelims</span>
          </h2>
          <p>&nbsp;</p>
          <p className={styles["blog-p"]}>
            <span style={{ fontWeight: 400 }}>
              The UPSC Civil Services journey begins with the Preliminary
              Examination, which comprises two papers: General Studies Paper - I
              and CSAT (Civil Services Aptitude Test). Clearing this stage makes
              candidates eligible for the Mains Examination. The following list
              provides detailed book recommendations for the preparation of the
              UPSC Prelims Examination 2024, encompassing crucial subjects such
              as History, Geography, Polity, and Economics. These books, ranging
              from foundational NCERT textbooks to specialized ones by esteemed
              authors, are tailored to equip aspirants with a comprehensive
              understanding to excel in the Prelims.
            </span>
          </p>
          <p>
            <br />
            <br />
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
                width: screenWidth > 800 ? "80%" : "100%",
                // Set the table's width to 100% to make it fit the div
                tableLayout: "fixed", // Set table layout to fixed to prevent column widths from expanding
                textAlign: "center",
              }}
              className={`${styles["blog-p"]} ${styles["tableDes"]}}`}
            >
              <tbody>
                <tr className={styles["blog-td"]}>
                  <td
                    className={styles["blog-td"]}
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                  >
                    <p>
                      <strong>Subject</strong>
                    </p>
                  </td>
                  <td
                    className={styles["blog-td"]}
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                  >
                    <p>
                      <strong>Book</strong>
                    </p>
                  </td>
                  <td
                    className={styles["blog-td"]}
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                  >
                    <p>
                      <strong>Author / Publisher</strong>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={6} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>History</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        India’s Struggle for Independence
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Bipan Chandra</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Indian Art &amp; Culture
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Nitin Singhania</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        History of Medieval India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Satish Chandra</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Concise History of Modern India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Sujata Menon</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        NCERT 11th Ancient and Medieval
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        NCERT 12th Modern Indian History
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={4} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Geography</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>World Atlas</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Orient Black Swan</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Certificate Physical Geography
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>G C Leong</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        NCERT VI-X Old Syllabus
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        NCERT XI, XII New Syllabus
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={4} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Polity</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Indian Polity</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>M Laxmikant</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Economic Development &amp; Policies in India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Jain &amp; Ohri</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Introduction to the Constitution of India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>DD Basu</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT IX-XII</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={3} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Economics</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Indian Economy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Nitin Singhania</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Economic Development &amp; Policies in India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Jain &amp; Ohri</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT XI</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={2} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        International Relations
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        NCERT XII (Contemporary World Politics)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Current Affairs</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>&nbsp;</td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={2} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>CSAT</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Tata McGraw Hill CSAT Manual
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>McGraw Hill</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Modern Approach to Verbal &amp; Non-Verbal Reasoning
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Dr. R.S. Aggarwal</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>&nbsp;</p>
          <h2 className={styles["blog-subHead"]}>
            <span style={{ fontWeight: 400 }}>
              UPSC Books for Mains Examination
            </span>
          </h2>
          <p>&nbsp;</p>
          <p className={styles["blog-p"]}>
            <span style={{ fontWeight: 400 }}>
              The candidates who qualify for the UPSC Prelims examination will
              be eligible for the IAS Mains examination. The Mains examination
              consists of 9 theory papers, out of which 2 papers are optional.
              The following list provides detailed book recommendations for the
              preparation of the UPSC Mains Examination 2024, covering both the
              mandatory General Studies papers and the optional subjects. The
              books are authored by experts, ensuring a thorough preparation for
              each subject as per the latest syllabus.
            </span>
          </p>
          <p>
            <br />
            <br />
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
                width: screenWidth > 800 ? "80%" : "100%",
                // Set the table's width to 100% to make it fit the div
                tableLayout: "fixed", // Set table layout to fixed to prevent column widths from expanding
                textAlign: "center",
                whiteSpace: "normal",
              }}
              className={`${styles["blog-p"]} ${styles["tableDes"]}}`}
            >
              <tbody
                style={{
                  whiteSpace: "normal",
                }}
              >
                <tr className={styles["blog-td"]}>
                  <td
                    className={styles["blog-td"]}
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                  >
                    <p>
                      <strong>Mains Paper</strong>
                    </p>
                  </td>
                  <td
                    className={styles["blog-td"]}
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                  >
                    <p>
                      <strong>Subject</strong>
                    </p>
                  </td>
                  <td
                    className={styles["blog-td"]}
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                  >
                    <p>
                      <strong>Book</strong>
                    </p>
                  </td>
                  <td
                    className={styles["blog-td"]}
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                  >
                    <p>
                      <strong>Author / Publisher</strong>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={10} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>GS Paper 1&nbsp;</span>
                    </p>
                  </td>
                  <td rowSpan={5} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        History, Indian Heritage Culture
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Ancient India</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>RS Sharma</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Indian Art and Culture
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Nitin Singhania</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        History of Medieval India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Satish Chandra</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        India after Independence
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Bipan Chandra</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        India’s Struggle for Independence
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Bipan Chandra</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Geography</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>World Geography</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Majid Hussain</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Geography of India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Majid Hussain</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Certificate Physical and Human Geography
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>GC Leong</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>World Atlas&nbsp;</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Orient Black Swan</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Fundamentals of Physical Geography NCERT Class 11
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={3} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>GS Paper 2</span>
                    </p>
                  </td>
                  <td rowSpan={3} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Polity &amp; International Relations
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Indian Polity</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>M. Laxmikanth</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        International Relations
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Pushpesh Pant</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Introduction to the Constitution of India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>DD Basu</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={3}>
                    <p>
                      <span style={{ fontWeight: 400 }}>GS Paper 3</span>
                    </p>
                  </td>
                  <td rowSpan={3} className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Economy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Indian Economy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Nitin Singhania</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Environment and Disaster Management
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Tata McGraw Hill</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Challenges to Internal Security of India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Ashok Kumar</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>GS Paper 4</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Ethics</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Ethics, Integrity and Aptitude for Civil Services Main
                        Examination
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Subba Rao and P.N. Roy Chaudary
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <br />
            <br />
          </p>
          <h2 className={styles["blog-subHead"]}>
            <span style={{ fontWeight: 400 }}>
              UPSC Books for Mains Optional Subjects
            </span>
          </h2>
          <p>&nbsp;</p>
          <p className={styles["blog-p"]}>
            <span style={{ fontWeight: 400 }}>
              Selecting an optional subject is a pivotal decision for UPSC
              aspirants as it holds substantial weightage in the Mains
              Examination. The optional subject choice should align with the
              aspirant's interest, academic background, and the scope of scoring
              well. Each optional subject has its set of recommended books
              authored by experts to provide a deep understanding of the topics
              covered. The following list enumerates the recommended books for
              various optional subjects, catering to the diverse academic
              backgrounds of the aspirants. These books are meticulously chosen
              to aid in a comprehensive preparation for excelling in the chosen
              optional subject in the UPSC Mains Examination 2024
            </span>
          </p>
          <p>
            <br />
            <br />
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
                    className={styles["blog-td"]}
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                  >
                    <p>
                      <strong>Subject</strong>
                    </p>
                  </td>
                  <td
                    className={styles["blog-td"]}
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                  >
                    <p>
                      <strong>Book Title</strong>
                    </p>
                  </td>
                  <td
                    className={styles["blog-td"]}
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                  >
                    <p>
                      <strong>Author / Publisher</strong>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Agriculture</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Fundamentals Of Agricultural Extension Education
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>U Barman</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A Text Book of Agricultural Statistics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>R. Rangaswamy</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Agronomy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Yellamanda Reddy</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Entomology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Vasantha Raj &amp; David
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Genetics</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>B.D.Singh</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Animal Husbandry and Veterinary Science
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A guide on forest Entomology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Regupathy</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A Textbook Of Animal Husbandry
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>G C Banerjee</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Advanced Animal Nutrition
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>D. V Reddy</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Agricultural Economics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>S Subba Reddy</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Animal husbandry &amp; veterinary science
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>T.N. Palanivelu</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Anthropology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Physical Anthropology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>P Nath</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Fossil Evidence</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>S Das</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Social Anthropology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        DN Majumdar &amp; T N Madan
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Indian Anthropology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Nadeem Hasnain</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Anthropology Theories
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Makhan Jha</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Botany</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Cell Biology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        De Robertis &amp; Ambrose and Easy or Powar
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Cryptograms</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>B.R. Vasista</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Botany for Degree Students; Pteridophyta (Vascular
                        Cryptogams)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>P.C. Vashishta</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Ecology, Microbiology, Animal Behaviour, Pollution and
                        Toxicology For B. Sc. Part III, Paper III
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Dr Veer Bala Rastogi
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Economic botany in the tropics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>S. L. Kochhar</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Chemistry</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A guide to mechanism in organic chemistry
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Peter Sykes</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A textbook of environmental chemistry and pollution
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>S.S. Dara</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A textbook of organic chemistry
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Bahl &amp; Ba</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A textbook of physical chemistry (Vol. – IV)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>K.L. Kapoor</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Advance physical chemistry
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Gurdeep Raj</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Civil Engineering</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Engineering Mechanics: Statics and Dynamics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Irving Herman Shames
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Strength of Material
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Prof. S. Ramamrutham
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Mechanics for Engineers
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>B Johnson</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Structural Analysis
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>C. K. Wang</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Limit state design of steel structures
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>S K Duggal</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Commerce &amp; Accountancy
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Accounting Corporate Accounting
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Naseem Ahmed</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Accounting Standards
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>D. S. Rawat</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Auditing Students’ Guide to Auditing
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Aruna Jha</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Income Tax book</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        V.K. Singhania or Girish Ahuja
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Cost Accounting; Theory &amp; Problems
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Maheshwari &amp; Mittal
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={7}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Economics</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Indian Economy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Ramesh Singh</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        The Indian Economy
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Sanjiv Verma</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Indian Economy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Mishra and Puri</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Indian Economy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        R. Dutt and KPM Sundaram
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Banking</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>S.B. Gupta</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Dictionary of Economics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Graham Bannock; T.E. Baxter, Ray Rees
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        International Trade
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Bo Soderston</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={8}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Electrical Engineering
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Electromagnetic Fields &amp; Waves
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Kd Prasad</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Energy Conversion</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Ashfaq Hussain</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Circuit Theory: Analysis and Synthesis
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>A. Chakrabarti</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Signals and Systems
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Alan V. Oppenheim, Alan V. Willsky, S. Hamid Nawab
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Physics of Semiconductor Devices
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Simon Sze</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Analog Electronics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>J.B. Gupta</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Digital Logic and Computer Design
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>M. Morris Mano</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Principles of Electronics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>V .K. Mehta</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Geography</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A Geography by Population
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>R.C. Chandna</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Agricultural Geography
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Majid Husain</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Climatology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>D.S.Lal</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Economic and Social Geography – Made Simple
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        R.Knowles &amp; J.Wareing
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Economic Geography
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Hartshorn &amp; Truman A
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={6}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Geology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Advancing Frontiers in Geology and Geophysics: A Volume
                        in Honour of M.S. Krishnan
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A P Subramaniam &amp; S. Balakrishnan
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Ananda K. Coomaraswamy Writings on Geology and
                        Mineralogy: Scientific Papers and Comments
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Ranganathan, A. &amp; Rao, K. Srinivasa (Eds.)
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Concise Glossary of Geology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Mathur, S.M.</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Deccan Traverses: The Making of Bangalore’s Terrain
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Mathur, Anuradha &amp; Cunha, Dilip Da
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Delta Sedimentation: East Coast of India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Singh, I.B. &amp; Swamy, A.S.R.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Dimensions of Himalayan Geology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Biyani A.K.</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>History</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A History of South India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        K.A. Nilkantha Sastri
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Ancient India</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Upinder Singh</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Anatomy of the Raj (PPH)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Suhash Chakravarty
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Age of Capital</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>E.J. Hobsbawm</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        The story of Civilization, Vol. 2 (NCERT)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Arjun Dev</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={6}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Law</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>International Law</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>S. K Kapoor</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Our Constitution</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Subhash C. Kashyap
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        The Constitution of India (Bare Act)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>PM Bakshi</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        An Introduction to Public International Law
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>S. K. Verma</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Introduction to the Constitution of India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>D.D Basu</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Constitution of India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>VN Shukla</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Management</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Fundamentals of Management
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        DeCenzo, Agarwal, Bhattacharya and Robbins
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Marketing Management
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Philip Kotler</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Cost and Management Accounting
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>MN Arora</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Organization Behaviour
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Stephen Robbins</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Financial Management
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Prasanna Chandra</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={6}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Mathematics</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Dynamics, Statics and Hydrostatics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>M. Ray</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Differential Calculus
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Shanti Narayan, PK Mittal
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Analytic Geometry</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Shanti Narayan, DK Jha, HC Sinha and Sharma
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Differential equations: Golden series
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NP Bali</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Vector Analysis</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Shanti Narayan, PK Mittal
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Linear Algebra</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        K.C. Prasad, K B Datta
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={6}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Mechanical Engineering
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Thermodynamics</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>R Yadav</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Theory of Mechanics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>S S Rattan</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Heat Conversion</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Arora and Kundwar</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Heat Transfer</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Gupta Prakash</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Heat and Mass Transfer
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>R. Yadav</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Theory of Mechanism and Mechanics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Jagdish Lal</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Medical Science</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Human Anatomy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>B D Chaurasia</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Embryology from I B Singh
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>I B Singh</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Human Physiology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Ganong; Guyton and A.K. Jain book
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Biochemistry</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        U. Satyanarayana book
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Pathology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Robbins, and Cotran
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={7}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Philosophy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A History of Philosophy
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Frank Thilly</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Survey of Indian Philosophy
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>C D Sharma</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Existentialism: A Reconstruction
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>David Cooper</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        An Introduction to Indian Philosophy
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>S Chatterjee</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A History of Philosophy
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Frank Thilly</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        An Introduction to Political Theory
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>O P Gauba</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Introduction to Religious Philosophy
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Y Masih</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Physics</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Any fundamental book on electrical engineering
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        B.L Theraja (Vol 1) or Vincent Del Toro
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Classical Mechanism
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Gupta, Kumar &amp; Sharma – Takewale &amp; Puranik
                        -H.Goldstein
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Electricity &amp; Magnetism
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        D.C. TAyal, B.S. Agarwal, Griffith
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Introduction of Electrodynamics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>David Griffiths</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>EM Theory</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Chopra&amp;Agarwal/Satya Prakash
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Political Science &amp; International Relations
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        An Introduction To Political Theory
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>O.P Gauba</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Fifty Major Political Thinkers
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Ian Adams And R W Dyson
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A History Of Political Thought: Plato To Marx
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Subrata Mukherjee And Sushila Ramaswamy
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        An Oxford Companion To Politics In India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        niraja Gopal Jayal And Pratap Bhanu Mehta
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Foundations Of Indian Political Thought
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>V.R Mehta</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Psychology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Psychology XI &amp; XII Std NCERT
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>NCERT</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Introduction to Psychology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Morgan &amp; King</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Systems &amp; Theories of Psychology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Krawiec &amp; Chaplin
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
                      <span style={{ fontWeight: 400 }}>Morgan and King</span>
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
                      <span style={{ fontWeight: 400 }}>Ciccarelli</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Public Administration
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Administrative Thinkers
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Prasad and Prasad</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Public Administration: Administrative Theories and
                        Concepts
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Fadia &amp; Fadia</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Public Administration and Public Affairs 12th Edition
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Nicholas Henry</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Mohit Bhattacharya- New horizons in Public
                        administration
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Mohit Bhattacharya
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Mohit Bhattacharya- Pub Ad A new look
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Mohit Bhattacharya
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Sociology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Sociology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Anthony Giddens</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Sociological Theory
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Ritzer George</span>
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
                      <span style={{ fontWeight: 400 }}>
                        Haralambos &amp; Holborn
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Oxford Dictionary Of Sociology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>-</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Sociological Thought
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        M Francis Abraham and John Henry Morgan
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Statistics</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        An Introduction to Probability Theory &amp; Mathematical
                        Statistics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>V K Rohtagi</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        An Outline of Statistical Theory (2 Vol.)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A M Goon, M K Gupta and B. Dass Gupta
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Fundamentals of Applied Statistics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        S C Gupta and V K Kapoor
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Fundamentals of Mathematical Statistics
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A C Gupta and V K Kapoor
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Fundamentals of Statistics (2 Vol.)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        A M Goon, M K Gupta and B Dass Gupta
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td rowSpan={5}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Zoology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Modern Zoology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Ramesh Gupta</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Organic Evolution (Evolutionary Biology)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Veer Bala Rastogi</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Ganong’s Review of Medical Physiology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>-</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Guyton and Hall Textbook of Medical Physiology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>-</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Cell Biology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>CB Powar</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>&nbsp;</p>
          <h2 className={styles["blog-subHead"]}>
            <span style={{ fontWeight: 400 }}>Conclusion</span>
          </h2>
          <p>&nbsp;</p>
          <p className={styles["blog-p"]}>
            <span style={{ fontWeight: 400 }}>
              The journey of UPSC preparation extends beyond textbooks and
              encompasses a daily engagement with current affairs. It is
              imperative to stay updated with the happenings around the globe
              and particularly within our country. A well-rounded awareness not
              only enriches your answers in the examination but also broadens
              your perspective, which is essential for a prospective civil
              servant. The perceived toughness of the examination stems more
              from a lack of preparation than the nature of the examination
              itself. Remember, the exam is only as tough as we make it. Hence,
              along with rigorous reading, maintaining a curious mind tuned to
              current events is key to cracking the UPSC Civil Services
              Examination.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainBlog