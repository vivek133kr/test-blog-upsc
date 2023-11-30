import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function RitikaJindal() {
 
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
              Navigating IAS Ritika Jindal’s journey: Academic Excellence, IAS
              Preparation, and Triumph Over Hardships{" "}
            </span>
          </h1>
          <p>
            <br />
          </p>

          <p>&nbsp;</p>

          <h2 id="id_1" className={styles["blog-subHead"]}>
            <strong style={{ fontWeight: 400 }}>Introduction</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Ritika Jindal's journey from a small town to becoming the youngest
              IAS officer in the 2019 batch is truly inspiring. She was born and
              raised in Moga, Punjab, a town often known as the "NRI capital of
              Punjab." Despite the common belief in her town that boys would
              receive an education and opportunities to work abroad, while girls
              would be educated and married off, preferably to an NRI for the
              chance to go abroad, Ritika's father had a far-sighted
              perspective.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Ritika faced numerous challenges during her IAS preparation but
              never lost sight of her dream to succeed. Her story is a beacon of
              hope for those who dare to dream big and work hard to achieve
              their goals. Let's delve into Ritika Jindal's remarkable journey.
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Early Life and Aspirations
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Ritika grew up in Moga, where her family faced several hardships.
              Her father worked as a product manager at Nestle but had chronic
              health issues that required frequent visits to DMC Ludhiana. This
              situation left her family struggling. Despite these challenges,
              Ritika held onto her dream of becoming a District Collector (DC)
              through IAS preparation, after someone in her childhood told her
              that only a DC had the power to bring change and development to an
              underprivileged area.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Academic Excellence</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Ritika's journey towards success began early. She achieved the top
              position in the 12th-grade CBSE exams for Northern India in the
              commerce stream with an outstanding 98.6% score. Her academic
              excellence even earned her recognition from the Prime Minister of
              India. These achievements reflected her unwavering dedication.
            </span>
          </p>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <iframe
              className={styles["blog-iframe"]}
              src="https://www.youtube.com/embed/Lq4kqucaU9c?si=7x0yv6W3egZkOrU4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <p
              style={{
                fontFamily: "sans-serif",
                fontWeight: "lighter",
                marginTop: "5px",
              }}
            >
              Ritika Jindal's Josh Talk on{" "}
              <a
                style={{
                  color: "blue",
                }}
                href="https://www.youtube.com/@JoshTalksHindi"
              >
                Josh Talks
              </a>{" "}
              Hindi
            </p>
          </div>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Educational Pursuits before IAS Preparation
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              While taking her 12th grade exams, Ritika's family faced another
              hurdle when her father's health deteriorated, leading to his
              admission to DMC Ludhiana. During this challenging time, Ritika
              took on the responsibility of caring for her younger brother, all
              while battling a high fever of 104 degrees. Remarkably, she not
              only shouldered these responsibilities but also managed to secure
              the top position in Northern India.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              While many believe that focusing on IAS preparation during college
              means neglecting academics, Ritika had a different perspective.
              She considered her college education essential. As a result, she
              graduated with distinction in B. Com, scoring an impressive 95%,
              and secured the third position in Sri Ram College of Commerce,
              Delhi University, renowned as the best commerce college in Asia.
              It was during her first year at college that she met her mentor,
              Mr. NK Yadav, who would play a pivotal role in her journey.
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Challenges Faced while preparing for UPSC
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Ritika's path was fraught with challenges. Her first attempt at
              UPSC coincided with her father's diagnosis of oral cancer. Despite
              the personal turmoil, her family encouraged her to continue
              pursuing her dream. In her initial attempt, she cleared the
              preliminary and mains exams but narrowly missed the final
              selection.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Throughout her academic journey, Ritika had consistently excelled
              as a district, state, and national topper in academics as well as
              in various competitions, including Maths Olympiads, Science
              Olympiads, NSTSE, and NTSE. Her dedication to academic excellence
              set the foundation for her future success.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              In her second attempt, her father was diagnosed with lung cancer.
              This time, Ritika emerged victorious in the UPSC exam. Her father
              described her achievement as an "immunotherapy injection" during
              their difficult times.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Beginning of Her IAS Preparation Journey
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Ritika secured the Himachal Pradesh cadre and was appointed as the
              Sub-Divisional Magistrate (SDM) of Mandi, Himachal Pradesh. During
              her training at LBSNAA, the National Academy of Administration,
              her father and mother tragically passed away due to cancer.
              Despite facing such immense personal loss, Ritika's determination
              remained unshaken.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Ritika's Strategy for IAS Preparation
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Ritika believes that cracking the UPSC exam requires consistent
              and dedicated effort. She emphasizes that while you may study the
              same set of books for both the preliminary and mains exams, the
              approach should differ.
            </span>
          </p>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <span style={{ fontWeight: 400 }}>
                The preliminary exam assesses factual knowledge and memory,
                whereas the mains test your logical and analytical abilities.
                You must demonstrate your capacity to reach well-balanced
                conclusions.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                Essays play an important role in expanding your knowledge pool
                and should be presented clearly and concisely.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                One common factor in every stage of the UPSC journey is
                knowledge. Ritika's advice is clear: learn how to learn by
                yourself.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                She advocates starting UPSC preparation as early as possible if
                you have the inspiration inside you from a young age.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                For college students, her approach involves laying a strong
                foundation in General Studies (GS), followed by optional
                subjects and extensive answer-writing practice, all complemented
                by test series.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                Choosing an optional subject for the UPSC exam can be a crucial
                decision. While many opt for subjects they consider easy or
                highly scorable, Ritika encourages aspirants to choose subjects
                they are genuinely passionate about, preferably from the ones
                that they have studied in college.
              </span>
            </li>
          </ul>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Conclusion</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Ritika Jindal's journey from a small town in Punjab to becoming
              the youngest IAS officer of the 2019 Civil Services Exam batch is
              a testament to unwavering determination and the power of
              self-belief. Her story inspires countless aspirants to aim high
              and work tirelessly to achieve their dreams. In the challenging
              world where millions of students prepare for UPSC exams, Ritika's
              message of hard work, dedication, and resilience rings true,
              reminding us all that with the right mindset, we can overcome any
              obstacle and reach for the stars.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RitikaJindal;
