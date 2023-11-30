import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function HowToPrepare() {

    const [activeMenuItem, setActiveMenuItem] = useState(null); // Default to 'faculty' or any other initial active item

    const handleMenuClick = (sectionId) => {
      setActiveMenuItem(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        const offset =
          element.getBoundingClientRect().top + window.scrollY - 230;
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
          "id_9"
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
              Expert's Guide on How to Prepare for UPSC
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
              <tbody>
                <tr className={styles["blog-td"]}>
                  <td
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p
                      style={{
                        fontFamily: "bold",
                      }}
                    >
                      <strong>Section</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p
                      style={{
                        fontFamily: "bold",
                      }}
                    >
                      <strong>Section Number</strong>
                    </p>
                  </td>
                </tr>
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
                        Mental Groundwork for UPSC Preparation
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
                        Essential Items for UPSC Preparation
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
                        Laying Foundation Stones for UPSC Preparation
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
                      <span style={{ fontWeight: 400 }}>Study UPSC PYQ</span>
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
                        Study NCERT Books for UPSC Preparation
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>6.0</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p
                      onClick={() => {
                        handleMenuClick("id_7");
                      }}
                      className={styles["indexStyle"]}
                    >
                      <span style={{ fontWeight: 400 }}>
                        Be Your Own Toughest Evaluator in your UPSC preparation
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>7.0</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p
                      onClick={() => {
                        handleMenuClick("id_8");
                      }}
                      className={styles["indexStyle"]}
                    >
                      <span style={{ fontWeight: 400 }}>Conclusion</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>8.0</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p
                      onClick={() => {
                        handleMenuClick("id_9");
                      }}
                      className={styles["indexStyle"]}
                    >
                      <span style={{ fontWeight: 400 }}>FAQs</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>9.0</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2 id="id_1" className={styles["blog-subHead"]}>
            <strong style={{ fontWeight: 400 }}>1.0 Introduction</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              To do well in the UPSC exam, which is considered one of the
              toughest in the world, the key to success is preparation. Although
              the exam can seem hard, with the right plan, hard work,
              determination, patience, and expert advice, anyone can succeed. In
              this detailed guide, I'll explain simple steps on how to prepare
              for UPSC.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2 id="id_2" className={styles["blog-subHead"]}>
            <strong style={{ fontWeight: 400 }}>
              2.0 Mental Groundwork for UPSC Preparation
            </strong>
          </h2>
          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 200 }}>
              2.1 Embrace the Challenge
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              The UPSC exam may seem extremely challenging, but many people,
              just like you, have tackled it and succeeded. You can do it too!
              To excel in this exam, you need the correct strategy, unwavering
              dedication, hard work, and the right guidance. It requires your
              utmost commitment and effort. It demands the ultimate
              &ldquo;aatma-samarpan.&rdquo;
            </span>
          </p>
          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 200 }}>2.2 Define Your Purpose</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Before you begin your UPSC preparation, it's essential to define
              your 'why.' Ask yourself why you want to prepare for the UPSC exam
              and what you aim to achieve. Whether it's a passion for serving
              your country, a desire for positive change, or personal goals,
              clarifying your purpose is crucial. Once you have a clear sense of
              why you're doing this, jot it down on a sticky note and place it
              on your study table. This note will remind you of your goal,
              helping you stay focused and motivated, especially when facing
              challenges.
            </span>
          </p>
          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 200 }}>
              2.3 Commitment and Self-Honesty
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              To succeed in UPSC, you need to be aware of yourself and give your
              best effort every day. It's not an easy journey, and it's not for
              those who give up easily. Be honest with yourself. Recognize your
              strengths, but most importantly, acknowledge your weaknesses. Take
              a moment to reflect on your strengths and weaknesses. Write them
              down and use this self-awareness to plan your UPSC preparation
              more effectively.
            </span>
          </p>
          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 200 }}>
              2.4 Channeling UPSC Success Stories for Motivation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              To stay motivated on your UPSC journey, consider finding
              inspiration in the stories of successful candidates. Platforms
              like the Josh Talks YouTube channel have many uplifting accounts
              of individuals who overcame challenges to excel in UPSC. These
              stories can reenergize your preparation and determination. I
              suggest looking into the journey of IAS officer Govind Jaiswal,
              who faced significant obstacles but achieved his goal through
              perseverance and hard work. His story highlights the importance of
              determination and effort.
            </span>
          </p>
          <h2 id="id_3" className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>
              3.0 Essential Items for UPSC preparation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Getting ready for the UPSC exam needs a smart plan and having the
              right tools. If you want to begin your UPSC preparation like an
              expert, ensure you have these important items. I will explain the
              importance of these items at different stages later in this
              article.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong style={{ fontWeight: 200 }}>3.1</strong>{" "}
            <strong style={{ fontWeight: 200 }}>UPSC Syllabus: </strong>
            <span style={{ fontWeight: 400 }}>
              It is important to always keep a copy of the UPSC Syllabus on your
              study table and in your bag.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong style={{ fontWeight: 200 }}>
              {" "}
              3.2 A dedicated study table:{" "}
            </strong>
            <span style={{ fontWeight: 400 }}>
              A comfortable and well-lit study space is crucial for focused
              preparation as you will spend most of your preparation time here.
              If you cannot purchase a study table, designate a specific part of
              your room as your study arena.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong style={{ fontWeight: 200 }}>3.3 Files and Folders:</strong>{" "}
            <span style={{ fontWeight: 400 }}>
              Organize your study materials with dedicated file and folders for
              each subject or topic.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong style={{ fontWeight: 200 }}>
              3.4 Planner and Calendar:{" "}
            </strong>
            <span style={{ fontWeight: 400 }}>
              Use a planner to schedule your study sessions and set goals.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong style={{ fontWeight: 200 }}>3.5</strong>{" "}
            <strong style={{ fontWeight: 200 }}>Highlighters: </strong>
            <span style={{ fontWeight: 400 }}>
              To mark key points in your study materials for quick revision.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong style={{ fontWeight: 200 }}>3.6</strong>{" "}
            <strong style={{ fontWeight: 200 }}>
              Notepads &amp; Sticky Notes
            </strong>
            <span style={{ fontWeight: 400 }}>
              : These are handy for taking quick notes, reminders, and marking
              important sections in your books.
            </span>
          </p>
          <h2 id="id_4" className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>
              4.0 Laying Foundation stones for UPSC preparation
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong style={{ fontWeight: 200 }}>
              4.1 Explore the UPSC Syllabus
            </strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              To lay a solid foundation, it's crucial to break down the UPSC
              syllabus. The UPSC Civil Services Examination has been divided
              into three tiers &ndash; Preliminary Examination, Mains
              Examination and UPSC Personality Test. Here&rsquo;s a brief
              overview of the syllabus:
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong>UPSC Prelims Syllabus</strong>
          </p>
          <table
            style={{
              width: screenWidth > 800 ? "100%" : "100%", // Set the table's width to 100% to make it fit the div
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
                    <strong>Paper</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: "#C9DAF8",
                  }}
                  className={styles["blog-td"]}
                >
                  <p>
                    <strong>Subjects</strong>
                  </p>
                </td>
              </tr>
              <tr className={styles["blog-td"]}>
                <td className={styles["blog-td"]}>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Paper I (General Studies)
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    textAlign: "left",
                  }}
                  className={styles["blog-td"]}
                >
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Current events of national and international importance
                    </span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      History of India and Indian National Movement, Indian and
                      World Geography &ndash; Physical, Social, Economic
                      Geography of India and the World
                    </span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Indian Polity and Governance &ndash; Constitution,
                      Political System, Panchayati Raj, Public Policy, Rights
                      Issues, etc.
                    </span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Economic and Social Development &ndash; Sustainable
                      Development, Poverty, Inclusion, Demographics, Social
                      Sector Initiatives, etc.
                    </span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      General Issues on Environmental Ecology, Biodiversity and
                      Climate Change &ndash; that do not require subject
                      specialization.
                    </span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>General Science</span>
                  </p>
                </td>
              </tr>
              <tr className={styles["blog-td"]}>
                <td className={styles["blog-td"]}>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Paper II (Civil Services Aptitude Test)
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    textAlign: "left",
                  }}
                  className={styles["blog-td"]}
                >
                  <p>
                    <span style={{ fontWeight: 400 }}>Comprehension.</span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Interpersonal skills including communication skills.
                    </span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Logical Reasoning and analytical ability
                    </span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Decision making and problem solving
                    </span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      General mental ability
                    </span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Basic Numeracy (numbers and their relations, orders of
                      magnitude, etc.) (Class X level), Data interpretation
                      (charts, graphs, tables, data sufficiency etc &ndash;
                      Class X level)
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong>UPSC Mains Syllabus</strong>
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
                width: screenWidth > 800 ? "100%" : "100%", // Set the table's width to 100% to make it fit the div
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
                      <strong>Paper</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p>
                      <strong>Subjects</strong>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Paper I</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Essay writing</span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Paper II</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        General Studies I: Indian Heritage and Culture, History,
                        and Geography of the World and Society
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Paper III</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        General Studies II: Governance, Constitution, Polity,
                        Social Justice, and International relations
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Paper IV</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        General Studies III: Technology, Economic Development,
                        Bio-diversity, Environment, Security and Disaster
                        Management
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Paper V</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        General Studies IV: Ethics, Integrity, and Aptitude
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Paper VI &amp; VII
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Optional Subject (Paper I &amp; II)
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <p className={styles["blog-p"]}>
            <a
              style={{
                color: "var(--primary-blue-800, #2075B3)",
              }}
              href="https://s3-ap-south-1.amazonaws.com/adda247jobs-wp-assets-adda247/articles/wp-content/uploads/2022/11/09164954/upsc-mains-syllabus.pdf"
            >
              {" "}
              <span style={{ fontWeight: 400 }}> Click here</span>
            </a>
            <span style={{ fontWeight: 400 }}>
              {" "}
              to download the detailed syllabus of UPSC Civil Services Exam.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong>UPSC Interview</strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              The interview assesses the personality, knowledge, and mental
              traits of the candidate. It is not based on a specific syllabus,
              but candidates should be prepared to discuss topics related to
              their background, interests, and the world around them. Questions
              may cover current affairs, your hobbies, your educational and
              professional background, and more. The key is to be well-informed
              and confident.
            </span>
          </p>
          <p className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 200 }}>
              4.2 Dissect the UPSC Syllabus
            </strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong>Break the </strong>
            <strong>Syllabus</strong>
            <strong> into Themes and Sectors</strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Analyzing the UPSC syllabus requires patience and a systematic
              approach. To begin, it's essential to break down the extensive
              syllabus into distinct themes and categories. I have broken it
              down for you into 28 different themes below.
            </span>
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              marginTop: "10px",
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
                      width: "100px",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p>
                      <strong>S.no</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p>
                      <strong>Theme</strong>
                    </p>
                  </td>
                  <td
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p>
                      <strong>Explanation</strong>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>1</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Indian Heritage and Culture
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Study of India's cultural and historical heritage.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>2</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        History of the World
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Global historical events and their impact.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>3</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Geography of the World
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        World geography, regions, and landforms.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>4</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Society</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Social issues, diversity, and Indian society.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>5</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Governance</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Systems of governance, public administration.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>6</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Constitution and Polity
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        India's Constitution, political institutions.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>7</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Social Justice</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Equity, rights, and social justice in India.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>8</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        International Relations
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Global diplomacy, foreign policy, and treaties.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>9</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Technology</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Technological advancements and their impact.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>10</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Economic Development
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Indian and global economic policies and growth.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>11</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Biodiversity</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Biodiversity conservation and ecosystems.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>12</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Environment</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Environmental issues, conservation, and ecology.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>13</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Security</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        National and international security concerns.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>14</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Disaster Management
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Different types, disaster preparedness, response, and
                        recovery.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>15</span>
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
                        Ethical principles, values, and moral philosophy.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>16</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Integrity</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Moral and ethical integrity in governance.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>17</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Aptitude</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Logical reasoning, problem-solving, and aptitude.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>18</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Optional Subject (Paper I)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        First paper on the chosen optional subject.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>19</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Optional Subject (Paper II)
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Second paper on the chosen optional subject.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>20</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Indian Economy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Economic policies, growth, and development.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>21</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Food Security</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Food-related policies, subsidies, and distribution.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>22</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Science and Technology
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Scientific developments and their applications.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>23</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Ethics and Public and Private Administration
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Ethical considerations in governance and business.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>24</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        India and its Neighbors
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Relations with neighboring countries and issues.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>25</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Agreements and Treaties
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Bilateral, regional, and global agreements.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>26</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>Indian Diaspora</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Indian communities abroad and their influence.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>27</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Global Influence on India
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Impact of developed and developing countries.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr className={styles["blog-td"]}>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>28</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        International Institutions
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Roles and functions of global organizations.
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <p className={styles["blog-p"]}>
            <span style={{ fontWeight: 400 }}>
              Alternatively, Dr Khan Sir, the visionary behind KSG India, has
              deconstructed the UPSC Mains syllabus into 67 themes. This
              breakdown serves as a valuable resource for adopting a focused and
              strategic approach to the examination. For access to Dr Khan Sir's
              comprehensive syllabus breakdown in PDF format, please follow this
            </span>
            <a href="https://drive.google.com/file/d/1Df6N_qqkk2rJ173nCNeKJkw_AWPH9Sin/view">
              {" "}
              <span style={{ fontWeight: 400 }}>link</span>
            </a>
            <span style={{ fontWeight: 400 }}>.</span>
          </p>
          <p className={styles["blog-p"]}>
            <span style={{ fontWeight: 400 }}>
              You can use these breakups as a foundation to gain a fundamental
              understanding of how to divide the syllabus and implement a more
              intelligent strategy in preparing for the UPSC exam.
            </span>
          </p>
          <h2 className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 200 }}>
              4.3 Pro Tips to study UPSC syllabus
            </strong>
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li
              style={{
                marginTop: "10px",
              }}
            >
              <strong className={styles["blog-p"]}>Files and Folders</strong>
              <span className={styles["blog-p"]} style={{ fontWeight: 400 }}>
                : Maintaining separate folders for every subject/theme helps you
                stay organized. Srushti Jayant Deshmukh, who secured AIR 5 in
                UPSC CSE 2018, also emphasized the benefits of dissecting the
                syllabus and maintaining separate files and folders for each
                topic in a
              </span>
              <a
                className={styles["blog-p"]}
                href="https://www.youtube.com/watch?v=7KMUBfa_91Y"
              >
                {" "}
                <span style={{ fontWeight: 400 }}>video</span>
              </a>
              <span className={styles["blog-p"]} style={{ fontWeight: 400 }}>
                {" "}
                for LBSNAA. This organization proved to be invaluable during her
                revision period. You can create dedicated files for each theme
                or topic, consolidating all your relevant materials, such as
                newspaper clippings, sticky notes, summaries of current affairs,
                and static notes, in one centralized location to keep your study
                materials impeccably organized.
              </span>
            </li>
            <li
              style={{
                marginTop: "10px",
              }}
            >
              <strong className={styles["blog-p"]}>
                Syllabus on the Table:
              </strong>
              <span className={styles["blog-p"]} style={{ fontWeight: 400 }}>
                {" "}
                Ensure you always have the UPSC syllabus on your study desk. It
                serves as a constant reminder of your progress and the path
                ahead, keeping you on track.
              </span>
            </li>
          </ul>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2 id="id_5" className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 200 }}>5.0 Study UPSC PYQ</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Studying old question papers is like building a strong foundation.
              It helps you understand how the exam works and what the examiners
              want. At first, it might seem confusing, but do not worry. The
              goal here is to gain a basic understanding of how the questions
              are framed and just going through all the questions can give you a
              basic idea of what to expect.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong>How to study UPSC previous year questions?</strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>Here is how I do it:</span>
          </p>
          <p className={styles["addMargin"]}>
            <strong className={`${styles["blog-p"]}`}>
              Step 1: Organize Year by Year :
            </strong>
            <span className={styles["blog-p"]} style={{ fontWeight: 400 }}>
              {" "}
              Start by arranging the old question papers by the year they were
              from. Also, keep the syllabus handy. This way, you can see how the
              questions relate to what you need to study.
            </span>
          </p>
          <p className={styles["addMargin"]}>
            <strong className={`${styles["blog-p"]}`}>
              Step 2: Systematic Reading :
            </strong>
            <span className={styles["blog-p"]} style={{ fontWeight: 400 }}>
              {" "}
              Go through the questions one by one. Look for common themes or
              topics that come up a lot. This gives you a quick sense of what's
              important.
            </span>
          </p>
          <p className={styles["addMargin"]}>
            <strong className={`${styles["blog-p"]}`}>
              Step 3: Understand Question Types :
            </strong>
            <span className={styles["blog-p"]} style={{ fontWeight: 400 }}>
              {" "}
              Pay attention to the different ways questions are asked.
              Sometimes, UPSC might ask you to explain, describe, comment on, or
              discuss various topics. I'll explain these terms later in this
              article.
            </span>
          </p>
          <p className={styles["addMargin"]}>
            <strong className={`${styles["blog-p"]}`}>
              Step 4: Understanding the UPSC PYQ Difficulty :{" "}
            </strong>
            <span className={styles["blog-p"]} style={{ fontWeight: 400 }}>
              Figuring out how hard or easy the questions are is important. It
              helps you choose which ones to answer in the actual exam. This
              skill gets better with practice.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Let's compare two questions from UPSC CSE 2023:
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong>
              Q1: What was the difference between Mahatma Gandhi and
              Rabindranath Tagore in their approach towards education and
              nationalism? (Modern History)
            </strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong>
              Q2: Why is the world today confronted with a crisis of
              availability of and access to freshwater resources.
            </strong>{" "}
            <strong>(Geography)</strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              The first question is more straightforward. If you've read about
              Gandhi and Tagore's ideas on education, you can write about them
              directly. The second question is trickier. You'll need a global
              view, talk about the reasons, and even mention ongoing river
              disputes in India. So, the second question is harder.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              By practicing regularly, you'll get better at quickly
              understanding question difficulty. This will help you answer them
              more effectively in the exam
            </span>
            <strong>.</strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong>Step 5: Take Notes</strong>
            <span
              className={`${styles["blog-p"]} ${styles["addMargin"]}`}
              style={{ fontWeight: 400 }}
            >
              {" "}
              Jot down the key things you learn from your analysis. This will
              help you plan your study time and improve your overall
              performance.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              By following this organized approach, you can effectively study
              previous year's question papers for UPSC and understand the exam's
              ins and outs.
            </span>
          </p>
          <h2 id="id_6" className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 200 }}>
              6.0 Study NCERT Books for UPSC preparation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              After understanding the syllabus and papers, it is the best time
              for you to start reading textbooks and build a strong academic
              foundation. It's widely believed that no matter how good you are,
              it's important to read the NCERTs. Starting this habit early, even
              if you already know a lot, will increase your grasping power in
              the coming days.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Here's a list of NCERTs that every aspirant MUST read before
              delving deep into GS and optional subjects:
            </span>
          </p>
          <table
            style={{
              width: screenWidth > 800 ? "100%" : "100%", // Set the table's width to 100% to make it fit the div
              tableLayout: "fixed", // Set table layout to fixed to prevent column widths from expanding
              textAlign: "left",
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
                    <strong>Subjects</strong>
                  </p>
                </td>
                <td
                  style={{
                    backgroundColor: "#C9DAF8",
                  }}
                  className={styles["blog-td"]}
                >
                  <p>
                    <strong>Must Read NCERT Books</strong>
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
                    <a href="https://amzn.to/2ruF0HJ">
                      <span style={{ fontWeight: 400 }}>6</span>
                      <span style={{ fontWeight: 400 }}>th</span>
                    </a>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Our Pasts I
                    </span>
                  </p>
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>7</span>
                    <span style={{ fontWeight: 400 }}>th </span>
                    <span style={{ fontWeight: 400 }}>
                      &ndash; Our Pasts II
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>8</span>
                    <span style={{ fontWeight: 400 }}>th </span>
                    <span style={{ fontWeight: 400 }}>
                      &ndash; Our Pasts III &ndash; Part I and Part II
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>9</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; India &amp; the Contemporary World I
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>10</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; India &amp; the Contemporary World II
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>11</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Themes in World History
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>12</span>
                    <span style={{ fontWeight: 400 }}>th </span>
                    <span style={{ fontWeight: 400 }}>
                      - Themes in Indian History Part I, II &amp; III.
                    </span>
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
                    <a href="https://amzn.to/2qwSY70">
                      <span style={{ fontWeight: 400 }}>
                        6th &ndash; The Earth: Our Habitat
                      </span>
                    </a>
                  </p>{" "}
                  <br />
                  <p>
                    <a href="https://amzn.to/2rcmvqT">
                      <span style={{ fontWeight: 400 }}>
                        7th &ndash; Our Environment
                      </span>
                    </a>
                  </p>{" "}
                  <br />
                  <p>
                    <a href="https://amzn.to/2ra804H">
                      <span style={{ fontWeight: 400 }}>
                        8th &ndash; Resources &amp; Development
                      </span>
                    </a>
                  </p>{" "}
                  <br />
                  <p>
                    <a href="https://amzn.to/2r9Zans">
                      <span style={{ fontWeight: 400 }}>
                        9th &ndash; Contemporary India I
                      </span>
                    </a>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>10</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Contemporary India II
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>11</span>
                    <span style={{ fontWeight: 400 }}>th </span>
                    <span style={{ fontWeight: 400 }}>
                      &ndash; Fundamentals of Physical Geography, India &ndash;
                      Physical Environment
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>12</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Fundamentals of Human Geography and India &ndash;
                      People &amp; Economy
                    </span>
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
                    <span style={{ fontWeight: 400 }}>9</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}> &ndash; Economics</span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>10</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Understanding Economic Development
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>11</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Indian Economic Development
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>12</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Introductory Microeconomics
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>12</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Introductory Macroeconomics.
                    </span>
                  </p>
                </td>
              </tr>

              <tr className={styles["blog-td"]}>
                <td className={styles["blog-td"]}>
                  <p>
                    <strong>Political Science</strong>
                  </p>
                </td>
                <td className={styles["blog-td"]}>
                  <p>
                    <a href="https://amzn.to/2r24rPv">
                      <span style={{ fontWeight: 400 }}>
                        9th &ndash; Democratic Politics I
                      </span>
                    </a>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>10</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Democratic Politics II
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>11</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Indian Constitution at Work
                    </span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>12</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}>
                      {" "}
                      &ndash; Contemporary World Politics, Politics in India
                      since Independence
                    </span>
                  </p>
                </td>
              </tr>

              <tr className={styles["blog-td"]}>
                <td className={styles["blog-td"]}>
                  <p>
                    <strong>Sociology&nbsp;</strong>
                  </p>
                </td>
                <td className={styles["blog-td"]}>
                  <p>
                    <span style={{ fontWeight: 400 }}>11</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}> &ndash;</span>
                    <a href="https://amzn.to/2ruUxaD">
                      <span style={{ fontWeight: 400 }}>
                        {" "}
                        Introducing Sociology
                      </span>
                    </a>
                  </p>{" "}
                  <br />
                  <p>
                    <a href="https://amzn.to/2saAYRm">
                      <span style={{ fontWeight: 400 }}>12</span>
                      <span style={{ fontWeight: 400 }}>th</span>
                      <span style={{ fontWeight: 400 }}>
                        {" "}
                        &ndash; Social Change &amp; Development in India
                      </span>
                    </a>
                    <span style={{ fontWeight: 400 }}>, Indian Society</span>
                  </p>
                </td>
              </tr>

              <tr className={styles["blog-td"]}>
                <td className={styles["blog-td"]}>
                  <p>
                    <strong>Culture/Fine Arts&nbsp;</strong>
                  </p>
                </td>
                <td className={styles["blog-td"]}>
                  <p>
                    <a href="https://amzn.to/2saQo88">
                      <span style={{ fontWeight: 400 }}>11</span>
                      <span style={{ fontWeight: 400 }}>th</span>
                      <span style={{ fontWeight: 400 }}>
                        {" "}
                        &ndash; An Introduction to Indian Art
                      </span>
                    </a>
                  </p>
                </td>
              </tr>

              <tr className={styles["blog-td"]}>
                <td className={styles["blog-td"]}>
                  <p>
                    <strong>Science&nbsp;</strong>
                  </p>
                </td>
                <td className={styles["blog-td"]}>
                  <p>
                    <span style={{ fontWeight: 400 }}>6</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}> to 10</span>
                    <span style={{ fontWeight: 400 }}>th</span>
                    <span style={{ fontWeight: 400 }}> Science NCERTs</span>
                  </p>{" "}
                  <br />
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Biology NCERT for Class 11 and 12
                    </span>
                    <span style={{ fontWeight: 400 }}>th.</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 id="id_7" className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>
              7.0 Be Your Own Toughest Evaluator in your UPSC preparation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              You must adopt a critical eye towards your progress. Regularly
              assess your strengths and areas needing improvement, ensuring
              continuous growth and refinement in your approach. Maintain a
              logbook of your small achievements and failures. Keep practicing
              in certain time frames.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong style={{ fontWeight: 200 }}>
              7.1 Self-Evaluation Techniques for your UPSC Prep
            </strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Self-assessment is important for UPSC success because it helps you
              understand how well you're doing in your studies. It's like a
              roadmap that tells you where you need to improve and what you're
              already good at. By knowing your strengths and weaknesses, you can
              focus your efforts and increase your chances of doing well in the
              UPSC exam. Here are some self-assessment tips that can help you
              while preparing for the Civil Services Examination:
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong> 1. Test Series:</strong>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Taking regular practice tests is a dependable way to know how
              ready you are for the UPSC exam. These tests help you figure out
              what you're good at and where you need improvement. Here's how to
              use them:
            </span>
          </p>
          <ul>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>2. Regular Practice Tests: </strong>
              <span style={{ fontWeight: 400 }}>
                Take full-length practice tests regularly. This helps you get
                used to how the exam works and see how good you are at managing
                your time.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>3. Checking How You Did: </strong>
              <span style={{ fontWeight: 400 }}>
                After each practice test, look closely at how you did. Figure
                out which parts you did well in and which parts you need to get
                better at. Maintain a register and update it regularly to assess
                your preparation.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>4. Focused Practice: </strong>
              <span style={{ fontWeight: 400 }}>
                Concentrate on the subjects or topics where you're not doing as
                well. Practice more on these areas to improve your understanding
                and knowledge.
              </span>
            </li>
          </ul>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Remember, by taking these tests and carefully looking at how you
              do, you can boost your confidence and be well-prepared for the
              UPSC exam.
            </span>
          </p>
          <ol start="2">
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>
                {" "}
                Syllabus-Centric Prep and Regular Checks on Schedule
              </strong>
            </li>
          </ol>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              To make sure you're on track in your UPSC journey, here are
              effective ways to keep an eye on your progress:
            </span>
          </p>
          <ul>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>5. Weekly Progress Checks:</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                Every week, take a moment to see how much you've covered in your
                studies. Ask yourself this question every day, &ldquo;Are you
                keeping up with your plan?&rdquo; This will help you stay on
                course.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>6. Performance Analysis:</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                After practice tests or study sessions, review how you did. Note
                your strong areas and where you need more work. Tracking your
                performance is key to improvement and noting this down is a must
                do.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>7. Study Schedule Updates:</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                Regularly update your study schedule. As you progress, adjust it
                to match your strengths and weaknesses. Make sure it remains
                effective for your learning style.
              </span>
            </li>
          </ul>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              By focusing on these methods, you can maintain a clear view of
              your UPSC preparation progress and make the necessary adjustments
              for success.
            </span>
          </p>
          <ol start="3">
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>8. Through Mentorship</strong>
            </li>
          </ol>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Having a mentor or a guide can be invaluable during your UPSC
              preparation. Seek mentorship to benefit from the following
              advantages:
            </span>
          </p>
          <ol>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>9. Checking Your Answers: </strong>
              <span style={{ fontWeight: 400 }}>
                Mentors play a valuable role by looking at your practice test
                answers and essays. They go through your answers and essays to
                understand how well you're doing. They will point out the good
                parts and areas where you can do better. It's like having a
                mentor as your study partner who helps you see what you're doing
                right and what needs a little more attention.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>10. Personalized Feedback: </strong>
              <span style={{ fontWeight: 400 }}>
                What's great about mentors is that they don't give you generic
                advice; they give you advice that is just for you. They
                carefully consider your strengths and weaknesses and then offer
                guidance based on what you need most. This tailored feedback is
                like a personalized roadmap that tells you exactly where you
                need to go to improve.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>11. Motivation and Support: </strong>
              <span style={{ fontWeight: 400 }}>
                Sometimes, studying can be challenging, and that's where mentors
                really help. They act like your biggest cheerleaders, supporting
                you and motivating you when things get tough. It's like having a
                friend who keeps you on track, even when you feel like giving
                up. Their encouragement is priceless, and it helps you stay
                focused and determined.
              </span>
            </li>
          </ol>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              With mentors by your side, you not only get a helping hand in
              self-assessment but also a supportive and personalized approach to
              UPSC preparation.
            </span>
          </p>
          <h2 id="id_8" className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>8.0 Conclusion</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Success in the UPSC exam is achievable with the right mindset,
              dedication, and resources. Embrace your purpose, follow a
              well-structured study plan, and stay focussed on your goals.
              Remember, your journey may be challenging, but with patience and
              continuous self-assessment during your UPSC preparation, you can
              crack the exam. Best of luck!
            </span>
          </p>

          <h2 id="id_9" className={styles["blog-childSubHead"]}>
            <strong style={{ fontWeight: 400 }}>9.0 FAQs</strong>
          </h2>
          <ol>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>
                1. How long does it typically take to prepare for the UPSC exam?
              </strong>
            </li>
          </ol>

          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              The duration of UPSC exam preparation varies from person to
              person. On average, candidates spend around 12-18 months in
              focused preparation. It's essential to customize your preparation
              according to your background, knowledge, and the amount of time
              you can dedicate each day.
            </span>
          </p>

          <ol start="2">
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <strong>
                2. Can I choose any optional subject for the UPSC exam, or are
                there specific recommendations?
              </strong>
            </li>
          </ol>

          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              You have the flexibility to choose any optional subject from the
              list provided by UPSC. However, it's advisable to choose a subject
              you are genuinely interested in and have a reasonable
              understanding of, as this can make your preparation more enjoyable
              and effective.
            </span>
          </p>

          <ol start="3">
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>
                3. Is coaching necessary for UPSC preparation, or can I
                self-study successfully?
              </strong>
            </li>
          </ol>

          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Coaching is not mandatory for UPSC preparation, and many
              candidates have successfully cleared the exam through self-study.
              The choice between coaching and self-study depends on your
              learning style, resources, and discipline. It's important to find
              a method that works best for you.
            </span>
          </p>

          <ol start="4">
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <strong>
                4. What is the ideal daily study routine for UPSC aspirants?
              </strong>
            </li>
          </ol>

          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              There is no one-size-fits-all study routine, but a general
              guideline is to maintain consistency and study for 6-8 hours
              daily. Allocate time to cover all subjects, take regular breaks,
              and include revision in your schedule. Adapt your routine to suit
              your peak productivity hours and personal commitments.
            </span>
          </p>

          <ol start="5">
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <strong>
                5. Are there any specific tips for time management during the
                UPSC preparation process?
              </strong>
            </li>
          </ol>

          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Effective time management is crucial for UPSC preparation. To
              manage your time efficiently, create a study timetable, set clear
              goals, and prioritize your tasks. Use time-saving techniques like
              studying in focused blocks and employing study aids, such as
              flashcards and mind maps. Regularly assess your progress and adapt
              your plan as needed to make the most of your time.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowToPrepare;
