import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function AadityaPandey() {
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
              From a Mischievous Kid to an IAS Ranker: Aaditya Pandey’s Journey
              of Finding UPSC Motivation Within
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
              Aaditya Pandey's incredible journey from a mischievous youngster
              to securing the 48th All India Rank (AIR) in the UPSC exams is a
              true testament to the power of determination and resilience.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              This UPSC motivation tale not only narrates his transformation but
              also serves as an uplifting guide for those with a basic
              understanding of the English language. Let's dive into the amazing
              story of Aaditya Pandey, who overcame all odds to become an IAS
              topper.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Early Life and Challenges
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aaditya Pandey was born in Patna, Bihar, and he was the youngest
              in his family, with two sisters and an older brother. He was known
              for getting into trouble as a mischievous child. Aaditya came from
              a humble background. His father had moved to Patna before he was
              born and worked in menial jobs, like being a peon.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              As a child, Aaditya was so cunning that a teacher once made a bet
              with Aaditya's father. The bet was that the teacher would shave
              off his moustache if Aaditya, the mischievous young boy, ever
              became successful in life. This bet was the first thing that
              motivated Aaditya to work hard.{" "}
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Struggles and Initial Hurdles
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aaditya continued his education by moving to Jamnagar, Gujarat,
              where his sister and brother-in-law lived. He did well in the 8th
              and 9th grades but faced difficulties in the 10th grade due to
              falling in love, which affected his school performance. His sister
              and brother-in-law had to leave Jamnagar due to work, so his
              mother moved to support him.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Feeling more pressure, Aaditya's father insisted on him pursuing
              engineering, even though he had initially enrolled in English
              Honors at Patna University. He ended up joining Lovely
              Professional University for engineering, where he did well with a
              CGPA of 8.7 in the first semester.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              However, his life took another downturn in the second semester
              when a breakup with his girlfriend left him heartbroken. This
              impacted his academic performance but he promised the girl, who
              broke up with him, that he would succeed in the UPSC exams.
            </span>
          </p>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <iframe
              className={styles["blog-iframe"]}
              src="https://www.youtube.com/embed/XItrtHAK-W0?si=nynKR2Gl4A521f1M"
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
              Aaditya Pandey's Josh Talk on{" "}
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
              The Turning Point: Mentorship and Perseverance
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aaditya's journey to success truly began when he met a college
              senior named Bharat while working out at his college’s gym. Bharat
              was a bright student who went on to become an IES officer and
              pursued his Ph.D. at IIT Roorkee later.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Their conversations, filled with profound knowledge, transformed
              Aaditya's perspective. It was during these college gym meetings
              that he acquired knowledge about the world of UPSC examinations.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aaditya considered ‘Bharat Bhaiya’ as his guru and engaged in
              numerous discussions over tea during his college days. This marked
              the beginning of his dedicated preparation for the UPSC
              examinations.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Path to UPSC: The Beginning
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aaditya went through different stages in life, including a short
              job he left just three months before the COVID-19 pandemic hit. He
              started his UPSC journey by attempting the exam in 2020 after
              preparing for only 6-7 months. Until now, nobody in his
              neighborhood knew he was preparing for the exam; they assumed he
              was working from home.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>A Streak of Setbacks</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              The first setback happened when he didn't pass the UPSC prelims in
              his first try. It was disheartening, but his father always
              encouraged him to keep working hard. So, he persevered and began
              preparing for the exam once more. A few days before the next
              prelims, he learned that he had missed passing by only 25 marks
              last time.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              He worked even harder, but luck wasn't on his side once again. He
              failed the exam once more, but this time, he missed it by just 2.5
              marks. This failure actually motivated him and made him believe he
              could succeed. During this time, people in his neighborhood
              started doubting and criticizing him, considering him a failure.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aaditya says he drew inspiration from a quote by Tulsidas from
              Ramcharitmanasa:{" "}
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
              “त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः । <br /> कामः क्रोधस्तथा
              लोभस्तस्मादेतत्त्रयं त्यजेत् ॥“
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Translation: “This is the threefold gateway to hell and the
              destruction of the self. Lust, anger, and greed, therefore one
              should abandon these three.”
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Undeterred by the setbacks, Aaditya realised he needed the right
              mentorship and risked a sum of 50,000 rupees to avail guidance
              from a coaching centre.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              He continued his journey, and his determination bore fruit when he
              passed the Prelims in his third attempt. Mock interviews played a
              crucial role in refining his skills. Although he was often
              perceived as a bit loud, but one of his mentors, Manish Bariyar,
              told him that if he was defending his points rationally, legally,
              morally, and ethically, its fine if he’s being himself. Aaditya
              kept that thing in mind and followed the same principle during his
              UPSC interview.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Achieving UPSC and Beyond
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aaditya's strong effort and never-give-up attitude paid off when
              he secured the 48th rank in the UPSC exams. He wants people to
              know that he's just an ordinary person, not a superhuman. He
              didn't study for 14-16 hours a day. His success, he believes, came
              from aiming precisely at his goal, much like Arjuna in the
              Ramayana, who aimed for the sparrow's eye, not its body.Aaditya
              underscores the importance of self-reflection, transparency, and
              ethical conduct. He cites a verse from the renowned Indian poet
              Ramdhari Singh Dinkar,
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
              " खम ठोंक ठेलता है जब नर, पर्वत के जाते पाँव उखड़। <br /> मानव जब
              जोर लगाता है, पत्थर पानी बन जाता है| ”
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              This verse, Aadiya believes, was always his guiding principle
              during his preparation days.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aaditya Pandey strongly believes in following what is right, fair,
              and lawful at every step of his journey. He encourages others to
              also stick to their values and principles, and he offers this
              advice to those who aim to follow in his footsteps.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Conclusion</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aaditya Pandey's journey, from a mischievous child to a successful
              IAS topper, can inspire anyone. It shows the importance of never
              giving up, having a mentor, and doing what's right to succeed. His
              story proves that with hard work and self-confidence, anyone can
              overcome challenges and achieve great things.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              In a world where challenges are part of every journey, Aaditya's
              story offers hope to those aiming to pass the UPSC exams. It
              reminds us that with dedication, determination, and the right
              guidance, even the most challenging dreams can come true.
            </span>
          </p>{" "}
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              As you follow your own path to success, remember the lessons from
              Aaditya's journey: stick to your values, keep going when faced
              with setbacks, and always believe in your ability to make your
              dreams a reality.
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

export default AadityaPandey;
