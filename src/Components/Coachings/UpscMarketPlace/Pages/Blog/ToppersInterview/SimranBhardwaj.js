import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function SimranBhardwaj() {
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
              Simran Bhardwaj’s UPSC Preparation: A Story of Determination and
              Dreams
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
              In a tough world, we find inspiration in Simran Bhardwaj's story.
              From her birth in a small village in Haryana to working day and
              night during UPSC preparation to becoming an IPS officer, her
              remarkable journey teaches us the importance of dedication,
              unwavering focus, and relentless hard work. In this blog, let’s
              delve into her incredible path to success and discover the
              valuable lessons her journey teaches us.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>A Childhood Dream</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Simran's journey began in her childhood. As she grew up in an army
              family, a deep sense of national service was automatically
              instilled in her. Her mother, who was also from a small village in
              Haryana, knew that women must work harder, not only to make their
              opinions count but also to lead a dignified life. Simran's mother
              envisioned a future where her daughter could make a significant
              difference in society and this became the foundation of a dream.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              As Simran grew older, she discovered the Union Public Service
              Commission (UPSC) exam, the basics of UPSC preparation and what it
              means to be an IAS or an IPS officer. She realized that it could
              provide her with the platform to bring about meaningful change
              that her mother always dreamt of. Her mother had placed this goal
              on her wish list, and Simran decided to embark on this challenging
              journey right after her graduation, with no gap years.
            </span>
          </p>{" "}
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              To kickstart her UPSC preparation, Simran watched the videos of
              40-50 toppers, using their experiences to craft her own "common
              minimum plan." This plan served as her roadmap to success.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Finding Inspiration</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Simran's journey received a significant boost when she
              participated in a quiz competition at school and was awarded by
              IPS Ilma Afroz. Her conversation with IPS Ilma Afroz inspired her
              to intensify her preparation. Simran prepared a sheet of her
              strengths and weaknesses, identifying the challenges she would
              face while pursuing her degree in journalism. She immediately
              started working on her weaknesses and polishing her strengths.
              Despite the burden of expectations and the fear of failure, she
              remained determined to stay the course.
            </span>
          </p>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <iframe
              className={styles["blog-iframe"]}
              src="https://www.youtube.com/embed/cvcS5pufxf0?si=pUsCmLNPPXpWsK94"
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
              Simran Bhardwaj's Josh Talk on{" "}
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
              A Balanced UPSC Preparation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              In her final year, Simran prepared a calculated roadmap for
              preparation and began studying her basic books, all while
              continuing her interests in public speaking, debating, and
              quizzing. This balance ensured that her journey remained diverse
              and her unique qualities shone through.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              One of Simran's biggest challenges was maintaining consistency, as
              the UPSC preparation demands daily dedication. However, because
              she enjoyed the process, the effort did not feel painful.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Road to UPSC Prelims
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              From July to October, Simran focused on her preliminary
              examination preparation. When the 2020 preliminary exams arrived
              on October 4th, she got the paper and took it at home, simulating
              the exam environment. Realizing that she had cleared the cutoff,
              she began studying her optional subject until December, all the
              while juggling her dissertation work.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>The Path to UPSC Mains</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              In February, Simran began practicing mains answer writing. She
              wrote three General Studies papers every day. Although, she
              believes it was too much for a person to write three papers in a
              day but she believes if you’re working hard for yourself and
              enjoying it, it doesn’t feel hard. She emphasizes that mains
              answer writing should only be undertaken once you've compiled
              notes, gathered data points, and built a strong knowledge
              foundation.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Simran took her Mains exam in Mumbai. Although the exam went well
              and she was confident, she started practicing preliminary exam
              mocks again.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Dilemma - Army or Civil Services
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              During her UPSC journey, Simran also received a call from the
              Combined Defence Services (CDS) and was recommended at the Service
              Selection Board (SSB) in Allahabad. She faced a tough decision -
              choosing between the army and civil services. After careful
              consideration, Simran decided to forego the opportunity in the
              army and waited for her UPSC mains results while still continuing
              her UPSC preparation. When the results came, she got recommended
              for the personality test.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Simran revealed that the interview was more like a panel
              discussion and it was purely to judge the candidate’s personality.
              She ended up scoring an impressive 201 marks and achieving her
              dream of becoming an IPS officer.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Simran’s Key Learnings</strong>
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <strong>Utmost Focus:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                To succeed in this exam, Simran believes that one must embody
                laser-sharp focus. She suggests every aspirant to stay dedicated
                and maintain unwavering concentration on thier goals.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>Consistency and Constancy:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Cultivate a disciplined routine, never missing a day or target.
                Stay constant in your pursuit of success.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>Emotional Detachment with the Exam:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Treat this exam as just that <strong>– AN EXAM.</strong> Keep
                emotions in check and approach challenges with a rational
                mindset.
              </span>
            </li>
          </ul>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Inspired by Saina Nehwal
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Simran drew inspiration from Saina Nehwal, who also hailed from a
              small household in Haryana and achieved greatness.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              She also mentioned a line from Saina's biopic resonated with her:
            </span>
          </p>
          <p
            style={{
              textAlign: "center",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <span
              style={{
                fontWeight: "900",
                fontSize: "30px",
                fontFamily: "serif",
              }}
            >
              " Maangne wali cheez nahi hai mauka uska jisne cheena. "
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
              Simran Bhardwaj's journey to success in the Civil Services and her
              dedication during her UPSC preparation is a testament to the power
              of determination, focus, and dedication. Her story shows us that
              no matter where we come from, we can achieve greatness through
              consistent effort and unwavering commitment. Simran's life serves
              as an inspiration to all, proving that with hard work, dreams can
              indeed become a reality.
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

export default SimranBhardwaj;
