import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function TopOnlineCoaching() {
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
              Top 5 UPSC Online Coaching Platforms in India{" "}
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
                      <strong>Coaching Platform</strong>
                    </p>
                  </th>
                  <th
                    style={{
                      backgroundColor: "#C9DAF8",
                    }}
                    className={styles["blog-td"]}
                  >
                    <p>
                      <strong>Ranking</strong>
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
                      <span style={{ fontWeight: 400 }}>
                        Physics Wallah | OnlyIAS by PW
                      </span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>1</span>
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
                      <span style={{ fontWeight: 400 }}>StudyIQ IAS</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>2</span>
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
                      <span style={{ fontWeight: 400 }}>Unacademy</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>3</span>
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
                      <span style={{ fontWeight: 400 }}>Drishti IAS</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>4</span>
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
                      <span style={{ fontWeight: 400 }}>Vision IAS</span>
                    </p>
                  </td>
                  <td className={styles["blog-td"]}>
                    <p>
                      <span style={{ fontWeight: 400 }}>5</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>&nbsp;</p>

          <h2 className={styles["blog-subHead"]}>
            <strong style={{ fontWeight: 400 }}>Introduction</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Starting the tough journey of preparing for UPSC exams? This blog
              is your guide to the best five UPSC online coaching platforms in
              India. Learn about these platforms that use smart teaching and
              provide helpful study materials. They are like guiding lights for
              anyone trying to succeed in one of the country's hardest exams.{" "}
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Physics Wallah | OnlyIAS by PW
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Founded with a vision to revolutionize education, Physics Wallah,
              which has collaborated with Only IAS for UPSC online Coaching, has
              an illustrious history of empowering students for success. Physics
              Wallah stands out for its innovative teaching methods and
              dedication to guiding aspirants with the best UPSC online
              coaching.
            </span>
          </p>

          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Courses Offered :</strong>
          </h2>
          <ol
            style={{
              marginLeft: "20px",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li
              className={`${styles["blog-p"]} ${styles["addMargin"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>1. Sankalp for 2025 - ₹21,999*</strong>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>2. Prahar for 2024 - ₹19,999*</strong>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>3. Prarambh for 2026 - ₹48,999*</strong>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>4. Titan 2025 - ₹21,999*</strong>
            </li>
          </ol>

          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Features :</strong>
          </h2>
          <ol
           
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li
              className={`${styles["blog-p"]} ${styles["addMargin"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>1. MIRP Scheme :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                The MIRP Scheme by PW Only IAS is a golden opportunity for those
                who clear UPSC prelims. It offers an all-expenses-paid mains and
                interview preparation at the PW Only IAS offline center,
                covering accommodation and meals.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>2. Daily Practice :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                In each class at PW Only IAS, students engage in valuable daily
                practice. This includes up to 10 MCQs, 1 Mains question, and a
                Model Answer, fostering consistent and effective learning.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>3. Weekly Tests :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                PW Only IAS conducts regular weekly tests, providing students
                with opportunities to assess and reinforce their understanding
                of the course material.{" "}
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>4. Prelims Test Series :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                For focused UPSC prelims preparation, PW Only IAS offers a
                specialized test series, ensuring aspirants are well-prepared
                for this crucial stage.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>5. Doubt Engine :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                The Doubt Engine at PW Only IAS is a dedicated platform where
                students can seek clarification from a team of experts and
                faculties, ensuring that no query goes unanswered.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>6. DRich Study Material :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                PW Only IAS provides an array of rich study materials, including
                AMPOORNA (comprehensive e-books for CSE), MANTHAN (a monthly
                Current Affairs Magazine), UDAAN (quick revision booklets for
                prelims), and UDAAN 500 (a one-stop solution for 1.5 years of
                current affairs).{" "}
              </p>
            </li>{" "}
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>7. One-on-One Telephonic Mentorship :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Students at PW Only IAS benefit from personalized guidance
                through one-on-one telephonic mentorship, supporting individual
                growth and improvement.{" "}
              </p>
            </li>{" "}
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>8. One-on-One Answer Evaluation :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                PW Only IAS goes the extra mile by offering detailed evaluations
                of student answers, providing constructive feedback for enhanced
                learning.
              </p>
            </li>{" "}
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>9. Access to Counseling and Guidance :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                PW Only IAS offers comprehensive support services, ensuring
                students have access to counseling and guidance for both
                academic and personal matters.{" "}
              </p>
            </li>{" "}
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>10. Access to SAT and Seminars :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Aspirants get opportunities for additional learning and
                networking through SAT (Scholarship Admission Test) and Seminars
                held at PW Only IAS offline centers.
              </p>
            </li>{" "}
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>11. Optional Subject Courses :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                PW Only IAS provides coaching in both Hinglish and English for
                optional subjects like Anthropology, PSIR, History, Sociology,
                Geography, and Hindi Literature, all at an affordable ₹19,999.{" "}
              </p>
            </li>
          </ol>
          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Josh Verdict</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              PW Only IAS is the best UPSC online coaching platform because it
              gives you everything you need to pass the exam. They provide
              special schemes like MIRP, which covers all expenses for mains and
              interviews if you clear the prelims. With daily practice, weekly
              tests, and a doubt-solving platform, they ensure you're
              well-prepared. The study material is extensive, covering e-books,
              current affairs, and more. What makes it even better is the
              affordable pricing, making quality education accessible to all,
              unlike many others in the market.
            </span>
          </p>
          <h2
          id="id_2"
            
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>StudyIQ IAS</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              StudyIQ IAS is our second pick for UPSC online coaching. It's like
              a step-by-step guide for people trying to pass the UPSC exam. They
              have different phases that help you learn everything you need.
              With features like P2I Advanced for Prelims and a special program
              for Mains, StudyIQ makes it easier for you to prepare for the UPSC
              exam.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              The name of their flagship UPSC course is Prelims to Interview
              (P2I) Advanced batch, which costs <strong>₹70,000/-*</strong>
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong>
              *Discounts of 45-50% are mostly available for this course.
            </strong>
          </p>

          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Phases of Preparation :</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              StudyIQ divides its UPSC preparation into four different phases
              and offers a well-planned and organised approach to the exam.{" "}
            </span>
          </p>

          <ol
           
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li className={`${styles["blog-p"]}`} style={{ fontWeight: 400 }}>
              <strong>1. Phase 1 - The Integrated Approach :</strong>

              <p
                style={{ fontWeight: 400 }}
                className={`${styles["addMargin"]}`}
              >
                StudyIQ IAS begins its UPSC online coaching with an integrated
                approach to both Prelims and Mains. The syllabus is organized
                into weekly plans, with a day-wise timetable following a 3-2-1
                format. Notable features include theme-based classes for
                advanced content in both Prelims and Mains, daily tests for
                integrated learning, and weekly current affairs classes for
                comprehensive coverage.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>2. Phase 2 - Advanced - Success in Prelims :</strong>

              <p
                style={{ fontWeight: 400 }}
                className={`${styles["addMargin"]}`}
              >
                For those who have completed the foundation, StudyIQ IAS
                introduces P2I Advanced, focusing on Prelims-specific
                preparation. This phase includes daily classes, half-length
                tests for 90 days, a simulator test series for practical exam
                experience, and 10 SIP+ booklets for quick revision.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>3. Phase 3 - Mains Residential Program :</strong>

              <p
                style={{ fontWeight: 400 }}
                className={`${styles["addMargin"]}`}
              >
                Prelims qualifiers are invited to the Mains Residential Program
                2024, featuring a thorough revision of Phase 1, value addition
                classes for static and current affairs, and rigorous daily
                answer writing with weekend tests. For other students, access to
                live/recorded classes and tests is provided under the "Success
                in Mains" initiative.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>4. Phase 4 - Interview Guidance Program :</strong>

              <p
                style={{ fontWeight: 400 }}
                className={`${styles["addMargin"]}`}
              >
                Post-Mains, StudyIQ IAS conducts an extensive DAF (Detailed
                Application Form) analysis for interviewees. Special sessions on
                answering controversial questions, effective response
                techniques, and mock interviews are offered to enhance
                preparedness.
              </p>
            </li>
          </ol>
          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Features of StudyIQ UPSC program :
            </strong>
          </h2>

          <ul
            style={{
              marginLeft: "20px",
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <strong>Prelims Guidance</strong>
              <p className={styles["addMargin"]} style={{ fontWeight: 400 }}>
                In the next part, discuss how climate change affects the
                economies of developing countries. Describe how it influences
                areas such as agriculture, infrastructure, healthcare, and more.
                Use data and real-life examples to back up your discussion.
              </p>
            </li>
            <li className={styles["addMargin1"]}>
              <strong>Mains Guidance</strong>
              <p className={styles["addMargin"]} style={{ fontWeight: 400 }}>
                StudyIQ IAS's program features 20 Full Length Sectional Tests,
                theme-based classes (250+ hours), quick revision notes, and
                1000+ Mains Questions-Answers discussions. To enhance writing
                skills, the platform provides Daily Answer Writing sessions,
                weekly tests, and simulator tests for a well-rounded
                preparation.
              </p>
            </li>
            <li className={styles["addMargin1"]}>
              <strong>Interview Guidance</strong>
              <p className={styles["addMargin"]} style={{ fontWeight: 400 }}>
                StudyIQ IAS offers DAF analysis with 300+ questions, 2 mock
                interviews, and special sessions with ex-bureaucrats.
              </p>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>Personalized Mentorship</strong>
              <p className={styles["addMargin"]} style={{ fontWeight: 400 }}>
                StudyIQ IAS also offers personalized support with mentorship,
                which includes tailored study plans, daily targets tracking for
                GS and optionals, feedback, and progress tracking for tests, and
                continuous personalized guidance from Prelims to Interview
                (P2I).
              </p>
            </li>
          </ul>
          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Josh Verdict</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              While PW Only IAS remains our first choice, StudyIQ IAS offers a
              comprehensive approach with unique features to aid your UPSC
              online coaching, which also includes regular tests, MCQ handouts
              and a residential program for prelims qualifiers. The reason we
              put this course at the second spot in our rankings for the best
              UPSC online coaching is the cost of the program, which is a bit on
              the expensive side than the one offered by PW Only IAS.
            </span>
          </p>
          <h2
            id="id_3"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Unacademy</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Unacademy, a popular online education platform, offers two main
              types of packages for UPSC exam preparation: Plus and Iconic. The
              Unacademy membership provides access to curated courses with live
              lectures, resources, and a diverse pool of teachers in various
              languages, including Hindi, English, and Hinglish.{" "}
            </span>
          </p>

          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Types of Memberships :</strong>
          </h2>
          <p
            style={{ fontWeight: 700}}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            1. Unacademy Plus :
          </p>
          <ul
            style={{
              marginLeft: "40px",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <strong>Interactive Live Classes :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                Live classes are like online lessons where you can ask questions
                and talk to your teacher. It's more engaging than just watching
                videos.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>Structured Courses & PDFs :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                Courses are like organized lessons, and PDFs are like digital
                books. They help you follow a clear plan for what you need to
                learn.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>Live Tests & Quizzes :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                These are real-time tests and quizzes during your classes. They
                check how well you understand the lessons.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>Access to Curated Test Series :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                You can use special sets of tests selected by experts. It's like
                a focused practice to get better at the exam.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>Daily Practice Tests :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                Every day, you get tests to practice what you learned. It helps
                you remember things better.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>Cost :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                For General Studies preparation over 36 months, Unacademy Plus
                membership costs ₹1,12,999/-*
              </span>
            </li>
          </ul>

          <p
            style={{ fontWeight: 700 }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            2. Unacademy Iconic (Additional benefits) :
          </p>
          <ul
            style={{
              marginLeft: "40px",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <strong>Printed Notes :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                Iconic gives you physical notes you can hold. This includes a
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>1:1 Live Mentorship :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                You get your own personal guide who helps with your study plan,
                gives feedback on your answers, and has experience with the
                exam.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>Mains Q&A Practice :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                There are special sessions to practice answering questions for
                the main part of the exam.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>Daily Special Content :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                You get extra study materials and insights every day, making
                your learning more interesting.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>All Plus Benefits :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                You get everything that comes with Plus membership, like live
                classes, tests, and practice, but with added personal touches.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <strong>Cost :</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                For General Studies preparation over 36 months, Unacademy Iconic
                membership is priced at ₹1,74,999/-*
              </span>
            </li>
          </ul>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              *The price mentioned for these memberships is exclusive of the
              discounts that the platform offers, which is usually between
              ₹5000-₹6000.
            </span>
          </p>
          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Features of Unacademy Memberships :
            </strong>
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <span style={{ fontWeight: 400 }}>
                Unacademy boasts 1450 live classes, running five days a week,
                and offers the flexibility to switch courses when needed.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                It provides a unique feature allowing students to try different
                teachers for the same subject.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                The 1:1 mentorship includes guidance on timetables, schedules,
                and answer writing feedback from experienced mentors who have
                cracked the exam.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Additional Offerings: Unacademy's subsidiary, PrepLadder, offers
                recorded lectures and UPSC-related information at a more
                affordable price of around ₹17,000.
              </span>
            </li>{" "}
          </ul>

          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Josh Verdict</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Unacademy has an excellent lineup of UPSC teachers like Dr
              Siddharth Arora and Mrunal Patel, but it has a few issues
              affecting its ranking in our list.
            </span>
          </p>
          <ul
            style={{
              marginLeft: "20px",
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <span style={{ fontWeight: 400 }}>
                Firstly, there's too much content, making it confusing for
                students. With many teachers and lots of material, it's hard to
                pick the best approach.{" "}
              </span>
            </li>
            <li className={`${styles["addMargin1"]}`}>
              <span style={{ fontWeight: 400 }}>
                Secondly, Unacademy's membership is pricey compared to others
                while the quality of teaching is almost at par with the one
                offered by PW Only IAS and StudyIQ.
              </span>
            </li>
            <li className={`${styles["addMargin1"]}`}>
              <span style={{ fontWeight: 400 }}>
                Thirdly, they don't offer a free residency program for those who
                pass the prelims like PW and StudyIQ.
              </span>
            </li>
          </ul>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              These reasons put it at the third spot in our rankings for the
              best UPSC online coaching platforms.
            </span>
          </p>

          <h2
            id="id_4"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Drishti IAS - Our Fourth Choice
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Drishti IAS brings an online GS Foundation Course for UPSC online
              coaching through the Drishti Learning App. While it provides a
              sturdy foundation, there are certain aspects that place it at the
              fourth spot on our list.
            </span>
          </p>
          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Schedule and Highlights :
            </strong>
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <span style={{ fontWeight: 400 }}>
                The GS Foundation course offered by Drishti IAS spans about 15
                months.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                The institute offers daily live classes on the Drishti Learning
                App at 6:00 PM for 2.5 hours, led by a team of esteemed
                teachers.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                The course, consisting of 400+ classes (1000+ hours), covers the
                syllabus comprehensively from the fundamental level.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Course Validity extends for 3 years with printed notes for each
                subject/module.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                24 Mains Tests for answer writing practice.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Current Affairs classes for 3 years.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Prelims Test Series for 3 years.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Home delivery of Drishti Current Affairs Magazine (monthly) for
                3 years.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                11 books of Prelims Practice Series and Mains Capsule Series.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Adequate facility for clarification of class-related doubts.
              </span>
            </li>{" "}
          </ul>

          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Features of Drishti IAS’s GS Foundation Course (Prelims+Mains) :
            </strong>
          </h2>
          <ol
            
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li
              className={`${styles["blog-p"]} ${styles["addMargin"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>1. Expert-Led Classes :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Classes are conducted by experienced instructors under the
                guidance of Dr. Vikas Divyakirti, ensuring quality teaching.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>2. Extensive Course Duration :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                With over 1000 hours of classes, the course spans three years,
                providing ample time for comprehensive learning and revision.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>3. Focus on Understanding and Writing Skills :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                The course places a special emphasis on ensuring students grasp
                concepts thoroughly and develop effective answer writing skills.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>4. Interactive Live Sessions :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Most classes are live, offering real-time interaction. Ethics
                classes, however, are in recorded format, with regular
                doubt-clearing sessions.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>5. Doubt Resolution Through WhatsApp :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Doubts are addressed promptly through WhatsApp, ensuring clarity
                and understanding for students in the next day's live class.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>6. Free Course Material :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                Students receive printed booklets, monthly magazines, and
                practice series books at no additional cost.
              </p>
            </li>{" "}
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>
                7. Free Current Affairs Classes and Prelims Crash Course :
              </strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                The course includes complimentary sessions on current affairs
                and a crash course for Prelims preparation over a three-year
                period.
              </p>
            </li>{" "}
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>8. Free Online Test Series :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                As part of the course, students have access to a free test
                series for UPSC CSE Prelims, comprising 90 tests (75 General
                Studies and 15 CSAT).
              </p>
            </li>{" "}
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>9. Answer Writing Practice :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                Facilitated through 24 tests, students receive valuable feedback
                and evaluations from the academic team, enhancing their writing
                skills.
              </p>
            </li>{" "}
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>10. Drishti Learning App Features:</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                The Drishti Learning App allows students to evaluate and improve
                by providing a platform to assess and review up to 500 answers.
              </p>
            </li>{" "}
          </ol>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <strong>Fee GS Foundation Course : </strong>
            <span style={{ fontWeight: 400 }}> ₹1,00,000/- for 36 months.</span>
          </p>

          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Josh Verdict</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              While Drishti IAS has several notable features, including an
              experienced faculty, well-curated notes and practice tests and
              unique features like Whatsapp doubt-clearing services, there are
              certain factors that impact its ranking.
            </span>
          </p>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <span style={{ fontWeight: 400 }}>
                The lack of guidance on essential aspects like NCERTs, CSAT, and
                mentorship, despite the ₹1,00,000 cost, makes it a relatively
                expensive online option.{" "}
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                The online CSAT course costs 15,000, NCERT foundation course
                costs 12,500 while the Mentorship course package costs around
                20,000.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Although they run residency programme, its limited to the
                students with Hindi as their preferred medium.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Drishti IAS is known for Dr. Vikas Divyakirti, a renowned UPSC
                coaching mentor, but his absence from the teaching lineup of
                these courses also lowers its value.
              </span>
            </li>{" "}
          </ul>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Due to these reasons, we have placed Drishti IAS at the fourth
              spot in our rankings for the best UPSC online coaching.{" "}
            </span>
            <strong>
              However, if we consider Hindi to be the medium, Drishti IAS
              provides the best UPSC online coaching of all the online
              platforms.
            </strong>
          </p>
          <h2
            id="id_5"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Vision IAS</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Vision IAS offers a variety of GS Foundational Courses for UPSC
              online coaching, each with distinct features. Despite providing
              excellent study material and a renowned test series, certain
              drawbacks place it at the fifth spot on our list.
            </span>
          </p>
          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Courses Offered :</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <strong>1. GS Foundational Course 2025 - </strong>
            <span style={{ fontWeight: 400 }}>
              ₹1,70,000 (With Pre-Foundational Classes) :
            </span>
          </p>
          <ul
            style={{
              marginLeft: "20px",
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <span style={{ fontWeight: 400 }}>Duration: 12 months</span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Comprehensive coverage of GS Mains, Prelims, CSAT, and Essay.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                70 pre-foundation classes for understanding key GS concepts and
                fundamentals.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                All India Test Series and Continuous Current Affairs classes.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Personalized Mentors for regular performance assessments.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Access to live and recorded classes on a personal online Student
                Platform.
              </span>
            </li>{" "}
          </ul>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <strong>2. GS Foundational Course 2025 - </strong>
            <span style={{ fontWeight: 400 }}>
              ₹1,50,000 (Without Pre-Foundational Classes) :
            </span>
          </p>
          <ul
            style={{
              marginLeft: "20px",
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <span style={{ fontWeight: 400 }}>
                Similar to the above course but excludes the 70 pre-foundation
                lectures.
              </span>
            </li>{" "}
          </ul>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <strong>3. GS Foundational Course 2026 - </strong>
            <span style={{ fontWeight: 400 }}>
              ₹1,95,000 (Including Pre-Foundational Classes) :
            </span>
          </p>
          <ul
            style={{
              marginLeft: "20px",
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <span style={{ fontWeight: 400 }}>
                Duration: 36 months with a promise to finish the GS syllabus in
                16 months.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                All features of the 2025 course, extending to 2026.{" "}
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Comprehensive Current Affairs Classes 2025 & 2026: Monthly
                Current Affairs Classes (MCAR), Mains 365 & PT365.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Personalized Mentors, Continuous Assessment, and All India Test
                Series until Mains exam 2026.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Access to live and recorded classes on a personal online Student
                Platform.
              </span>
            </li>{" "}
          </ul>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <strong>3. GS Foundational Course 2027 - </strong>
            <span style={{ fontWeight: 400 }}>
              ₹2,15,000 (Including Pre-Foundational Classes) :
            </span>
          </p>
          <ul
            style={{
              marginLeft: "20px",
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <span style={{ fontWeight: 400 }}>
                Duration: 48 months, completing the GS syllabus in 16 months.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                All features of the 2025 and 2026 courses, extending to 2027.{" "}
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Comprehensive Current Affairs Classes 2025, 2026 & 2027: Monthly
                Current Affairs Classes (MCAR), Mains 365 & PT365.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Personalized Mentors, Continuous Assessment, and All India Test
                Series until Mains exam 2027.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                Access to live and recorded classes on a personal online Student
                Platform.
              </span>
            </li>{" "}
          </ul>
          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Features</strong>
          </h2>
          <ol
           
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li
              className={`${styles["blog-p"]} ${styles["addMargin"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>1. Personalized Guidance :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                One-to-one guidance through phone, email, and in-person sitting
                to clear doubts and provide motivation.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>2. Continuous Assessment :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Regular tutorials, mini-tests, and the renowned All India Test
                Series for personalized feedback and performance assessment.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>3. All India Test Series :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Considered one of the best in the country, with a claim that 2
                out of 3 selected candidates opt for their test series.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>4. Vision IAS Post Test Analysis :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                A trademarked system to help students improve their performance,
                providing continuous assessment and performance improvement.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>5. Current Affairs Material :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Renowned Monthly Current Affairs magazine, PT 365, and Mains
                365, considered among the best in the market.
              </p>
            </li>
            <li
              className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
              style={{ fontWeight: 400 }}
            >
              <strong>6. Student Portal :</strong>
              <p
                className={`${styles["addMargin"]}`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Access to a student portal to solve technical problems,
                including glitches, resource issues, and performance
                assessments.
              </p>
            </li>{" "}
          </ol>

          <h2
            
            className={`${styles["blog-childSubHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Josh Verdict</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Despite Vision IAS providing excellent study material and a
              top-notch All India Test Series, it falls to the fifth spot on our
              list due to certain drawbacks.
            </span>
          </p>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <li>
              <span style={{ fontWeight: 400 }}>
                Vision IAS courses are comparatively costlier than others
                without a significant difference in teaching quality.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                The duration of their courses is shorter, potentially making it
                challenging for newer aspirants to catch up.
              </span>
            </li>{" "}
            <li className={styles["addMargin1"]}>
              <span style={{ fontWeight: 400 }}>
                The absence of a residency program, despite the higher cost,
                places Vision IAS lower than other online UPSC coaching
                platforms.
              </span>
            </li>{" "}
          </ul>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Overall, Vision IAS is a solid option but has room for
              improvement, leading to its placement at the fifth spot in our
              rankings for the best UPSC online coaching.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopOnlineCoaching;
