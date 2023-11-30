import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function SurajTiwari() {
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
              Suraj Tiwari’s IAS Prep : A Journey of Perseverance and Triumph
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
              Suraj Tiwari's life is a remarkable example of how determination
              can overcome incredible challenges. Even though he faced
              overwhelming physical challenges, he didn't give up. He not only
              passed the JNU entrance and NET Junior Research Fellowship exam
              but also fulfilled his dream of becoming an IAS Officer by
              clearing UPSC Civil Services Exam through sheer resilience and
              hard work. His story is not just about IAS prep, it shows that
              when you never give up, you can achieve amazing things.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Early Struggles before IAS prep
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Suraj Tiwari, hailing from Mainpuri district of Uttar Pradesh, had
              a humble beginning. His father ran a small tailor shop, striving
              to make ends meet. Suraj faced an initial setback when he failed
              his 12th-grade exam from CBSE. Later, he completed his 12th grade
              from the state board in 2014.{" "}
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Suraj left his hometown for Mumbai in 2015, where his brother
              served in the coast guard. However, financial difficulties forced
              him to return home the same year. He learned the art of performing
              pooja and worked in the sector. In 2016, he moved to Delhi to seek
              employment opportunities in the private sector, where he worked
              for a year.
            </span>
          </p>{" "}
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              A Life-Altering Accident
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Tragedy struck Suraj when he met with a life-altering accident
              that left him physically challenged. One day, while traveling in a
              train, he slipped and fell on the railway track. The accident was
              so bad that he lost multiple limbs. Doctors kept motivating him.
              This setback led to a period of sadness and despair. It was during
              this time that he decided that he must do something big after
              getting out of that pain.
            </span>
          </p>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <iframe
              className={styles["blog-iframe"]}
              src="https://www.youtube.com/embed/5cvFdKADLuQ?si=fmRm7iqr9h57bPOb"
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
              Suraj Tiwari's Josh Talk on{" "}
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
              The JNU Dream and a Personal Loss
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              One day when Suraj was at AIIMS to purchase medicines, he met a
              JNU student. He asked Suraj about his story and motivated him.
              encouraged him to pursue higher education. He gave him a campus
              tour of JNU and introduced him to several differently-abled
              individuals. After hearing their inspiring stories of resilience
              and determination, it ignited a spark within him.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              However, his journey was marred by personal loss as well. The
              death of his elder brother due to illness shattered him. Amidst
              these trials, he couldn’t clear the JNU entrance exam, leaving him
              heartbroken.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Rising from the Ashes</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              When he heard that JNU was conducting another entrance exam, he
              decided to give it another shot. After months of relentless
              preparation, he cleared the exam and secured admission to JNU.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Being from the economically weaker section (EWS), Suraj faced
              financial constraints. He needed 4000 rupees for JNU fees but
              found few willing to help him. He began teaching underprivileged
              8th-grade students, earning the money he needed.{" "}
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>A Journey of Growth</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              As he pursued his graduation in Russian at JNU, Suraj's world
              expanded. He immersed himself in the university's library,
              engaging with students from diverse backgrounds. One of his
              seniors told him about IAS prep and explained the basic strategies
              to be learned to prepare for the exam, such as newspaper reading,
              NCERTs, reference books, etc.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              The university librarian provided him with a laptop, enabling him
              to access the internet and broaden his horizons. He spent 18
              months in the library, learning, growing, and preparing for his
              future.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Perseverance Pays Off</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              After a long visit to his hometown due to the pandemic, Suraj
              returned to JNU and geared up to face the UPSC prelims. Despite
              knowing the odds were against him, he was resolute in his
              determination. He diligently followed a strategy, immersing
              himself in reading NCERT books, newspapers, and other relevant
              materials. His unwavering commitment and hard work paid off as he
              not only qualified for the exam but also secured the Junior
              Research Fellowship (JRF).
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Suraj Tiwari always believed in a quote by Swami Vivekananda, in
              which he said,
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
              " Wake up and stop not until the goal is reached. "
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
              In a world filled with challenges, Suraj's journey demonstrates
              that no matter the circumstances, one can overcome adversity and
              achieve greatness through sheer willpower. Let us draw inspiration
              from Suraj's remarkable story and apply the same dedication and
              perseverance to our own endeavors.
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

export default SurajTiwari;
