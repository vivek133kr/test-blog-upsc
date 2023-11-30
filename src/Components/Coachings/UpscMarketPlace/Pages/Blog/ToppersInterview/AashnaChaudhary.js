import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function AashnaChaudhary() {
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
              Cracking the Code: Aashna Chaudhary's Remarkable IAS Preparation
              Journey{" "}
            </span>
          </h1>
          <p>
            <br />
          </p>
          <p>&nbsp;</p>
          <h2 id="id_1" className={styles["blog-subHead"]}>
            <strong style={{ fontWeight: 400 }}> Introduction</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              In the world of remarkable achievements and unwavering
              determination, Aashna Chaudhary's story shines brightly. She was
              born in a small town called Bilkhua, located in Uttar Pradesh. Her
              IAS preparation journey from a modest beginning to securing the
              116th position in the UPSC exam is a testament to her strong work
              ethic, resilience, and unwavering commitment to succeed.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>A Celebrated Beginning</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aashna's life began in a world where people cared a lot about
              tradition and what society expected from them. When Aashna was
              born as their first child, her parents were very happy, and they
              celebrated her arrival with great excitement. This celebration was
              significant because it defied a common belief that having such
              grand celebrations for a girl would mean having only daughters in
              the future. However, her grandmother always said that this girl
              will make it big one day. These early celebrations set the tone
              for hopes and expectations that later on became a part of her
              life.
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              A World of Opportunities
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aashna's family was well-educated, with several members holding
              Ph.D. degrees. This environment was both a blessing and a
              challenge. The fierce competition within her family pushed Aashna
              to push hard for excellence. Though she initially considered
              pursuing a career in the corporate world after her graduation,
              rejections only strengthened her resolve to follow her dream of
              becoming a civil servant.
            </span>
          </p>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <iframe
              className={styles["blog-iframe"]}
              src="https://www.youtube.com/embed/FJzNDjyRUgM?si=XGbSqV5xWM8nlyM7"
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
              Aashna Chaudhary's Josh Talk on{" "}
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
              The Road to IAS Preparation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aashna's journey to crack the UPSC exams was marked by
              determination and careful planning. After a years of preparation,
              she took the entrance test for the South Asian University and
              successfully cracked the IAS exam. However, her path was not
              without obstacles.
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Grit in the Face of Failure
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aashna faced consecutive failures in the UPSC prelims, which left
              her shattered and broken. But she did not give up. Instead, she
              gathered her courage and embarked on a new journey of
              self-improvement. She identified her mistakes, streamlined her
              sources, and adopted a more focused and integrated approach. Her
              preparations became centered on current affairs, and she started
              making concise notes for easy reference. She subscribed to
              coaching handouts, took mock tests for answer writing, and delved
              into reading three newspapers for IAS preparation: The Hindu, The
              Indian Express, and The Economic Times. Her meticulous approach
              reflected her unwavering commitment to success.{" "}
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Success Strategies for IAS preparation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aashna's success in the IAS preparation can be attributed to
              several key strategies:
            </span>
          </p>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <strong>Integrated Approach:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Aashna approached her UPSC preparations holistically, focusing
                on both prelims and mains, and also preparing for the interview.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>Current Affairs:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                She recognized the significance of staying updated with current
                affairs, a crucial aspect of the UPSC exam.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>Extensive Newspaper Reading:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Aashna emphasized that newspaper reading cannot be substituted
                by any coaching center's handout or monthly magazine.{" "}
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>Optional Subject:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Aashna emphasized the importance of choosing the right optional
                subject, as it can significantly impact your rank.
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <strong>Hobbies and Self-Care:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                She highlighted the importance of maintaining hobbies and taking
                care of one's mental well-being, given the toll that UPSC
                preparation can take.
              </span>
            </li>
          </ul>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Success Mantra for IAS preparation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>In Aashna's words,</span>
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
              " There's no substitute for hard work. Smart work is just a part
              of hard work. "
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Her unwavering dedication to her dream, combined with a clear
              strategy and relentless effort, helped her overcome the challenges
              she faced.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>A Journey that Inspires</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aashna Chaudhary's life isn't just about being a bright student at
              school or a meticulous one at college. Her UPSC journey is a story
              of taking challenges head-on, even when life becomes hard. She had
              to deal with lots of difficulties, not just in her studies but
              also in what people thought she could achieve.
            </span>
          </p>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <strong>Overcoming the odds:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Aashna's journey is similar to what many other folks like her
                experience. She spent a great deal of time getting ready for
                exams and encountered many tough moments along the way. But she
                never lost belief in herself and kept on trying, no matter how
                difficult it became.{" "}
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <strong>Family Support:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Her family played a huge role in her journey. They believed in
                her and provided the support she needed. This reminds us that
                behind every person's success, there are often family and
                friends who lend a helping hand and offer encouragement.
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <strong>Resilience:</strong>{" "}
              <span style={{ fontWeight: 400 }}>
                Aashna's UPSC journey demonstrates that with hard work and
                determination, anyone can overcome challenges, no matter where
                they come from. Her story is a guiding light that can inspire
                others to follow their dreams with confidence and to understand
                that success isn't just about the end goal, but about the
                journey itself.
              </span>
            </li>{" "}
          </ul>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Conclusion</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Aashna Chaudhary's journey reveals that people can triumph over
              tough times and achieve remarkable things. Her story is an
              inspiration for those who aspire to excel in their careers and for
              anyone who puts in the effort to reach their goals. Aashna's
              unwavering determination and never-give-up attitude pave the way
              for those who believe in the strength of hard work and
              perseverance.
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

export default AashnaChaudhary;
