import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function ArpitGupta() {
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
      const sections = ["id_1", "id_2", "id_3", "id_4", "id_5", "id_6"];

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

          flexDirection: "column",
          marginBottom: "50px",
        }}
        className={styles["blog-mainhead"]}
      >
        <div className={styles["new-blog-header"]}>
          <h1 className={styles["blog-tdHead"]}>
            <span style={{ fontWeight: 700 }}>
              Vipassana to LBSNAA: How Arpit Gupta’s Inner-self told him how to
              prepare for UPSC and made him an IAS{" "}
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
              Arpit Gupta's journey is a remarkable tale of determination and
              resilience. Hailing from Sahjanwa, Gorakhpur, he was raised in a
              modest family, with his father employed by the Indian Railways.
              Despite successfully completing an engineering degree from IIT
              Roorkee and having a short stint as a financial market analyst,
              Arpit couldn't let go of his aspiration to become a civil servant.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              His story is not just about achieving success but also about how
              to prepare for UPSC. Arpit's experiences and approach to cracking
              the UPSC exam offer valuable insights for aspirants. His journey
              is a testament to the power of determination and self-discovery in
              the pursuit of one's dreams.
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Arpit's Inspiration and Motivation
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Arpit Gupta's journey to becoming an IAS officer began with a
              dream he had since the 9th grade. Despite studying Mechanical
              Engineering and briefly working as a Financial Market Analyst, his
              real passion was to join the civil services. What inspired him was
              the big difference between his life and that of a friend who
              didn't have the same opportunities due to their background.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Arpit's determination came from realizing that while he had the
              advantage of studying in a convent school and his father's job at
              Indian Railways provided him with the basics to follow his dream,
              his friend from a local government school didn't have the same
              luck. This motivated him to want to fix the issues in the
              country's education system.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Starting the UPSC Journey
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              In September 2019, Arpit began his UPSC journey. It was a daunting
              task, considering the countless aspirants using the same study
              materials. However, he drew confidence from his college seniors
              who had cracked the exam. Arpit decided not to follow the crowd by
              enrolling in coaching classes. He wanted to stand out with his
              unique approach.
            </span>
          </p>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <iframe
              className={styles["blog-iframe"]}
              src="https://www.youtube.com/embed/91yyGdvaXBw?si=8hVQvZRdNOJfRm2y"
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
              Arpit Gupta's Josh Talk on{" "}
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
              The Importance of Self-Realization
            </strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Arpit Gupta believed that doing well in the UPSC exam wasn't just
              about being book-smart; it was about knowing yourself. He
              suggested taking some time to figure out who you are before diving
              into intense studying. Ask yourself questions, such as, "What is
              my motivation for pursuing this?" and "What positive outcomes do I
              aspire to attain?" Brainstorm on strategies you'll employ to
              convert these aspirations into reality.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Arpit's advice is straightforward: don't copy what other
              successful candidates do. Instead, create your own plan that suits
              your strengths and weaknesses. He emphasized that being yourself
              and having your unique approach were vital for success, as it
              would help you stand out and reach your goals.
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Resource Management</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Arpit Gupta's approach to resource management is straightforward
              yet effective. He emphasizes the significance of handling study
              materials wisely. Arpit's recommendation is to pick a single
              high-quality resource or book for each subject and then create
              concise notes from it.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              He believes that such an approach streamlines the study process,
              preventing the overwhelming accumulation of excessive notes. Arpit
              understands that our memory has limitations, and bombarding it
              with extensive notes can be counterproductive.
            </span>
          </p>

          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>The Power of Motivation</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Arpit found motivation in simple things and lived by English
              quotes like "Hard work beats talent when talent doesn't work hard"
              and "Don't Procrastinate."
            </span>
          </p>

          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              For him, the UPSC journey was just a step toward his larger goal
              of bringing change to his hometown and addressing the lack of
              opportunities.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>Arpit's Vision</strong>
          </h2>

          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Arpit had a big dream. He wanted to make sure that the
              government's plans, like the New Education Policy 2020, actually
              happened on the ground and worked well. He aimed to check if these
              plans were going smoothly and find ways to make things better for
              the country.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              He believed that to make our country better, we needed to put
              these plans into action in a way that helped everyone. He wanted
              to be hands-on, solve any problems that might pop up, and make
              sure that these plans made a real difference in people's lives,
              especially in places where there weren't many opportunities.
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
              Arpit Gupta's journey from a small town to achieving All India
              Rank 54 in the Civil Services Exam is a story of determination,
              individuality, and the drive to make a difference. His journey can
              inspire anyone preparing for the UPSC exam, emphasizing the
              importance of believing in your abilities and following a unique
              path. Arpit's message resonates with those striving for success,
              reminding us that the UPSC journey is not just about passing an
              exam; it's about making a positive impact on many lives.
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

export default ArpitGupta;
