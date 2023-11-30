import React, {useState, useEffect} from "react";
import Image from "next/image";
import BookImage from "../../../Assets/bookUPSC.jpg";
import styles from "../../../../../../styles/coachings/mainBlog.module.css";

function TanuJain() {
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

    return (<div className={styles["topBlogDiv"]}>
        <div
            style={{
                marginTop: "50px", display: "flex", justifyContent: "center",

                flexDirection: "column", marginBottom: "50px",
            }}
            className={styles["blog-mainhead"]}
        >
            <div className={styles["new-blog-header"]}>
                <h1 className={styles["blog-tdHead"]}>
            <span style={{fontWeight: 700}}>
              Dr Tanu Jain: A Story of UPSC Preparation through Determination and Self-Belief
            </span>
                </h1>
                <p>
                    <br/>
                </p>
                <p>&nbsp;</p>
                <h2 id="id_1" className={styles["blog-subHead"]}>
                    <strong style={{fontWeight: 400}}>Introduction</strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Dr Tanu Jain, a prominent UPSC mentor and former IAS officer from the 2015
              batch, is a source of inspiration for many aspiring civil servants. Her
              UPSC preparation journey from the bustling streets of Sadar Bazaar, Delhi
              6, to securing the 648th rank in the UPSC Civil Services Examination is a
              testament to her determination and hard work.
            </span>
                </p>
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>
                        Early Years in Delhi 6
                    </strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Born into a humble Jain family, Dr Tanu Jain’s journey towards the UPSC
              preparation began in the heart of Delhi 6. Despite not showing much
              interest in academics until the 12th grade, a pivotal question from her
              mother about her future aspirations sparked a turning point in her life.
              It was after this question that she began to wonder what she wanted to
              become. Although she couldn’t figure out a way to the UPSC exam at that
              point in time, this question always kept hovering around in her mind.
            </span>
                </p>
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>Choosing the Path Less Traveled</strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Clueless about her future, she opted for medical science in higher
              secondary school. She went on to study medicine and completed her BDS from
              Subharti Medical College. However, it was during her internship that she
              stumbled upon the possibility of becoming an officer through UPSC. She
              heard somewhere that there’s an exam called UPSC and if one cracks it,
              people start respecting that person and consider that person highly
              intelligent. This discovery ignited a new ambition within her.{" "}
            </span>
                </p>
                <div
                    style={{
                        marginTop: "20px",
                    }}
                >
                    <iframe
                        className={styles["blog-iframe"]}
                        src="https://www.youtube.com/embed/zPubAb479eo?si=Ls2I3-U8HU6kZsrS"
                        title="UPSC Topper Tanu Jain's Josh Talks"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>

                    <p
                        style={{
                            fontFamily: "sans-serif", fontWeight: "lighter", marginTop: "5px",
                        }}
                    >
                        Tanu Jain's Talk on{" "}
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
                    <strong style={{fontWeight: 400}}>
                        Initiating UPSC Preparation
                    </strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              With limited family guidance, Dr Tanu Jain set out on her UPSC preparation
              armed with determination. She revealed her aspirations to her mother and a
              visit to the famous "Nayi Sadak" book market with her mother resulted in
              the purchase of a handful of books on UPSC. Although she later found out
              that those books were not very helpful for the exam, they kicked off her
              UPSC preparation and never looked back.
            </span>
                </p>
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>Surpassing Expectations in Prelims</strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              When Dr Tanu Jain started asking around for guidance, she always saw
              people come up with preconceived notions that the exam requires years of
              preparation and it’s almost impossible to clear the exam without a year of
              coaching. Contrary to these conventional beliefs around UPSC preparation,
              Dr Jain’s focused approach allowed her to clear the prelims in just two
              months. She emphasizes the importance of thorough study of basic books,
              particularly NCERTs, and dedicated practice with absolute determination
              for success in the preliminary examination.
            </span>
                </p>
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>Overcoming Mains Setback During UPSC Preparation</strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              While her success in the prelims was a significant achievement, Dr Tanu
              Jain faced a setback in the mains and couldn’t clear it due to a lack of
              preparation. Undeterred, she initiated a process of self-analysis,
              identifying areas where she fell short. Maintaining a detailed diary, she
              noted down all her weak areas and mistakes she committed during the
              initial days of her UPSC preparation. She systematically addressed each
              point and highlighted the importance of introspection and self-correction.
              She also kept a tight check on each of these points and noted her progress
              in her diary as her UPSC preparation went on.
            </span>
                </p>
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>
                        Lessons in Persistence
                    </strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin1"]}`}>
            <span style={{fontWeight: 400}}>
              Dr Tanu Jain’s advice to aspirants goes beyond the academic realm. She
              advocates never seeking external validation but rather evaluating the
              level of one's preparation. Dr Jain believes that although people always
              seek validation from people around them, deep down they always know how
              they’ve prepared and where they lag. Her mantra is rooted in self-belief,
              emphasizing that hard work and dedication, known only to the person
              preparing, are the true determinants of success.
            </span>
                </p>
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>The Interview Challenge</strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{fontWeight: 400}}>
              Expecting to excel in the interview after clearing the mains on her second
              attempt, Dr Tanu Jain faced an unexpected hurdle. Despite walking out of
              the UPSC interview with confidence that she’d make it to the top ranks,
              she secured only 151 marks, significantly lower than her expectations.
              This setback prompted her to embark on a journey of self-evaluation.
            </span>
                </p>
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>
                        Seeking Guidance and Inner Transformation
                    </strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{fontWeight: 400}}>
              During her next attempt, Dr Tanu Jain sought guidance from her friend,
              guide, philosopher, and now her husband, Vatsalya Kumar, also an IAS
              officer. Through his guidance, she identified what she must do to become
              an ideal candidate for the interview and understand how the panel wants an
              IAS officer to be.
            </span>
                </p>
                <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{fontWeight: 400}}>
              She suggests that the best way for an aspirant to work on his personality
              is to look up to the officer or achiever they consider as their idol and
              observe their conduct. Observe how they speak, how they maintain their
              composure during a discussion and always include facts and reason when
              they speak about something. She followed this practice and worked on her
              inner self and transformed herself through self-analysis. This deliberate
              effort led to a remarkable improvement, with Tanu securing 200 marks in
              the interview.
            </span>
                </p>{" "}
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>Embracing Imperfections and Growth in UPSC
                        Preparation</strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{fontWeight: 400}}>
              Dr Tanu Jain’s success story is not just about triumphs but also
              acknowledges imperfections. She encourages aspirants to recognize their
              shortcomings, emphasizing that improvement is possible with intent and
              determination. The best motivation, she believes, comes from within,
              making it a personal challenge and journey.{" "}
            </span>
                </p>
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>Facing Hurdles with Courage During UPSC Preparation</strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{fontWeight: 400}}>
              According to Dr Jain, hurdles and setbacks are an inherent part of the
              journey to success. She urges aspiring individuals to display courage and
              unwavering resolve to overcome challenges. While difficulties may arise,
              they should be viewed as stepping stones rather than roadblocks.
            </span>
                </p>
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>A Final Note of Inspiration</strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{fontWeight: 400}}>
              Dr Tanu Jain's UPSC preparation journey from the streets of Delhi to the
              Armed Forces Headquarters is a tale of inspiration and determination. Her
              story resonates with the idea that success is not solely about external
              preparation but a continuous effort towards self-improvement.
            </span>
                </p>
                <h2
                    id="id_1"
                    className={`${styles["blog-subHead"]} ${styles["addMargin1"]}`}
                >
                    <strong style={{fontWeight: 400}}>Conclusion</strong>
                </h2>
                <p className={`${styles["blog-p"]} ${styles["addMargin"]}`}>
            <span style={{fontWeight: 400}}>
              Aspiring UPSC candidates can draw valuable lessons from Dr Tanu Jain’s
              experiences, understanding that the path to success requires not only hard
              work but also a commitment to personal growth. Through her UPSC
              preparation journey, Dr Tanu Jain stands as a ray of hope for those
              striving to achieve their dreams in the realm of civil services.
            </span>
                </p>
                <p>
                    <span style={{fontWeight: 400}}>&nbsp;</span>
                </p>
            </div>
        </div>
    </div>);
}

export default TanuJain;
