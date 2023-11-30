import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";
function GovindJaiswal() {
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
              Govind Jaiswal’s UPSC Preparation: A Tale of Grit, Struggle,
              Persistence, and Determination{" "}
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
              In life, there are folks who come from really tough situations and
              still manage to achieve great things. One such inspiring story is
              about Govind Jaiswal. He grew up in Varanasi, Uttar Pradesh, and
              his journey from the streets of Benaras to becoming All India Rank
              48 in the UPSC exam in 2007 is truly amazing. Govind’s UPSC
              preparation journey is a story of hard work, facing challenges,
              never giving up, and having strong determination.{" "}
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>A Humble Beginning</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Govind's life started in Varanasi, a city full of history and
              culture, where his father worked as a rickshaw operator, while his
              mother diligently managed the household. They worked tirelessly to
              make both ends meet, with no inkling that their son would
              ultimately accomplish something genuinely extraordinary.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              As a youngster, Govind would wander through the streets of Banaras
              with an inquisitive mind. He had grand aspirations and he always
              thought of going beyond the ordinary existence he observed around
              him. However, the people around him always suggested that he
              should follow his father and upgrade to auto-rickshaw driver, as
              his father drove a cycle-rickshaw.
            </span>
          </p>{" "}
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>The Awakening </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              In the 6th grade, Govind experienced a strange incident which
              changed his life forever. He realized that society was divided
              into different groups, and people often judge others based on
              their family’s background and profession.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Once, he went to a friend's house, and his friend's dad asked him
              about his father. On telling him his father’s name and profession,
              he was insulted and told to leave the house, even though he was a
              topper of his class.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              This experience deeply affected him. He went to his teacher and
              told him everything. The teacher then explained that this
              discrimination based on people's backgrounds was common in the
              society. The teacher smiled at Govind’s curiosity and told him
              there were two ways to break through these barriers: either become
              a successful businessperson and earn a lot of money or pass the
              most respected and toughest exam in India called the IAS. That
              day, little Govind had already made up his mind that he will go
              for UPSC preparation
            </span>
          </p>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <iframe
              className={styles["blog-iframe"]}
              src="https://www.youtube.com/embed/5xJ9GOpTLC8?si=3hcT14Cl5HDmIpze"
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
              Govind Jaiswal's Josh Talk on{" "}
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
            <strong style={{ fontWeight: 400 }}>The Dream Takes Shape</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              When Govind was in 6th standard and was just 12 years old, he made
              a big decision. He decided that he is going to become an IAS
              officer one day, and even though he dhad a very little knowledge
              about IAS or UPSC preparation, he started to ask around for
              preparation tips. During this phase, someone advised him that if
              he wants to do UPSC preparation, he has to read the newspaper
              every day.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              To follow this advice, he convinced a doctor in his neighborhood
              to give him the newspaper every evening. He would wait for the
              doctor to come in the evening everyday. Every evening, he would
              read the newspaper and then give it back to him.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              As he reached the 10th grade, Govind started to put more effort
              into his studies but he always kept his dream a secret. On one
              hand, he was studying hard and on the other hand his family was
              expecting him to finish 12th grade and somehow procure an
              auto-rickshaw, which cost 35,000 rupees back then.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>The Path of Dedication</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Not giving up in the face of problems, Govind managed to save
              money from the 6th to the 10th grade. He used that money to buy
              books on General Studies before every summer vacation and studied
              really hard.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              His study space was quite small, just 12 feet by 8 feet, and he
              had to share it with his family's kitchen, bathroom, and sleeping
              area. Despite the limited space, Govind managed to create his own
              little world and studied diligently under the light of a single
              lamp. No struggle ever came in the way of his UPSC preparation.{" "}
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              He understood that when you commit yourself to a dream, the
              universe somehow helps you along the way. While his father’s
              knowledge was so limited that he thought that jobs like Lekhpal
              and constable are highest. He didn’t know back then that Govind
              had his eyes set on a bigger goal. He realized that he needed to
              finish his academic education before he could fully focus on his
              dream.{" "}
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              Sacrifices and Determination
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Yet, life had more challenges in store for Govind. When his mother
              passed away, his sister had to leave college during her second
              year. People suggested that she should take up simple jobs, but
              Govind had a different approach. He believed there were two ways
              to respond to such negative situations: either answer them or use
              that negativity as motivation to achieve your goals.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              When he was in the 8th grade, Govind began teaching tuition
              classes to support his studies. As his father's health declined,
              he took on a part-time job as a salesman at a shoe store, earning
              just 150 rupees as his salary. As time passed, Govind's ambitions
              grew and his UPSC preparation became intense.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Pursuit of Knowledge
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Reaching graduation was a big deal for Govind. He asked for two
              more years of study, which surprised his father because he didn't
              know much about what came next. Then, during an orientation camp,
              Govind learned about the schema of UPSC preparation and decided he
              wanted to move to Delhi to pursue it. But there was a big problem:
              money.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              Still, Govind didn't give up and asked his father for help. Even
              though his father was a simple man with very limited education, he
              believed in his son's dream. So, he sold his only possession to
              give Govind 40,000 rupees for his journey.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              In Delhi, Govind rented a tiny room under a set of stairs. It was
              just 7 feet by 3 feet, barely big enough for a bed. At that time,
              he weighed only 42 kilograms. Govind didn’t care for his health or
              comfort, all he thought about was his goal.
            </span>
          </p>
          {/* <p
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
          </p> */}
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Uphill Battle of UPSC Preparation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              When Govind reached Delhi, he faced a lot of difficulties. His
              father's foot got severely infected and needed medical care while
              his sister was going through marital problems. Despite all these
              personal problems, Govind had just two years to fulfill his
              childhood dream.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              With unwavering determination, Govind made a plan. He divided his
              study time into 167 topics, giving himself only 2.5 days for each
              topic to study, review, and remember.
            </span>
          </p>{" "}
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              He carefully calculated all his expenses and figured out that he
              needed 2,400 rupees every month. To save money, he stopped buying
              new clothes and ate less food. Meanwhile, his father's health got
              even worse, and he couldn't pull a rickshaw anymore. Instead, he
              started to repair rickshaws to make a living.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Power of Dedication in UPSC Preparation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Govind's dedication during his UPSC preparation was truly
              exceptional. There was a time when he studied for a straight 72
              hours, focusing on his philosophy subject. During those hours, he
              didn't eat or rest, and it took a toll on his body. After
              finishing the main exam, he couldn't eat because he got dehydrated
              and his intestines got stuck. It took him another 6 months to come
              back to normal diet.
            </span>
          </p>
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              When he returned home, he found out that his father's wound had
              gotten worse because of a bad surgery. Govind was worried about
              not passing the exam, so he went back to Delhi after a short
              break. He always evaluated himself critically, which motivated him
              to do even better than he expected. And his hard work paid off
              when the results for the main exam were announced, and he passed.
            </span>
          </p>
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>The Transformation</strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              When Govind was getting ready for the interview, everyone was
              happy that he was appearing for the interview in his first attempt
              but he was still tense because had no proper clothes to wear. He
              borrowed shoes from a friend but for clothes he had to reach out
              his sister for some help. He later found out that the 2000 rupees
              that she gave him was meant for her pregnancy ultrasound and scans
              in the first trimester. Despite her condition, she risked her life
              as she had deep faith in his dream.
            </span>
          </p>{" "}
          <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{ fontWeight: 400 }}>
              When he went for the interview, he was honest and humble and told
              the panel that he has never thought what he would do if he doesn’t
              make it but he has left no stone unturned to qualify. And it
              turned out to be a success. When the results came out, Govind was
              told that he had secured All India Rank 48. Everything changed
              around him and even he was astonished to see that. Relatives he
              didn't even know started calling him, and he realized that he had
              broken through the social barriers he had been warned about.
            </span>
          </p>{" "}
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Power of Dedication in UPSC Preparation
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              Govind's dedication during his UPSC preparation was truly
              exceptional. There was a time when he studied for a straight 72
              hours, focusing on his philosophy subject. During those hours, he
              didn't eat or rest, and it took a toll on his body. After
              finishing the main exam, he couldn't eat because he got dehydrated
              and his intestines got stuck. It took him another 6 months to come
              back to normal diet.
            </span>
          </p>{" "}
          <h2
            id="id_1"
            className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
          >
            <strong style={{ fontWeight: 400 }}>
              The Realization of a Dream
            </strong>
          </h2>
          <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{ fontWeight: 400 }}>
              The shine in his father's eyes and the newfound respect he
              received from everyone made Govind believe that had achieved what
              he dreamt of 10 years ago. His story is an inspiration to all, a
              testament that with grit, determination, dedication, and
              perseverance, one can overcome any adversity.
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
              In a world filled with inspiring tales, Govind Jaiswal's UPSC
              preparation journey stands as a shining example of the incredible
              power of utmost determination. His narrative isn't just a story of
              success; it's a potent reminder that as long as you persist and
              refuse to surrender, your dreams can absolutely become a reality.
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

export default GovindJaiswal;
