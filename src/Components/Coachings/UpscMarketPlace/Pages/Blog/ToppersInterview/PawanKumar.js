import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function PawanKumar() {
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
              Overcoming Challenges in UPSC Preparation for Triumph: The Pawan
              Kumar Kumawat Way.
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
              Inspirational stories often emerge from the most unexpected and
              humble beginnings. Pawan Kumar Kumawat's journey from a remote
              village in Rajasthan to his UPSC preparation and securing the
              551st rank in the UPSC CSE 2021 is a tale of unparalleled
              perseverance and resilience. Let's delve deeper into the
              incredible life of Pawan Kumar Kumawat.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>The Foundation</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Pawan Kumar was born and raised in Somana, a small village in the
              Nagaur district of Rajasthan. His father, a truck driver, and his
              mother, a homemaker, laid the foundation of his upbringing. He
              completed his early education from his local village school, and
              despite the limited resources, he displayed immense potential.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              After completing his schooling, Pawan graduated from the
              Government Dental College in Jaipur. This marked the beginning of
              a remarkable journey off UPSC preparation that would inspire many.
            </span>
          </p>{" "}
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Spark of Inspiration
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Pawan's life took a transformative turn when he came across the
              story of Govind Jaiswal, the son of a rickshaw driver who defied
              all odds to successfully crack the UPSC exam. The story of Govind
              Jaiswal's resilience touched Pawan, and he realized that he, too,
              could achieve greatness despite the challenging circumstances he
              hailed from.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Pawan firmly believed that the Indian Administrative Service
              (IAS), often perceived as an exclusive club, should be accessible
              to individuals from all backgrounds, including those who hailed
              from backward areas or classes.
            </span>
          </p>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <iframe
              className={styles["blog-iframe"]}
              src="https://www.youtube.com/embed/47tsC55Vrm8?si=c1flJOfi9qyKA6hc"
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
              Pawan Kumar's Josh Talk on{" "}
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
            <strong style={{ fontWeight: 400 }}>Lessons from Childhood</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              During his formative years in the village, Pawan's father engaged
              in the family's hereditary craft of crafting clay utensils. It was
              during these moments that Pawan's father imparted invaluable life
              lessons to his son. In the absence of electricity during the
              nights, he recited several inspiring stories that left a lasting
              impact on Pawan.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              These stories introduced Pawan to extraordinary individuals who
              had overcome obstacles, which seemed undefeatable, to achieve
              their goals. Figures like Dr B. R. Ambedkar, Helen Keller, and Dr
              Lal Bahadur Shastri became a source of inspiration and strength
              for Pawan during his most challenging moments.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Helen Keller's remarkable journey, particularly, left a permanent
              mark on his heart. Her determination to pursue education despite
              being deaf and blind became a guiding light for Pawan during his
              toughest days.{" "}
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Taking a Leap</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Recognizing Pawan's academic ability, the villagers noticed his
              potential and informed his father. In response, his father made a
              crucial decision. He decided to relocate from the village and
              admitted Pawan to a school in Nagaur. This move came at a great
              cost, as his father had to transition from utensil-making to truck
              driving to support Pawan's education. However, it was a price he
              was willing to pay for Pawan's dreams.{" "}
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Trials and Triumphs</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              In 2012, Pawan proudly graduated from college with a burning
              desire to crack the UPSC exam on his very first attempt. However,
              despite his intense efforts and relentless UPSC preparation, he
              fell short of the mark. This initial setback dealt a severe blow
              to his confidence, but it didn't break his spirit.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Pawan took on multiple attempts to achieve his goal but success
              remained elusive. At one stage, he took a brief break from his
              UPSC aspirations and turned his attention to the Rajasthan State
              Services examination, where he got recommended. Yet, the UPSC
              continued to be the ultimate dream.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              In the face of daunting challenges, Pawan Kumar Kumawat's
              resilience prevailed. He returned to his UPSC dreams with renewed
              determination, and in 2021, he achieved the success he had worked
              so tirelessly for.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Pawan’s Winning Strategies
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Pawan Kumar Kumawat's UPSC preparation journey is not just about
              unwavering determination but also the unique strategies he
              employed to navigate the complexities of the UPSC examination.
              Here are some of his key recommendations:
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Prelims</strong>
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <span style={{ fontWeight: 400 }}>
                For the preliminary stage, he emphasizes focusing on the broader
                aspects of each subject, rather than getting lost in intricate
                details.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                He categorized the preliminary subjects into distinct parts:
                History, Polity, Geography, Economy, Environment, Science and
                Technology, and Current Affairs.
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                To build a strong foundation, he relied on reference books like
                old NCERTs and Spectrum. For Art and Culture, Nitin Singhania's
                book was a valuable resource.
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                When it came to staying updated with current affairs, he
                advocated the 'one newspaper, one magazine' approach.
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                In the month leading up to the preliminary exams, he advised
                students to refrain from learning new material and instead focus
                on revising and fine-tuning their knowledge.
              </span>
            </li>
          </ul>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Mains</strong>
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <span style={{ fontWeight: 400 }}>
                Pawan underscores the importance of creating concise,
                to-the-point notes for the main examination.
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                He believes that consistent practice in answer writing is
                crucial for success.
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                To assess one's own progress, he recommends comparing your
                answers with those of the top-performing candidates.
              </span>
            </li>{" "}
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                While detailed note-making may not be as crucial for the
                preliminary stage, it is of paramount importance for the mains
                examination.{" "}
              </span>
            </li>{" "}
          </ul>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Interview</strong>
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
              <span style={{ fontWeight: 400 }}>
                Pawan also emphasizes the significance of practicing for the
                interview stage. Forming a group with fellow aspirants for mock
                interviews is highly recommended.{" "}
              </span>
            </li>
            <li className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
              <span style={{ fontWeight: 400 }}>
                He suggests recording mock interviews and reviewing them to
                identify areas for improvement.
              </span>
            </li>{" "}
          </ul>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Source of Inspiration
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Pawan Kumar Kumawat found his guiding light in a memorable
              dialogue from an inspirational Bollywood movie called "Manjhi."
              The main character passionately declares,
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
              " Jab Tak Todenge Nahi, Tab Tak Chodenge Nahi, "
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              which translates to "I won't let go until I crack it." This
              resounding statement echoed in Pawan's mind throughout his
              journey.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Key Takeaways</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Pawan's journey taught him valuable life lessons that are not
              limited to competitive examinations.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <strong>Patience: </strong>{" "}
            <span style={{ fontWeight: 400 }}>
              Pawan's journey taught him valuable life lessons that are not
              limited to competitive examinations.
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
              " कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। "
            </span>
          </p>
          <p
            style={{
              textAlign: "center",
            }}
            className={`${styles["blog-p"]} ${styles["addMargin1"]}`}
          >
            <span style={{}}>
              " Do your duty and don't think about the outcome. "
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <strong>Perseverance: </strong>{" "}
            <span style={{ fontWeight: 400 }}>
              Just as a cricket match can turn in the last over, life, too, can
              take unexpected turns. Pawan's journey is a testament to the power
              of unwavering resolve.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <strong>Stress Management: </strong>{" "}
            <span style={{ fontWeight: 400 }}>
              To achieve success, Pawan encourages individuals to find
              stress-relieving hobbies like yoga or meditation. His own
              experience, culminating in success nearly a decade after
              graduation, underscores the importance of managing stress
              effectively.
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
              Pawan Kumar Kumawat's story is not just one of determination but a
              testament to the human spirit's ability to conquer even the most
              daunting challenges. His UPSC preparation journey from a small
              village to achieving the rank of 551 in the UPSC CSE serves as a
              inspiration for all, reminding us that with unwavering resolve, we
              can overcome any obstacle in our path.
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

export default PawanKumar;
