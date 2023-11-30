import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function GarimaLohia() {
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
              From Hometown to the Heights: Garima Lohia's Path to Becoming a
              UPSC Topper
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
              In the world of competitive exams and challenges, Garima Lohia's
              journey from a small town to securing the prestigious All India
              Rank 2 in the Civil Services Exam is nothing short of
              inspirational. Her story is a testament to the power of
              determination and perseverance. Let's explore the incredible
              journey of Garima Lohia, who defied all odds to become an IAS
              topper.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Early Life and Transformation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Garima Lohia hails from the town of Buxar in Bihar and had her
              schooling there. However, she moved to Varanasi, Uttar Pradesh for
              her 11th and 12th grades, where she stayed in a hostel.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              It was during her initial college days at Kirorimal College, Delhi
              University, that she faced challenges due to her background and
              limited exposure in a small town. Garima's confidence was low, and
              she had to overcome the hurdle of a Bihari accent, which some
              people in Delhi took negatively, affecting her self-confidence.
            </span>
          </p>{" "}
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              As time went on, Garima began to realize the importance of
              personality over accent. She understood that people remember you
              for your actions and not your background. Interactions with peer
              groups and fellow students in college gave her the exposure and
              self-discovery she needed. This experience played a significant
              role in boosting her confidence and motivation.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>The Role of Family</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Garima's journey was not without challenges. Raised by a single
              mother and with her sister taking up a job at an early age to
              support the family, Garima attributes her success to her family's
              unwavering support and sacrifice. Her family's determination to
              make ends meet for the society and ensure that Garima could pursue
              her dreams became a source of motivation for her.{" "}
            </span>
          </p>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <iframe
              className={styles["blog-iframe"]}
              src="https://www.youtube.com/embed/rRZav-GVu_8?si=JIX4Pt06cTY57Lt7"
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
              Garima Lohia's Josh Talk on{" "}
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
              The Decision to Pursue UPSC
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              In 2020, Garima made the life-changing decision to pursue the UPSC
              examination and prepare at her place. She believed that she could
              only find true happiness by addressing the challenges she faced
              while growing up in a small town with limited resources and
              amenities. Having a supportive peer group that engaged in
              meaningful discussions and shared insights proved to be invaluable
              for her preparation.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Learning from Mistakes</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Garima's journey was not without its share of setbacks. She faced
              failure in her first attempt at the UPSC examination, making
              several mistakes along the way. However, she didn't let this
              discourage her. Instead, she learned from her own mistakes and
              those of her friends. She realized the crucial role of limited
              resources and the importance of reading newspapers for her
              preparation.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>The Power of Comparison</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Garima also realized the danger of comparing herself to others,
              especially those preparing in Delhi, where the atmosphere for
              studying was more conducive. She understood that meaningful
              comparison should be with those who faced more adverse
              circumstances or with her past self, emphasizing personal growth
              and progress.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Challenges of Studying at Home
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Studying at home presented its own set of challenges for Garima,
              primarily revolving around time management and discipline. She
              initially started preparing during late-night hours, but she soon
              realized the need to adjust her sleep cycle for peak performance
              during exams.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Balancing Act</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Garima's journey was not all about rigorous study. She managed her
              time effectively, ensuring that she didn't miss out on other
              activities like dining out and watching series. She understood the
              importance of not obsessing over what others in Delhi were doing,
              as this could lead to the fear of missing out (FOMO).
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Interview Experience
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              The first interview for the UPSC examination can be
              nerve-wracking. Garima faced her own share of anxiety,
              particularly regarding her communication skills. However,
              consistent mock interviews boosted her confidence. After entering
              the UPSC interview, she realized that what the interview panel
              wanted was a good conversation. They asked her about her life
              experiences, such as the significance of Delhi Haat during her
              college years. Even though she was confident that her interview
              went well, she started preparing for prelims again, and one day
              while she was studying for prelims, the result was announced and
              she made it to the top of the list.
            </span>
          </p>{" "}
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Garima's Message</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Garima's message to aspiring UPSC candidates is clear and
              inspiring. She emphasizes the importance of honest, hard work,
              dedication, and leaving the rest to destiny or a higher power. Her
              journey from a small town to becoming UPSC Topper with All India
              Rank 2 is a testament to what one can achieve with unwavering
              determination and the right mindset.{" "}
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Conclusion</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Garima Lohia's journey from a small town to becoming UPSC topper
              achieving All India Rank 2 in the Civil Services Exam is a
              testament to determination and the power of self-improvement. Her
              story serves as an inspiration for all UPSC aspirants, emphasizing
              the importance of hard work and the right mindset in achieving
              one's dreams.
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

export default GarimaLohia;
