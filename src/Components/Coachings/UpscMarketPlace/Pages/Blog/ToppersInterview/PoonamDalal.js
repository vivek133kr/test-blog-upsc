import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function PoonamDalal() {
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
              Beyond the Badge: Poonam Dalal Dahiya's Journey to Becoming an IPS
              Officer
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
              Poonam Dalal Dahiya's life is proof that believing in yourself and
              never giving up on your dreams can lead to remarkable success. Her
              incredible journey from a simple background to becoming a top
              police officer in Indian Police Services is an inspiration to
              many. In this article, we'll explore her amazing story, focusing
              on the important moments that show how she achieved her goals.
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Early Life and Background
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Poonam Dalal Dahiya hails from the ancestral village of Chara in
              Jhajjar, Haryana. Born and raised in Delhi, her upbringing was
              ordinary, with her mother serving as a retired teacher and her
              father, a businessman who tragically passed away early in her
              life. She completed her school education from Nangloi, a small
              town near Delhi.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>The Desire to Achieve</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Despite her limited exposure, Poonam possessed an inborn desire to
              make a mark in life. Her journey began with a teaching training
              program for primary schools, known as JBT (Junior Basic Training),
              which paved the way for her first government job. Unable to pursue
              a regular degree due to her employment commitments, she opted for
              an external graduation from Delhi University. At this point, she
              began to develop doubts about her ability to crack the UPSC exam,
              given the intense competition and dedication she observed in other
              aspirants in Delhi University.
            </span>
          </p>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <iframe
              className={styles["blog-iframe"]}
              src="https://www.youtube.com/embed/sPM1_ynY-xw?si=8VqhJ_9ONAh1qpsd"
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
              Poonam Dalal's Josh Talk on{" "}
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
            <strong style={{ fontWeight: 400 }}>A Series of Milestones</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              After completing her graduation, Poonam took several Bank PO exams
              and secured a position at the State Bank of India, where she
              worked for three years. It was during this time that she achieved
              an impressive feat by securing the 7th rank in the Graduate-level
              SSC exam without any coaching. This success instilled confidence
              in her that she could conquer the UPSC exam. Her journey continued
              as she joined as an Income Tax Inspector, her first choice of
              service. However, her path to the coveted UPSC Civil Services Exam
              was not without challenges.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              In her first two attempts, she passed all the three tiers of the
              exam. However, since she was already serving on a well-reputed
              position, she couldn't join as she couldn’t get her preferred
              service. On her third attempt in 2011, she failed to qualify the
              prelims, and the age limit for the General category was 30, making
              it her last opportunity. Her dream of becoming an IAS officer
              seemed shattered.
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>A Second Chance</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              However, fate had other plans for Poonam. A government
              notification in 2015 offered candidates who had taken the UPSC
              exam in 2011, an additional chance. Despite being away from
              studies and occupied with a pregnancy, Poonam decided to give it
              one last shot. She returned to the exam hall, nine months
              pregnant, and even the invigilators were concerned about her
              health.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              She cleared the prelims but had only a month to prepare for the
              Mains, as she had given birth after the prelims. With the
              unwavering support of her family, including her mother-in-law,
              father-in-law, mother, brothers, husband, and more, she faced the
              challenge head-on.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Poonam Dahiya didn't have much practice in writing, but she
              managed to clear the exam, ace the interview, and finally realize
              her dream of becoming an IPS officer. This time, her attitude had
              transformed. She no longer viewed the UPSC exam as an
              insurmountable mountain but approached it as a manageable
              challenge, focusing on doing her best.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Seizing the Second Chance
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Poonam Dalal Dahiya's decision to take the UPSC exam once more,
              even in the face of personal challenges, demonstrates her solid
              determination. Despite being away from studies, working on a
              highly-responsible position and dealing with a newborn child, she
              harnessed her inner strength and resilience.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              The support she received from her family was instrumental in this
              phase of her journey. Her mother-in-law, father-in-law, mother,
              brothers, and husband rallied behind her as if they were all
              participants in the exam. This united front provided her with the
              encouragement and assistance she needed during this challenging
              period.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Poonam didn't have the luxury of writing practice or extensive
              study hours, yet she displayed incredible perseverance. Her
              success in clearing the exam and interview to become an IPS
              officer was not just a personal victory but a testimony to the
              strength and grit she had developed.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Lessons Learned</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Poonam's journey was full of ups and downs and she has authored
              several books for UPSC aspirants. She listed a few of her
              invaluable lessons from her journey:
            </span>
          </p>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <strong>Comprehensive Preparation : </strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Poonam advised every aspirant to avoid the common mistake of
                focusing solely on prelims. A holistic approach is crucial to
                excel in the entire UPSC exam.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong> Self-Belief : </strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Poonam believes confidence is the key to success in any exam,
                especially one as demanding as the UPSC. Maintain self-belief,
                regardless of the circumstances.
              </span>
            </li>
          </ul>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Tips for UPSC Aspirants</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Poonam Dahiya offered the following tips for those aspiring to
              clear the UPSC exam:
            </span>
          </p>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <strong>Strategic Reading : </strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Understand not only what to read but also what to omit. A
                focused approach is essential.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong> Continuous Self-Assessment : </strong>{" "}
              <span style={{ fontWeight: 400 }}>
                As you start studying for UPSC, start to regularly assess your
                progress while studying, rather than saving it for later. She
                recommends doing this after each topic.v This helps you track
                your retention and understanding.
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong> Mock Tests : </strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Reserve the last 45 days before prelims for rigorous mock tests.
                Set high targets in these tests, and make them your sole focus.
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong> Perseverance : </strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Maintain self-belief during the exam, even when faced with
                challenging questions. Don't lose hope, stay calm, gather your
                thoughts and give your best effort.
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong> Effective Question Management: </strong>{" "}
              <span style={{ fontWeight: 400 }}>
                When you receive the exam paper, identify the questions you are
                sure you can answer and attempt them first. Divide the paper
                into sections: those you know, those you partially know, and
                those you have no idea about. Focus on the sure-shot questions
                and make educated guesses for the partial ones, leaving the ones
                that you don’t know anything about.’
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong> Perspective: </strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Remember that the UPSC exam is just one part of your life; it
                doesn't define your entire existence. Life has much more to
                offer.
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
              Poonam Dalal Dahiya's path from a simple life to qualifying
              multiple competitive exams is a story of never giving up and
              believing in yourself. Her journey shows us that with
              determination and good planning, you can achieve your dreams.
              Poonam's success story teaches us that if you manifest something
              with all your heart, you will definitely find a way to make it
              happen and the universe will align itself in your favour.
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

export default PoonamDalal;
